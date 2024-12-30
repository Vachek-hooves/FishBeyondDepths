import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import TabLayout from '../../components/Layout/TabLayout';
import {BlueFish} from '../../components/UI';

const WelcomeScreen = ({navigation}) => {
  return (
    <TabLayout>
      <BlueFish />
      <Text>Welcome to Fish Beyond the Depths!</Text>
      <Text>
        Swipe in any direction to guide your fish through the depths. But be
        careful—one wrong move, and the adventure ends!
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('TabNavigator')}>
        <Text>Start</Text>
      </TouchableOpacity>
    </TabLayout>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
