import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, InfoScreen, ShopScreen} from '../screen/tab';

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
      <Tab.Screen name="InfoScreen" component={InfoScreen} />
      <Tab.Screen name="ShopScreen" component={ShopScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
