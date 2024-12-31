import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppContext} from '../../store/context';

const ScoreIcon = () => {
  const {totalScore} = useAppContext();
  // console.log(totalScore,'ScoreIcon')
  return (
    <View style={styles.iconContainer}>
      <Text style={styles.score}>{totalScore}</Text>
      <Icon name="water" size={32} color="#FFD700" />
    </View>
  );
};

export default ScoreIcon;

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: '#0096FF',
    // width: 65,
    height: 45,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  score: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 2,
    color: '#FFD700',
    paddingHorizontal: 10,
  },
});
