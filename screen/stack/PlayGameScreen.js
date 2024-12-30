import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import GameLayout from '../../components/Layout/GameLayout';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import CoralIcon from '../../components/UI/CoralIcon';
import Header from '../../components/UI/Header';
import PlainLayout from '../../components/Layout/PlainLayout';

const CELL_SIZE = Dimensions.get('window').width / 5;

const PlayGameScreen = ({route, navigation}) => {
  const {levelData} = route.params;
  const [fishPosition, setFishPosition] = useState(levelData.startPosition);
  const [gameState, setGameState] = useState('playing');

  const onGestureEvent = ({nativeEvent}) => {
    if (nativeEvent.state === State.END) {
      const {translationX, translationY} = nativeEvent;

      // Determine the dominant direction
      if (Math.abs(translationX) > Math.abs(translationY)) {
        if (translationX > 0) {
          tryMove('right');
        } else {
          tryMove('left');
        }
      } else {
        if (translationY > 0) {
          tryMove('down');
        } else {
          tryMove('up');
        }
      }
    }
  };

  const tryMove = direction => {
    console.log('Moving:', direction); // Debug log
    const newPosition = {...fishPosition};

    switch (direction) {
      case 'up':
        newPosition.row = fishPosition.row - 1;
        break;
      case 'down':
        newPosition.row = fishPosition.row + 1;
        break;
      case 'left':
        newPosition.col = fishPosition.col - 1;
        break;
      case 'right':
        newPosition.col = fishPosition.col + 1;
        break;
    }

    if (isValidMove(newPosition)) {
      console.log('Valid move to:', newPosition); // Debug log
      setFishPosition(newPosition);

      if (
        newPosition.row === levelData.target.row &&
        newPosition.col === levelData.target.col
      ) {
        setGameState('won');
      }
    }
  };

  const isValidMove = position => {
    // Check boundaries
    if (
      position.row < 0 ||
      position.row >= levelData.rows ||
      position.col < 0 ||
      position.col >= levelData.cols
    ) {
      return false;
    }

    // Check coral collision
    return !levelData.corals.some(
      coral => coral.row === position.row && coral.col === position.col,
    );
  };

  return (
    <PlainLayout>
      <Header />
      <View style={styles.container}>
        <GestureHandlerRootView style={styles.gameContainer}>
          <PanGestureHandler onHandlerStateChange={onGestureEvent} minDist={5}>
            <View style={styles.gameBoard}>
              {Array(levelData.rows)
                .fill()
                .map((_, rowIndex) => (
                  <View key={`row-${rowIndex}`} style={styles.row}>
                    {Array(levelData.cols)
                      .fill()
                      .map((_, colIndex) => (
                        <View
                          key={`cell-${rowIndex}-${colIndex}`}
                          style={styles.cell}>
                          {levelData.target.row === rowIndex &&
                            levelData.target.col === colIndex && (
                              <View style={styles.target} />
                            )}
                          {levelData.corals.some(
                            coral =>
                              coral.row === rowIndex && coral.col === colIndex,
                          ) && <CoralIcon />}
                          {fishPosition.row === rowIndex &&
                            fishPosition.col === colIndex && (
                              <Image
                                source={require('../../assets/images/fishes/fish1.png')}
                                style={styles.fish}
                              />
                            )}
                        </View>
                      ))}
                  </View>
                ))}
            </View>
          </PanGestureHandler>
        </GestureHandlerRootView>
      </View>
    </PlainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  homeButton: {
    width: 45,
    height: 45,
    backgroundColor: '#0096FF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0096FF',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  gameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameBoard: {
    width: CELL_SIZE * 4,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  fish: {
    width: CELL_SIZE * 0.9,
    height: CELL_SIZE * 0.9,
    resizeMode: 'contain',
    position: 'absolute',
  },
  coral: {
    width: CELL_SIZE * 0.9,
    height: CELL_SIZE * 0.9,
    resizeMode: 'contain',
    position: 'absolute',
  },
  target: {
    width: CELL_SIZE * 0.8,
    height: CELL_SIZE * 0.8,
    backgroundColor: '#0096FF',
    borderRadius: 12,
    position: 'absolute',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0096FF',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  scoreText: {
    color: '#FFD700',
    fontSize: 18,
    marginRight: 4,
  },
  scoreIcon: {
    fontSize: 18,
  },
});

export default PlayGameScreen;
