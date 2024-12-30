import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  InfoScreen,
  SettingsScreen,
  ShopScreen,
} from '../screen/tab';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: {display: 'none'}, // This removes the space in the tab bar
        }}
      />
      <Tab.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="information-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
