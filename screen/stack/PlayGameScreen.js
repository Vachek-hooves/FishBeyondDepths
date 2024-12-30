import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PlainLayout from '../../components/Layout/PlainLayout';
import Header from '../../components/UI/Header';

const PlayGameScreen = () => {
  return (
    <PlainLayout>
      <Header title={'Levels'} />
    </PlainLayout>
  );
};

export default PlayGameScreen;

const styles = StyleSheet.create({});
