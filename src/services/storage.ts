import AsyncStorage from '@react-native-async-storage/async-storage';

export const getHabits = async () => {
  const json = await AsyncStorage.getItem('habits');
  return json ? JSON.parse(json) : [];
};

export const saveHabit = async (habit: any) => {
  const existing = await getHabits();
  existing.push(habit);
  await AsyncStorage.setItem('habits', JSON.stringify(existing));
};
