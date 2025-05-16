// src/navigation/MainTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HabitListScreen from '../screens/Home/HabitListScreen';
import CreateHabitScreen from '../screens/Home/CreateHabitScreen';
import ProgressScreen from '../screens/Home/ProgressScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Habits" component={HabitListScreen} />
      <Tab.Screen name="Add Habit" component={CreateHabitScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
    </Tab.Navigator>
  );
}
