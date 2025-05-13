import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type Props = {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address';
};

export default function Input({ value, placeholder, onChangeText, secureTextEntry, keyboardType }: Props) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize="none"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    marginBottom: 16,
  },
});
