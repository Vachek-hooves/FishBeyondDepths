import {StyleSheet, Text, View, Image} from 'react-native';

const CoralIcon = () => {
  return <Image source={require('../../assets/images/ui/coral.png')} style={styles.icon} />;
};

export default CoralIcon;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
