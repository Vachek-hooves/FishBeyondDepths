import {StyleSheet, Text, View} from 'react-native';
import GameLayout from '../../components/Layout/GameLayout';
import {HomeIconNavigation} from '../../components/UI';
import NavButton from '../../components/UI/NavButton';

const HomeScreen = () => {
  return (
    <GameLayout>
      <NavButton text={'Play'} screen={'PlayGameScreen'} />
    </GameLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
