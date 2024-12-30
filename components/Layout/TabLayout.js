import {StyleSheet, Text, View, ImageBackground} from 'react-native';

const TabLayout = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/bg/bgdeafault.png')}
      style={styles.container}>
      {children}
    </ImageBackground>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
