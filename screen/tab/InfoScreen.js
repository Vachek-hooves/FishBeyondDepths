import {ScrollView, StyleSheet, Text} from 'react-native';
import PlainLayout from '../../components/Layout/PlainLayout';
import Header from '../../components/UI/Header';
import {info} from '../../data/info';

const InfoScreen = () => {
  return (
    <PlainLayout>
      <Header title={'About'} />
      <ScrollView>
        {info.map((text, index) => {
          return (
            <Text key={index} style={styles.title}>
              {text.text}
            </Text>
          );
        })}
      </ScrollView>
    </PlainLayout>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 2,
    textAlign: 'justify',
    marginTop: 20,
    paddingHorizontal: 10,
    color: 'white',
  },
});
