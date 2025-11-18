// LoginScreen.js
import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#eef3f6]">
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 28 }}>
        <View className="w-[330px] overflow-hidden rounded-xl border-0 bg-white p-5">
          {/* Header */}
          <View className="h-40 items-center justify-center rounded-t-xl bg-[#0f1220]">
            <Text className="text-2xl font-extrabold text-white">Log In</Text>
            <Text className="mt-1 text-[#c8d2e6]">Please sign in to your existing account</Text>
          </View>

          {/* Form */}
          <View className="mt-4">
            <Text className="mb-2 text-xs font-bold text-[#666]">EMAIL</Text>
            <View className="flex-row items-center rounded-lg bg-[#f1f6fb] p-3">
              <TextInput
                editable={true}
                placeholder="example@gmail.com"
                className="flex-1 text-base text-[#333]"
              />
            </View>

            <Text className="mb-2 mt-4 text-xs font-bold text-[#666]">PASSWORD</Text>
            <View className="flex-row items-center rounded-lg bg-[#f1f6fb] p-3">
              <TextInput
                editable={true}
                secureTextEntry
                placeholder="*********"
                className="flex-1 text-base text-[#333]"
              />
              <Ionicons name="eye-outline" size={20} color="#888" />
            </View>

            <View className="mt-3 flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="mr-2 h-4 w-4 rounded-md border border-gray-300 bg-white" />
                <Text className="text-sm text-[#777]">Remember me</Text>
              </View>
              <Text className="font-semibold text-[#ff7a2a]">Forgot Password</Text>
            </View>

            <TouchableOpacity
              activeOpacity={1}
              className="mt-4 items-center rounded-lg bg-[#ff8a2b] py-3">
              <Text className="font-extrabold tracking-widest text-white">LOG IN</Text>
            </TouchableOpacity>

            <Text className="mt-4 text-center text-[#666]">
              {"Don't have an account?"} <Text className="font-bold text-[#ff7a2a]">SIGN UP</Text>
            </Text>

            <Text className="my-3 text-center text-[#666]">Or</Text>

            <View className="flex-row justify-between px-10">
              <View className="h-12 w-12 items-center justify-center rounded-full bg-[#355b9a]">
                <FontAwesome name="facebook" size={20} color="#fff" />
              </View>
              <View className="h-12 w-12 items-center justify-center rounded-full bg-[#1DA1F2]">
                <Feather name="twitter" size={20} color="#fff" />
              </View>
              <View className="h-12 w-12 items-center justify-center rounded-full bg-[#000]">
                <FontAwesome name="apple" size={22} color="#fff" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
