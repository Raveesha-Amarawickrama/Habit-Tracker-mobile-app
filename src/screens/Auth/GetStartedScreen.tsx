import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import Button from '../../components/Button';

type NavigationProp = StackNavigationProp<RootStackParamList, 'GetStarted'>;

export default function GetStartedScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ImageBackground
      source={require('../../assets/bg.jpg')} // make sure this path is correct
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to MyHabit!</Text>
        <Button title="Get Started" onPress={() => navigation.navigate('Login')} />
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
    padding: 24,
    backgroundColor: 'rgba(0,0,0,0.4)', // Optional dark overlay
  },
  title: {
    fontSize: 28,
    marginBottom: 34,
    textAlign: 'center',
    color: 'white',
  },
});
