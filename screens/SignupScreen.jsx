import React, { useContext } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from 'context/ThemeContext';

export default function SignupScreen() {
  const { isDark } = useContext(theme);

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: isDark ? '#0b0f15' : '#eef3f6' }}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 28 }}>
        <View
          className="w-[330px] overflow-hidden rounded-xl p-5"
          style={{ backgroundColor: isDark ? '#0b0f15' : '#ffffff' }}>
          <View
            className="h-40 justify-center rounded-t-xl p-4"
            style={{ backgroundColor: isDark ? '#0b0f15' : '#0f1220' }}>
            <TouchableOpacity
              className="absolute left-4 top-4 h-9 w-9 items-center justify-center rounded-full"
              style={{ backgroundColor: isDark ? '#111827' : '#fff' }}>
              <Ionicons name="chevron-back" size={18} color={isDark ? '#fff' : '#111'} />
            </TouchableOpacity>

            <View className="items-center">
              <Text className="text-2xl font-extrabold" style={{ color: isDark ? '#fff' : '#fff' }}>
                Sign Up
              </Text>
              <Text className="mt-1" style={{ color: '#c8d2e6' }}>
                Please sign up to get started
              </Text>
            </View>
          </View>

          <View className="mt-4">
            <Text className="mb-2 text-xs font-bold" style={{ color: isDark ? '#cbd5e1' : '#666' }}>
              NAME
            </Text>
            <View
              className="rounded-lg p-3"
              style={{ backgroundColor: isDark ? '#111827' : '#f1f6fb' }}>
              <TextInput
                editable
                placeholder="John doe"
                className="text-base"
                style={{ color: isDark ? '#fff' : '#333' }}
              />
            </View>

            <Text
              className="mb-2 mt-4 text-xs font-bold"
              style={{ color: isDark ? '#cbd5e1' : '#666' }}>
              EMAIL
            </Text>
            <View
              className="rounded-lg p-3"
              style={{ backgroundColor: isDark ? '#111827' : '#f1f6fb' }}>
              <TextInput
                editable
                placeholder="example@gmail.com"
                className="text-base"
                style={{ color: isDark ? '#fff' : '#333' }}
                placeholderTextColor={isDark ? '#9aa2a8' : '#9aa2a8'}
              />
            </View>

            <Text
              className="mb-2 mt-4 text-xs font-bold"
              style={{ color: isDark ? '#cbd5e1' : '#666' }}>
              PASSWORD
            </Text>
            <View
              className="flex-row items-center rounded-lg p-3"
              style={{ backgroundColor: isDark ? '#111827' : '#f1f6fb' }}>
              <TextInput
                editable
                secureTextEntry
                placeholder="**********"
                className="flex-1 text-base"
                style={{ color: isDark ? '#fff' : '#333' }}
                placeholderTextColor={isDark ? '#9aa2a8' : '#9aa2a8'}
              />
              <Ionicons name="eye-off-outline" size={20} color={isDark ? '#9aa2a8' : '#888'} />
            </View>

            <Text
              className="mb-2 mt-4 text-xs font-bold"
              style={{ color: isDark ? '#cbd5e1' : '#666' }}>
              RE-TYPE PASSWORD
            </Text>
            <View
              className="flex-row items-center rounded-lg p-3"
              style={{ backgroundColor: isDark ? '#111827' : '#f1f6fb' }}>
              <TextInput
                editable
                secureTextEntry
                placeholder="**********"
                className="flex-1 text-base"
                style={{ color: isDark ? '#fff' : '#333' }}
                placeholderTextColor={isDark ? '#9aa2a8' : '#9aa2a8'}
              />
              <Ionicons name="eye-off-outline" size={20} color={isDark ? '#9aa2a8' : '#888'} />
            </View>

            <TouchableOpacity
              activeOpacity={1}
              className="mt-6 items-center rounded-lg py-3"
              style={{ backgroundColor: '#ff8a2b' }}>
              <Text className="font-extrabold tracking-widest text-white">SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
