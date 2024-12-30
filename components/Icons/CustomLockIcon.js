import {StyleSheet, Text, View, Image} from 'react-native';

const CustomLockIcon = () => {
  return (
    <Image
      source={require('../../assets/images/ui/lockVector.png')}
      style={{width: 40, height: 50}}
    />
  );
};

export default CustomLockIcon;

const styles = StyleSheet.create({});
