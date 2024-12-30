import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeIconNavigation from './HomeIconNavigation';
import ScoreIcon from './ScoreIcon';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <HomeIconNavigation />
      <Text style={styles.title}>{title}</Text>
      <ScoreIcon />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#0096FF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    top: '6%',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    letterSpacing: 2,
    color: '#FFD700',
  },
});
