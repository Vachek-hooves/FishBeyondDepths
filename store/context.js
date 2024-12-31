import {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {labirinth} from '../data/labirinth'; // Import labirinth data

export const AppContext = createContext({});

export const ContextProvider = ({children}) => {
  const [totalScore, setTotalScore] = useState(0);
  const [completedLevels, setCompletedLevels] = useState({});
  const [selectedBackground, setSelectedBackground] = useState(1);
  const [selectedFish, setSelectedFish] = useState(1);
  const [unlockedLevels, setUnlockedLevels] = useState({1: true}); // Level 1 starts unlocked
  console.group(
    // completedLevels,
    selectedBackground,
    selectedFish,
    // unlockedLevels,
  );

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
        } = JSON.parse(savedData);

        setTotalScore(savedScore || 0);
        setCompletedLevels(savedLevels || {});
        setSelectedBackground(savedBg || 1);
        setSelectedFish(savedFish || 1);
        setUnlockedLevels(savedUnlockedLevels || {1: true});
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
      };
      await AsyncStorage.setItem('gameData', JSON.stringify(dataToSave));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

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

      // Unlock next level
      const nextLevelId = levelId + 1;
      if (nextLevelId <= labirinth.length) {
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

  const setBackground = backgroundId => {
    setSelectedBackground(backgroundId);
  };

  const setFish = fishId => {
    setSelectedFish(fishId);
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
    completeLevel,
    setBackground,
    setFish,
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
