import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GameLayout from '../../components/Layout/GameLayout';
import {HomeIconNavigation} from '../../components/UI';
import PlainLayout from '../../components/Layout/PlainLayout';
import Header from '../../components/UI/Header';

const SettingsScreen = () => {
  return (
    <PlainLayout>
      <Header />
    </PlainLayout>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
