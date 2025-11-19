import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { theme } from 'context/ThemeContext';

export default function MealCard({ item, onAdd, onPress }) {
  const { isDark } = useContext(theme);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      className="mb-4 overflow-hidden rounded-xl"
      style={{ backgroundColor: isDark ? '#0b0f15' : '#ffffff' }}>
      <Image source={{ uri: item.strMealThumb }} className="h-36 w-full" />

      <View className="p-3">
        <View className="flex-row justify-between">
          <View className="flex-1">
            <Text className="text-base font-bold" style={{ color: isDark ? '#fff' : '#111' }}>
              {item.strMeal}
            </Text>
            <Text className="mt-1" style={{ color: isDark ? '#9aa2a8' : '#9aa2a8' }}>
              {item.strArea ?? ''} {item.strArea ? '•' : ''} {item.strCategory ?? ''}
            </Text>
          </View>

          <TouchableOpacity
            onPress={onAdd}
            className="ml-3 h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: isDark ? '#111827' : '#0f1220' }}>
            <AntDesign name="plus" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text numberOfLines={2} className="mt-2" style={{ color: isDark ? '#cbd5e1' : '#777' }}>
          {item.strInstructions}
        </Text>

        <View className="mt-3 flex-row items-center">
          <View className="mr-4 flex-row items-center">
            <Feather name="clock" size={14} color="#ff8800" />
            <Text className="ml-2" style={{ color: isDark ? '#9aa2a8' : '#9aa2a8' }}>
              20-30 min
            </Text>
          </View>

          <View className="flex-row items-center">
            <Feather name="star" size={14} color="#ff8800" />
            <Text className="ml-2" style={{ color: isDark ? '#9aa2a8' : '#9aa2a8' }}>
              4.6
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
