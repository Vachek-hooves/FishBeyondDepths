import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PlainLayout from '../../components/Layout/PlainLayout';
import Header from '../../components/UI/Header';
import CustomLockIcon from '../../components/Icons/CustomLockIcon';

const LevelsScreen = () => {
  return (
    <PlainLayout>
      <Header title={'All Levels'} />
    </PlainLayout>
  );
};

export default LevelsScreen;

const styles = StyleSheet.create({});
