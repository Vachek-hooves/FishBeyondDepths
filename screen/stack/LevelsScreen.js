import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import GameLayout from '../../components/Layout/GameLayout';
import CustomLockIcon from '../../components/Icons/CustomLockIcon';
import {labirinth} from '../../data/labirinth';
import PlainLayout from '../../components/Layout/PlainLayout';
import Header from '../../components/UI/Header';
import ReturnBtn from '../../components/Icons/ReturnBtn';
import {useAppContext} from '../../store/context';

const LevelButton = ({level, onPress, isActive}) => (
  <TouchableOpacity
    style={styles.levelButton}
    onPress={onPress}
    disabled={!isActive}>
    {isActive ? (
      <Text style={styles.levelNumber}>{level.id}</Text>
    ) : (
      <CustomLockIcon color="#FF4040" size={24} />
    )}
  </TouchableOpacity>
);

const LevelsScreen = ({navigation}) => {
  const {isLevelUnlocked} = useAppContext();

  const renderLevelButton = (level) => {
    const isUnlocked = isLevelUnlocked(level.id);

    return (
      <TouchableOpacity 
        key={level.id}
        style={styles.levelButton}
        onPress={() => {
          if (isUnlocked) {
            navigation.navigate('PlayGameScreen', {levelData: level});
          }
        }}
        disabled={!isUnlocked}>
        {isUnlocked ? (
          <Text style={styles.levelNumber}>{level.id}</Text>
        ) : (
          <CustomLockIcon />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <PlainLayout>
      <Header title={'Levels'} />
      <View style={styles.container}>
        <View style={styles.levelsGrid}>
          {labirinth.map(level => renderLevelButton(level))}
        </View>
      </View>
      <ReturnBtn />
    </PlainLayout>
  );
};

export default LevelsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  levelsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  levelButton: {
    width: 60,
    height: 60,
    backgroundColor: '#0096FF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0096FF',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginVertical:5
  },
  levelNumber: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: '600',
  },
});
