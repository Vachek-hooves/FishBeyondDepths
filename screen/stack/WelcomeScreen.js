import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TabLayout from '../../components/Layout/TabLayout';
import {BlueFish} from '../../components/UI';

const WelcomeScreen = ({navigation}) => {
  return (
    <TabLayout style={styles.container}>
      
        {/* <BlueFish /> */}
   
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Welcome to Fish{'\n'}Beyond the{'\n'}Depths!
        </Text>
        <Text style={styles.description}>
          Swipe in any direction to guide your fish through the depths. But be
          careful—one wrong move, and the adventure ends!
        </Text>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate('TabNavigator')}>
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </TabLayout>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0B2E',
    // paddingTop: 100,
    // paddingBottom: 100,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 46,
    fontFamily: 'System',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 30,
    textShadowColor: 'rgba(255, 215, 0, 0.5)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 10,
  },
  description: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
    fontWeight: '700',
    lineHeight: 28,
  },
  startButton: {
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
  startButtonText: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: '600',
  },
});
