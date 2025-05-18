import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function ProgressScreen() {
  const [percentage, setPercentage] = useState(0);

  const loadProgress = async () => {
    const json = await AsyncStorage.getItem('habits');
    const habits = json ? JSON.parse(json) : [];
    const today = new Date().toISOString().split('T')[0];
    const completed = habits.filter((h: any) =>
      h.completedDates.includes(today)
    );
    const percent = habits.length
      ? (completed.length / habits.length) * 100
      : 0;
    setPercentage(percent);
  };

  useFocusEffect(
    useCallback(() => {
      loadProgress();
    }, [])
  );

  return (
    <ImageBackground
      source={require('../../assets/bg.jpg')} // Adjust path if needed
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>
          {`Habits completed today: ${percentage.toFixed(0)}%`}
        </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)', // dark overlay
    padding: 16,
  },
  text: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});
