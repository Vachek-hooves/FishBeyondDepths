import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ReturnBtn = () => {
  const navigation = useNavigation();
  return (
    <Ionicons
      name="arrow-back"
      size={24}
      color="black"
      onPress={() => navigation.goBack()}
    />
  );
};

export default ReturnBtn;

const styles = StyleSheet.create({});
