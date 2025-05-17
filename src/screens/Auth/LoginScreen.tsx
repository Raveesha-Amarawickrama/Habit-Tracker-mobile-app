import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import Input from '../../components/Input';
import Button from '../../components/Button';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigation = useNavigation<NavigationProp>();

  const handleLogin = async () => {
    try {
      const storedUsers = await AsyncStorage.getItem('users');
      if (!storedUsers) {
        return Alert.alert('Error', 'No users found. Please register.');
      }

      const users = JSON.parse(storedUsers);
      const foundUser = users.find(
        (user: any) => user.email === email && user.password === password
      );

      if (foundUser) {
        login(foundUser);
      } else {
        Alert.alert('Error', 'Invalid email or password.');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Something went wrong.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, flex: 1, justifyContent: 'center' },
  title: { fontSize: 28, marginBottom: 24, textAlign: 'center' },
  link: { marginTop: 20, textAlign: 'center', color: 'blue' },
});
