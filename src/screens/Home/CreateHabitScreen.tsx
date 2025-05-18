import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function CreateHabitScreen() {
  const [habitName, setHabitName] = useState('');
  const [frequency, setFrequency] = useState<'Daily' | 'Weekly'>('Daily');

  const saveHabit = async () => {
    const newHabit = { id: Date.now(), habitName, frequency, completedDates: [] };
    const existing = await AsyncStorage.getItem('habits');
    const habits = existing ? JSON.parse(existing) : [];
    habits.push(newHabit);
    await AsyncStorage.setItem('habits', JSON.stringify(habits));
    setHabitName('');
  };

  return (
    <ImageBackground
      source={require('../../assets/bg.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Input
          placeholder="Habit Name"
          value={habitName}
          onChangeText={setHabitName}
        />
        <Picker
          selectedValue={frequency}
          onValueChange={(value) => setFrequency(value)}
          style={styles.picker}
        >
          <Picker.Item label="Daily" value="Daily" />
          <Picker.Item label="Weekly" value="Weekly" />
        </Picker>
        <Button title="Add Habit" onPress={saveHabit} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
  },
  picker: {
    backgroundColor: 'white',
    marginVertical: 12,
    borderRadius: 8,
  },
});
