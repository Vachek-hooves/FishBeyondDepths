import {AppState, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  InfoScreen,
  SettingsScreen,
  ShopScreen,
} from '../screen/tab';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState, useEffect} from 'react';
import {
  pauseBackgroundMusic,
  playBackgroundMusic,
  setupPlayer,
  toggleBackgroundMusic,
} from '../config/setSound';

const Tab = createBottomTabNavigator();

const CustomTabIcon = ({name, focused}) => (
  <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
    <Icon name={name} color="#FFD700" size={32} />
  </View>
);

const TabNavigator = () => {
  const [isPlayMusic, setIsPlayMusic] = useState(false);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active' && isPlayMusic) {
        playBackgroundMusic();
      } else if (nextAppState === 'inactive' || nextAppState === 'background') {
        pauseBackgroundMusic();
      }
    });
    const initMusic = async () => {
      await setupPlayer();
      await playBackgroundMusic();
      setIsPlayMusic(true);
    };
    initMusic();

    return () => {
      subscription.remove();
      pauseBackgroundMusic();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabIcon name="cart" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabIcon name="information-circle" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabIcon name="settings" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    borderTopWidth: 0,
    elevation: 0,
    height: 90,
    paddingBottom: 8,
    paddingTop: 8,
    backgroundColor: 'transparent',
  },
  iconContainer: {
    backgroundColor: '#0096FF' + 90,
    width: 65,
    height: 65,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0096FF',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  iconContainerActive: {
    backgroundColor: '#00BFFF',
    shadowColor: '#00BFFF',
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
});
