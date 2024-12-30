import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TabLayout from './TabLayout';
import {BlueFish} from '../UI';

const GameLayout = () => {
  return (
    <TabLayout style={styles.container}>
      <Text style={styles.title}>Fish Beyond{'\n'}the Depths</Text>
      <View style={styles.fishContainer}>
        <View style={styles.topFish}>
          <BlueFish />
        </View>
        <View style={styles.bottomFish}>
          <BlueFish />
        </View>
      </View>
    </TabLayout>
  );
};

export default GameLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0B2E',
  },
  title: {
    fontSize: 36,
    color: '#FFD700',
    textAlign: 'center',
    marginTop: 60,
    fontWeight: '600',
    textShadowColor: 'rgba(255, 215, 0, 0.5)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 10,
  },
  fishContainer: {
    flex: 1,
    position: 'relative',
  },
  topFish: {
    position: 'absolute',
    top: '20%',
    right: '0%',
    transform: [{rotate: '-5deg'}],
  },
  bottomFish: {
    position: 'absolute',
    bottom: '30%',
    left: '10%',
    transform: [{rotate: '10deg'}, {scaleX: -1}], // Flip horizontally and rotate
  },
});
