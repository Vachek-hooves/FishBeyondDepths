import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import PlainLayout from '../../components/Layout/PlainLayout';
import Header from '../../components/UI/Header';
import {FISHES} from '../../data/fishes';
import {backgrounds} from '../../data/backgrounds';
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

const ShopScreen = () => {
  const [activeTab, setActiveTab] = useState('Backgrounds');
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = activeTab === 'Backgrounds' ? backgrounds : FISHES;

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev < items.length - 1 ? prev + 1 : 0));
  };

  const handleSet = () => {
    // Will add logic later to set background or fish
    console.log('Setting', activeTab, items[currentIndex].name);
  };

  const TabButton = ({title}) => (
    <TouchableOpacity
      style={[styles.tabButton, activeTab === title && styles.activeTabButton]}
      onPress={() => {
        setActiveTab(title);
        setCurrentIndex(0);
      }}>
      <Text style={styles.tabText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <PlainLayout>
      <Header title="Shop" />
      <View style={styles.container}>
        <Text style={styles.description}>
          Dive deeper into the adventure by unlocking stunning backgrounds,
          unique fish, and exclusive card designs
        </Text>

        <View style={styles.tabContainer}>
          <TabButton title="Backgrounds" />
          <TabButton title="Fishes" />
        </View>

        <Text style={styles.sectionTitle}>{activeTab}</Text>

        <View style={styles.sliderContainer}>
          <TouchableOpacity style={styles.arrowButton} onPress={handlePrevious}>
            <Text style={styles.arrowText}>←</Text>
          </TouchableOpacity>

          <View style={styles.imageContainer}>
            <Image
              source={items[currentIndex].image}
              style={styles.itemImage}
              resizeMode="contain"
            />
          </View>

          <TouchableOpacity style={styles.arrowButton} onPress={handleNext}>
            <Text style={styles.arrowText}>→</Text>
          </TouchableOpacity>
        </View>

        {items[currentIndex].isActive ? (
          <TouchableOpacity 
            style={[styles.unlockButton, styles.setButton]} 
            onPress={handleSet}>
            <Text style={styles.unlockText}>Set</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.unlockButton}>
            <Text style={styles.unlockText}>Unlock</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>{items[currentIndex].price}</Text>
              <Text style={styles.dropIcon}>💧</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </PlainLayout>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  description: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 1,
    marginBottom: 30,
    backgroundColor: '#00BFFF' + 70,
    borderRadius: 12,
  },
  tabButton: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    // backgroundColor: '#00BFFF' + 70,
    flex: 1,
  },
  activeTabButton: {
    // backgroundColor: '#00BFFF',
    backgroundColor: '#0096FF',
  },
  tabText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  arrowButton: {
    width: 50,
    height: 40,
    backgroundColor: '#FF4040',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: width * 0.6,
    height: width * 0.6,
    backgroundColor: '#FFD700',
    borderRadius: 20,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  unlockButton: {
    flexDirection: 'row',
    backgroundColor: '#FF4040',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  unlockText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 5,
  },
  dropIcon: {
    fontSize: 18,
  },
  setButton: {
    paddingHorizontal: 40, // Wider padding for "Set" button
    backgroundColor: '#0096FF', // Different color for "Set" button
  },
});
