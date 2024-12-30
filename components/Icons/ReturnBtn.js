import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ReturnBtn = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

    <Ionicons
        name="arrow-back"
        size={32}
        color="white"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default ReturnBtn;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    right: 50,
    backgroundColor: '#0096FF',
    borderRadius: 16,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    color: 'black',
    padding: 10,

  },
});
