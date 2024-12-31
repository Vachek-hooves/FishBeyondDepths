import {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {backgrounds} from '../data/backgrounds';
import {FISHES} from '../data/fishes';
import { labirinth } from '../data/labirinth';

export const AppContext = createContext({});

export const ContextProvider = ({children}) => {
  const [totalScore, setTotalScore] = useState(0);
  const [completedLevels, setCompletedLevels] = useState({});
  const [selectedBackground, setSelectedBackground] = useState(1);
  const [selectedFish, setSelectedFish] = useState(1);
  const [unlockedLevels, setUnlockedLevels] = useState({1: true});
  const [unlockedItems, setUnlockedItems] = useState({
    backgrounds: {1: true}, // First background is free
    fishes: {1: true}, // First fish is free
  });
  console.log(unlockedLevels)

  // Load saved data when app starts
  useEffect(() => {
    loadSavedData();
  }, []);

  // Save data whenever it changes
  useEffect(() => {
    saveData();
  }, [
    totalScore,
    completedLevels,
    selectedBackground,
    selectedFish,
    unlockedLevels,
    unlockedItems,
  ]);

  const loadSavedData = async () => {
    try {
      const savedData = await AsyncStorage.getItem('gameData');
      if (savedData) {
        const {
          totalScore: savedScore,
          completedLevels: savedLevels,
          selectedBackground: savedBg,
          selectedFish: savedFish,
          unlockedLevels: savedUnlockedLevels,
          unlockedItems: savedUnlockedItems,
        } = JSON.parse(savedData);

        setTotalScore(savedScore || 0);
        setCompletedLevels(savedLevels || {});
        setSelectedBackground(savedBg || 1);
        setSelectedFish(savedFish || 1);
        setUnlockedLevels(savedUnlockedLevels || {1: true});
        setUnlockedItems(savedUnlockedItems || {
          backgrounds: {1: true},
          fishes: {1: true},
        });
      }
    } catch (error) {
      console.error('Error loading saved data:', error);
    }
  };

  const saveData = async () => {
    try {
      const dataToSave = {
        totalScore,
        completedLevels,
        selectedBackground,
        selectedFish,
        unlockedLevels,
        unlockedItems,
      };
      await AsyncStorage.setItem('gameData', JSON.stringify(dataToSave));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  // Purchase and unlock items
  const purchaseItem = (type, itemId, price) => {
    if (totalScore >= price) {
      setTotalScore(prev => prev - price);
      setUnlockedItems(prev => ({
        ...prev,
        [type]: {
          ...prev[type],
          [itemId]: true,
        },
      }));
      return true;
    }
    return false;
  };

  // Check if item is unlocked
  const isItemUnlocked = (type, itemId) => {
    return unlockedItems[type]?.[itemId] || false;
  };

  // Set active background
  const setBackground = backgroundId => {
    if (isItemUnlocked('backgrounds', backgroundId)) {
      setSelectedBackground(backgroundId);
      return true;
    }
    return false;
  };

  // Set active fish
  const setFish = fishId => {
    if (isItemUnlocked('fishes', fishId)) {
      setSelectedFish(fishId);
      return true;
    }
    return false;
  };

  // Get current active items
  const getActiveItems = () => ({
    background: backgrounds.find(bg => bg.id === selectedBackground)?.image,
    fish: FISHES.find(fish => fish.id === selectedFish)?.image,
  });

  const completeLevel = levelId => {
    if (!completedLevels[levelId]) {
      // Add level score
      const levelScore = 30;
      setCompletedLevels(prev => ({
        ...prev,
        [levelId]: {
          completed: true,
          score: levelScore,
          timestamp: Date.now(),
        },
      }));
      setTotalScore(prev => prev + levelScore);

      // Unlock next level if it exists
      const nextLevelId = levelId + 1;
      const nextLevelExists = labirinth.some(level => level.id === nextLevelId);
      
      if (nextLevelExists) {
        setUnlockedLevels(prev => ({
          ...prev,
          [nextLevelId]: true,
        }));
      }
    }
  };

  const isLevelUnlocked = levelId => {
    return !!unlockedLevels[levelId];
  };

  const getLevelScore = levelId => {
    return completedLevels[levelId]?.score || 0;
  };

  const value = {
    totalScore,
    completedLevels,
    selectedBackground,
    selectedFish,
    unlockedLevels,
    unlockedItems,
    completeLevel,
    purchaseItem,
    setBackground,
    setFish,
    isItemUnlocked,
    getActiveItems,
    getLevelScore,
    isLevelUnlocked,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppContext Provider');
  }
  return context;
};
