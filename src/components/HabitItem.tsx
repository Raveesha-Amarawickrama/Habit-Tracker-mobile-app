// components/HabitItem.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  name: string;
  onComplete: () => void;
  onDelete: () => void;
};

export default function HabitItem({ name, onComplete, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.completeButton} onPress={onComplete}>
          <Text style={styles.buttonText}>✓</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.buttonText}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#222',
    borderBottomWidth: 1,
    borderColor: '#444',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  buttons: {
    flexDirection: 'row',
  },
  completeButton: {
    marginRight: 12,
    padding: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  deleteButton: {
    padding: 8,
    backgroundColor: '#FF3B30',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
