import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GameLayout from '../../components/Layout/GameLayout';
import {HomeIconNavigation} from '../../components/UI';

const InfoScreen = () => {
  return (
    <GameLayout>
      <HomeIconNavigation />
    </GameLayout>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({});
