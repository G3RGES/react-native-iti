// components/Header.js
import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const CATEGORIES = [
  { label: 'All', icon: <Feather name="grid" size={16} color="#ff7a2a" /> },
  { label: 'Burger', icon: <FontAwesome5 name="hamburger" size={16} color="#555" /> },
  { label: 'Pizza', icon: <MaterialCommunityIcons name="pizza" size={16} color="#555" /> },
  { label: 'Hot Dog', icon: <MaterialCommunityIcons name="food-hot-dog" size={16} color="#555" /> },
  { label: 'Dessert', icon: <MaterialCommunityIcons name="cupcake" size={16} color="#555" /> },
];

export default function Header({ query, setQuery }) {
  return (
    <View className="p-4">
      <View className="mb-3 flex-row justify-between">
        <View>
          <Text className="text-xs font-bold text-[#ff7a2a]">DELIVER TO</Text>
          <View className="flex-row items-center">
            <Text className="text-base text-[#222]">ITI Lab 5</Text>
            <Feather name="chevron-down" size={14} color="#333" style={{ marginLeft: 6 }} />
          </View>
        </View>

        <View className="relative h-11 w-11 items-center justify-center rounded-full bg-[#0f1220]">
          <Feather name="shopping-cart" size={18} color="#fff" />
          <View className="absolute -right-2 -top-2 h-5 w-5 items-center justify-center rounded-full bg-[#ff7a2a]">
            <Text className="text-xs font-bold text-white">2</Text>
          </View>
        </View>
      </View>

      <Text className="mb-3 text-base">
        Hey Gerges, <Text className="font-bold">Good Afternoon!</Text>
      </Text>

      <View className="mb-3 flex-row items-center rounded-xl bg-white p-3">
        <Feather name="search" size={18} color="#9aa2a8" />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search meals..."
          className="ml-3 flex-1"
          placeholderTextColor="#9aa2a8"
        />
      </View>

      <View className="mb-3 mt-2 flex-row items-center justify-between">
        <Text className="text-lg font-bold">Menu</Text>
        <Text className="text-[#98a1a7]">See All</Text>
      </View>

      <FlatList
        horizontal
        data={CATEGORIES}
        keyExtractor={(item, idx) => idx}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.9}
            className="mr-3 flex-row items-center rounded-full bg-white px-4 py-3">
            <View className="mr-2">{item.icon}</View>
            <Text className={index === 0 ? 'font-bold text-[#ff7a2a]' : 'text-[#555]'}>
              {item.label}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingVertical: 12 }}
      />
    </View>
  );
}
