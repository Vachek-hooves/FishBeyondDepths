import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GameLayout from '../../components/Layout/GameLayout';
import {HomeIconNavigation} from '../../components/UI';
import PlainLayout from '../../components/Layout/PlainLayout';
import Header from '../../components/UI/Header';
import { FISHES } from '../../data/fishes';
import { backgrounds } from '../../data/backgrounds';

const ShopScreen = () => {
  return (
    <PlainLayout>
      <Header title={'Shop'} />
    </PlainLayout>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({});
