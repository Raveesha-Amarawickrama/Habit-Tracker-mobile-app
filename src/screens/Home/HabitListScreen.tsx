// screens/HabitListScreen.tsx
import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../context/AuthContext';
import { useFocusEffect } from '@react-navigation/native';
import HabitItem from '../../components/HabitItem';
import Button from '../../components/Button';

type Habit = {
  id: number;
  habitName: string;
  frequency: 'Daily' | 'Weekly';
  completedDates: string[];
};

export default function HabitListScreen() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const { logout } = useAuth();

  const loadHabits = async () => {
    const data = await AsyncStorage.getItem('habits');
    if (data) {
      setHabits(JSON.parse(data));
    } else {
      setHabits([]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadHabits();
    }, [])
  );

  const markCompleted = async (id: number) => {
    const today = new Date().toISOString().split('T')[0];
    const updated = habits.map((habit) =>
      habit.id === id
        ? {
            ...habit,
            completedDates: [...new Set([...habit.completedDates, today])],
          }
        : habit
    );
    setHabits(updated);
    await AsyncStorage.setItem('habits', JSON.stringify(updated));
  };

  const deleteHabit = async (id: number) => {
    const updated = habits.filter((habit) => habit.id !== id);
    setHabits(updated);
    await AsyncStorage.setItem('habits', JSON.stringify(updated));
  };

  return (
    <View style={styles.container}>
      {habits.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 40 }}>
          No habits yet.
        </Text>
      ) : (
        <FlatList
          data={habits}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <HabitItem
              name={item.habitName}
              onComplete={() => markCompleted(item.id)}
              onDelete={() => deleteHabit(item.id)}
            />
          )}
        />
      )}
      <View style={styles.logout}>
        <Button title="Logout" onPress={logout} color="#ff3b30" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  logout: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 16,
  },
});
