import React from 'react';
import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LevelCompleteModal = ({visible, score, onNextLevel, onMainMenu}) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>30</Text>
            {/* <Text style={styles.dropIcon}>💧</Text> */}
            <Icon name="water" size={32} color="#FFD700" />
          </View>
          <Text style={styles.title}>Level Complete!</Text>
          <Text style={styles.message}>
            Congratulations! You've successfully navigated the dolphin and
            earned 30 points. Great! Ready to take on the next level?
          </Text>
          <TouchableOpacity style={styles.nextButton} onPress={onNextLevel}>
            <Text style={styles.buttonText}>All Levels</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={onMainMenu}>
            <Text style={styles.buttonText}>Main Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LevelCompleteModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#00008B',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    alignItems: 'center',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0096FF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 15,
  },
  scoreText: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  dropIcon: {
    fontSize: 20,
  },
  title: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  message: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  nextButton: {
    backgroundColor: '#0096FF',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    width: '100%',
    marginBottom: 10,
  },
  menuButton: {
    backgroundColor: '#FF4040',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
