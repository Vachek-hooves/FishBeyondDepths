import {StyleSheet, Text, View, Image} from 'react-native';

const CustomLockIcon = () => {
  return (
    <Image
      source={require('../../assets/images/ui/lockVector.png')}
      style={{width: 60, height: 60}}
    />
  );
};

export default CustomLockIcon;

const styles = StyleSheet.create({});
