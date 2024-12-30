import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import GameLayout from '../../components/Layout/GameLayout';
import CustomLockIcon from '../../components/Icons/CustomLockIcon';
import {labirinth} from '../../data/labirinth';
import PlainLayout from '../../components/Layout/PlainLayout';
import Header from '../../components/UI/Header';
import ReturnBtn from '../../components/Icons/ReturnBtn';

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
  const handleLevelPress = level => {
    navigation.navigate('PlayGameScreen', {
      levelData: level,
    });
  };

  return (
    <PlainLayout>
      <Header title={'Levels'} />
      <View style={styles.container}>
        <View style={styles.levelsGrid}>
          {labirinth.map(level => (
            <LevelButton
              key={level.id}
              level={level}
              isActive={level.isActive}
              onPress={() => handleLevelPress(level)}
            />
          ))}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  homeButton: {
    width: 45,
    height: 45,
    backgroundColor: '#0096FF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0096FF',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  homeIcon: {
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0096FF',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  scoreText: {
    color: '#FFD700',
    fontSize: 18,
    marginRight: 4,
  },
  scoreIcon: {
    fontSize: 18,
  },
  levelsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
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
  },
  levelNumber: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: '600',
  },
});
