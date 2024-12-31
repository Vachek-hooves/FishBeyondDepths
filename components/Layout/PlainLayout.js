import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {useAppContext} from '../../store/context';

const PlainLayout = ({children}) => {
  const {getActiveItems} = useAppContext();
  const {background} = getActiveItems();

  return (
    <ImageBackground source={background} style={styles.container}>
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
