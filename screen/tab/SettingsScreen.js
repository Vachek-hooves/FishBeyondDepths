import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GameLayout from '../../components/Layout/GameLayout';
import {HomeIconNavigation} from '../../components/UI';

const SettingsScreen = () => {
  return (
    <GameLayout>
      <HomeIconNavigation />
    </GameLayout>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
