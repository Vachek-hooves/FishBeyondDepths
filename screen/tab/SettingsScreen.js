import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState} from 'react';
import PlainLayout from '../../components/Layout/PlainLayout';
import Header from '../../components/UI/Header';

const SettingItem = ({title, value, onValueChange}) => {
  return (
    <View style={styles.settingItem}>
      <Text style={styles.settingText}>{title}</Text>
      <Switch
        trackColor={{false: '#767577', true: '#0096FF'}}
        thumbColor={value ? '#fff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={value}
        style={styles.switch}
      />
    </View>
  );
};

const SettingsScreen = () => {
  const [isMusicEnabled, setIsMusicEnabled] = useState(true);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  return (
    <PlainLayout>
      <Header title="Settings" />
      <View style={styles.container}>
        <SettingItem
          title="Background Music"
          value={isMusicEnabled}
          onValueChange={setIsMusicEnabled}
        />
        <SettingItem
          title="Sounds"
          value={isSoundEnabled}
          onValueChange={setIsSoundEnabled}
        />
      </View>
    </PlainLayout>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    width: '100%',
  },
  settingText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  switch: {
    transform: [{scale: 0.8}],
  },
});
