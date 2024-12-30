import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import TabLayout from './TabLayout';
import {BlueFish, HomeIconNavigation} from '../UI';

const {width, height} = Dimensions.get('window');

const GameLayout = ({children}) => {
  return (
    <TabLayout style={styles.container}>
      {/* Background Layer */}
      {/* <HomeIconNavigation /> */}
      <View style={styles.backgroundLayer}>
        <Text style={styles.title}>Fish Beyond{'\n'}the Depths</Text>
        <View style={styles.fishContainer}>
          <View style={styles.topFish}>
            <BlueFish />
          </View>
          <View style={styles.bottomFish}>
            <BlueFish />
          </View>
        </View>
      </View>

      {/* Content Layer */}
      <View style={styles.contentLayer}>{children}</View>
    </TabLayout>
  );
};

export default GameLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0B2E',
  },
  backgroundLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  contentLayer: {
    flex: 1,
    zIndex: 2,
  },
  title: {
    fontSize: 42,
    color: '#FFD700',
    textAlign: 'center',
    marginTop: 60,
    fontWeight: '600',
    textShadowColor: 'rgba(255, 215, 0, 0.5)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 10,
    position: 'absolute',
    top: '15%',
    // left: '50%',
    // transform: [{translateX: -100}],
    // transform: [{translateX: -(width / 2) + 'px'}],
    zIndex: 2,
    letterSpacing: 4,
    justifyContent: 'center',
    width: '100%',
  },
  fishContainer: {
    flex: 1,
    position: 'relative',
  },
  topFish: {
    position: 'absolute',
    top: '30%',
    left: '-15%',
    transform: [{rotate: '-15deg'}],
  },
  bottomFish: {
    position: 'absolute',
    bottom: '15%',
    right: '-15%',
    transform: [{rotate: '15deg'}, {scaleX: -1}],
  },
});
