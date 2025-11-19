import React, { useContext } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from 'context/ThemeContext';

export default function LoginScreen() {
  const { isDark } = useContext(theme);

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: isDark ? '#0b0f15' : '#eef3f6' }}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 28 }}>
        <View
          className="w-[330px] overflow-hidden rounded-xl p-5"
          style={{ backgroundColor: isDark ? '#0f1220' : '#ffffff' }}>
          <View
            className="h-40 items-center justify-center rounded-t-xl"
            style={{ backgroundColor: isDark ? '#0b0f15' : '#0f1220' }}>
            <Text className="text-2xl font-extrabold" style={{ color: '#fff' }}>
              Log In
            </Text>
            <Text className="mt-1" style={{ color: '#c8d2e6' }}>
              Please sign in to your existing account
            </Text>
          </View>

          <View className="mt-4">
            <Text className="mb-2 text-xs font-bold" style={{ color: isDark ? '#cbd5e1' : '#666' }}>
              EMAIL
            </Text>
            <View
              className="flex-row items-center rounded-lg p-3"
              style={{ backgroundColor: isDark ? '#111827' : '#f1f6fb' }}>
              <TextInput
                editable
                placeholder="example@gmail.com"
                placeholderTextColor={isDark ? '#9aa2a8' : '#9aa2a8'}
                className="flex-1 text-base"
                style={{ color: isDark ? '#fff' : '#333' }}
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
                placeholder="*********"
                placeholderTextColor={isDark ? '#9aa2a8' : '#9aa2a8'}
                className="flex-1 text-base"
                style={{ color: isDark ? '#fff' : '#333' }}
              />
              <Ionicons name="eye-outline" size={20} color={isDark ? '#9aa2a8' : '#888'} />
            </View>

            <View className="mt-3 flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View
                  className="mr-2 h-4 w-4 rounded-md"
                  style={{
                    borderWidth: 1,
                    borderColor: isDark ? '#2b3440' : '#d1d5db',
                    backgroundColor: isDark ? '#0b0f15' : '#fff',
                  }}
                />
                <Text style={{ color: isDark ? '#cbd5e1' : '#777' }} className="text-sm">
                  Remember me
                </Text>
              </View>
              <Text className="font-semibold" style={{ color: '#ff7a2a' }}>
                Forgot Password
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={1}
              className="mt-4 items-center rounded-lg py-3"
              style={{ backgroundColor: '#ff8a2b' }}>
              <Text className="font-extrabold tracking-widest text-white">LOG IN</Text>
            </TouchableOpacity>

            <Text className="mt-4 text-center" style={{ color: isDark ? '#cbd5e1' : '#666' }}>
              {"Don't have an account?"}{' '}
              <Text className="font-bold" style={{ color: '#ff7a2a' }}>
                SIGN UP
              </Text>
            </Text>

            <Text className="my-3 text-center" style={{ color: isDark ? '#cbd5e1' : '#666' }}>
              Or
            </Text>

            <View className="flex-row justify-between px-10">
              <View
                className="h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: '#355b9a' }}>
                <FontAwesome name="facebook" size={20} color="#fff" />
              </View>
              <View
                className="h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: '#1DA1F2' }}>
                <Feather name="twitter" size={20} color="#fff" />
              </View>
              <View
                className="h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: '#000' }}>
                <FontAwesome name="apple" size={22} color="#fff" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
