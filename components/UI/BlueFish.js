import {StyleSheet, Image} from 'react-native';

const BlueFish = () => {
  return (
    <Image
      source={require('../../assets/images/ui/fish.png')}
      style={{width: 300, height: 210}}
    />
  );
};

export default BlueFish;

const styles = StyleSheet.create({});
