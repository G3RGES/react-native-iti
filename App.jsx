// App.js
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
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
import { ThemeProvider, theme } from 'context/ThemeContext';
import CartScreen from 'screens/CartScreen';
import EditProfileScreen from 'screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

function MainTabs({ dark }) {
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
          if (route.name === 'Cart')
            return <Ionicons name="cart-outline" size={size} color={color} />;
          if (route.name === 'Profile')
            return <Ionicons name="person-circle" size={size} color={color} />;
          return <Text />;
        },
        tabBarActiveTintColor: dark ? '#ffd59a' : '#ff7a2a',
        tabBarInactiveTintColor: dark ? '#9aa2a8' : '#999',
        tabBarStyle: {
          height: 60,
          paddingBottom: 6,
          marginBottom: 30,
          backgroundColor: dark ? '#0b0f15' : '#ffffff',
          borderTopColor: dark ? '#0b0f15' : '#e8e8e8',
        },
      })}>
      <Bottom.Screen name="Home" component={HomeScreen} />
      <Bottom.Screen name="Search" component={SearchScreen} />
      <Bottom.Screen name="Login" component={LoginScreen} />
      <Bottom.Screen name="Cart" component={CartScreen} />
      <Bottom.Screen name="profile" component={EditProfileScreen} />
    </Bottom.Navigator>
  );
}

function AppContent() {
  // consume context here (inside provider)
  const { isDark, setIsDark } = useContext(theme);

  const navTheme = isDark ? DarkTheme : DefaultTheme;

  const ToggleBar = () => {
    return (
      <SafeAreaView style={{ backgroundColor: isDark ? '#0b0f15' : '#ffffff' }}>
        <View
          style={{
            height: 56,
            paddingHorizontal: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: isDark ? '#0b0f15' : '#ffffff',
            borderBottomWidth: 1,
            borderBottomColor: isDark ? '#0b0f15' : '#e6ebef',
          }}>
          <Text style={{ color: isDark ? '#fff' : '#111', fontWeight: '600' }}>My App</Text>

          <TouchableOpacity
            onPress={() => setIsDark((v) => !v)}
            activeOpacity={0.9}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 6,
              paddingHorizontal: 10,
              borderRadius: 999,
              backgroundColor: isDark ? '#1f2937' : '#fff6ef',
              borderWidth: isDark ? 0 : 1,
              borderColor: isDark ? 'transparent' : '#ffd9b8',
            }}>
            <Text
              style={{ color: isDark ? '#ffd59a' : '#ff7a2a', marginRight: 8, fontWeight: '700' }}>
              {isDark ? 'Dark' : 'Light'}
            </Text>
            <View
              style={{
                width: 28,
                height: 16,
                borderRadius: 999,
                backgroundColor: isDark ? '#111827' : '#ffe7d1',
                padding: 2,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 999,
                  backgroundColor: isDark ? '#ffd59a' : '#ff7a2a',
                  alignSelf: isDark ? 'flex-end' : 'flex-start',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#0b0f15' : '#eef3f6' }}>
      <NavigationContainer theme={navTheme}>
        <ToggleBar />
        <Stack.Navigator
          initialRouteName="Onboarding1"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: isDark ? '#0b0f15' : '#eef3f6' },
          }}>
          <Stack.Screen name="Onboarding1" component={Onboarding1} />
          <Stack.Screen name="Onboarding2" component={Onboarding2} />
          <Stack.Screen name="Onboarding3" component={Onboarding3} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="MealDetails" component={MealDetails} />

          <Stack.Screen name="Home">
            {(props) => <MainTabs {...props} dark={isDark} />}
          </Stack.Screen>

          <Stack.Screen name="Main">
            {(props) => <MainTabs {...props} dark={isDark} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
