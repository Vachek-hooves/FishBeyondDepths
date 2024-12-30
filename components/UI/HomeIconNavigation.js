import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const HomeIconNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() =>
          navigation.navigate('TabNavigator', {screen: 'HomeScreen'})
        }>
        <Icon name="home" size={24} color="#FFD700" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeIconNavigation;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    top: '10%',
    // left: '10%',
    // top: 50,
    width: '50%',
    right: -50,
  },
  iconContainer: {
    backgroundColor: '#0096FF',
    width: 45,
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
