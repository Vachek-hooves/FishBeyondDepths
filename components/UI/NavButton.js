import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const NavButton = ({text, screen}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(screen)}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default NavButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0096FF',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    shadowColor: '#0096FF',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  text: {
    color: '#FFD700',
    fontSize: 28,
    fontWeight: '600',
    letterSpacing: 2,
  },
});
