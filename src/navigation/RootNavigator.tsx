import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { colors } from '../theme/tokens';
import CheckInScreen from '../screens/CheckInScreen';
import HomeScreen from '../screens/HomeScreen';
import NotesScreen from '../screens/NotesScreen';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.deepNight },
        headerTintColor: colors.starlight,
        tabBarStyle: { backgroundColor: colors.deepNight, borderTopColor: '#1B1B24' },
        tabBarActiveTintColor: colors.starlight,
        tabBarInactiveTintColor: 'rgba(232, 230, 240, 0.5)',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Heartbeat' }}
      />
      <Tab.Screen name="CheckIn" component={CheckInScreen} options={{ title: 'Check-in' }} />
      <Tab.Screen name="Notes" component={NotesScreen} options={{ title: 'Notes' }} />
    </Tab.Navigator>
  );
}
