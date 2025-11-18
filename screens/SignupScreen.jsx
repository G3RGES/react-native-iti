// SignupScreen.js
import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignupScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#eef3f6]">
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 28 }}>
        <View className="w-[330px] overflow-hidden rounded-xl bg-white p-5">
          {/* Header */}
          <View className="h-40 justify-center rounded-t-xl bg-[#0f1220] p-4">
            <TouchableOpacity className="absolute left-4 top-4 h-9 w-9 items-center justify-center rounded-full bg-white">
              <Ionicons name="chevron-back" size={18} color="#111" />
            </TouchableOpacity>

            <View className="items-center">
              <Text className="text-2xl font-extrabold text-white">Sign Up</Text>
              <Text className="mt-1 text-[#c8d2e6]">Please sign up to get started</Text>
            </View>
          </View>

          {/* Form */}
          <View className="mt-4">
            <Text className="mb-2 text-xs font-bold text-[#666]">NAME</Text>
            <View className="rounded-lg bg-[#f1f6fb] p-3">
              <TextInput editable={true} placeholder="John doe" className="text-base text-[#333]" />
            </View>

            <Text className="mb-2 mt-4 text-xs font-bold text-[#666]">EMAIL</Text>
            <View className="rounded-lg bg-[#f1f6fb] p-3">
              <TextInput
                editable={true}
                placeholder="example@gmail.com"
                className="text-base text-[#333]"
              />
            </View>

            <Text className="mb-2 mt-4 text-xs font-bold text-[#666]">PASSWORD</Text>
            <View className="flex-row items-center rounded-lg bg-[#f1f6fb] p-3">
              <TextInput
                editable={true}
                secureTextEntry
                placeholder="**********"
                className="flex-1 text-base text-[#333]"
              />
              <Ionicons name="eye-off-outline" size={20} color="#888" />
            </View>

            <Text className="mb-2 mt-4 text-xs font-bold text-[#666]">RE-TYPE PASSWORD</Text>
            <View className="flex-row items-center rounded-lg bg-[#f1f6fb] p-3">
              <TextInput
                editable={true}
                secureTextEntry
                placeholder="**********"
                className="flex-1 text-base text-[#333]"
              />
              <Ionicons name="eye-off-outline" size={20} color="#888" />
            </View>

            <TouchableOpacity
              activeOpacity={1}
              className="mt-6 items-center rounded-lg bg-[#ff8a2b] py-3">
              <Text className="font-extrabold tracking-widest text-white">SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
