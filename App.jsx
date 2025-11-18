// App.js
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import 'global.css';

import Onboarding1 from 'screens/OnBoarding1';
import Onboarding2 from 'screens/OnBoarding2';
import Onboarding3 from 'screens/OnBoarding3';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import SearchScreen from './screens/SearchScreen';
import MealDetails from './screens/MealDetails';

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

function MainTabs() {
  return (
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home')
            return <Ionicons name="home-outline" size={size} color={color} />;
          if (route.name === 'Search')
            return <Ionicons name="search-outline" size={size} color={color} />;
          if (route.name === 'Login')
            return <Ionicons name="person-outline" size={size} color={color} />;
          return <Text />;
        },
        tabBarActiveTintColor: '#ff7a2a',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: { height: 60, paddingBottom: 6 },
      })}>
      <Bottom.Screen name="Home" component={HomeScreen} />
      <Bottom.Screen name="Search" component={SearchScreen} />
      <Bottom.Screen name="Login" component={LoginScreen} />
    </Bottom.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="MealDetails" component={MealDetails} />

        {/* expose both route names so navigation.replace('Home') or navigation.replace('Main') work */}
        <Stack.Screen name="Home" component={MainTabs} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
