import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PlainLayout = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/bg/bg1.png')}
      style={styles.container}>
      <View style={{height: 130}} />
      {children}
      <View style={{height: 120}} />
    </ImageBackground>
  );
};

export default PlainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
