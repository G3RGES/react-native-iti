import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, AntDesign } from '@expo/vector-icons';

export default function MealDetails({ route, navigation }) {
  const { item } = route.params ?? {};

  if (!item) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-slate-50">
        <Text className="text-gray-600">No meal provided</Text>
      </SafeAreaView>
    );
  }

  const rawSteps = (item.strInstructions ?? '')
    .split('.')
    .map((s) => s.trim())
    .filter(Boolean);

  const ingredients = Array.from({ length: 20 })
    .map((_, i) => item[`strIngredient${i + 1}`])
    .filter((ing) => ing && ing.trim().length > 0)
    .slice(0, 12);

  const emojiList = ['🍅', '🧅', '🥕', '🧄', '🧂', '🥬', '🍄', '🍗', '🥚', '🧀', '🍋', '🌶️'];

  const handleSave = () => {
    Alert.alert('Saved', 'Recipe saved to your collection.', [{ text: 'OK' }]);
  };

  const handleAddIngredients = () => {
    Alert.alert('Added', 'Ingredients added to your shopping list.', [{ text: 'OK' }]);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View className="flex-row items-center justify-between p-4">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="h-9 w-9 items-center justify-center rounded-full bg-white shadow">
            <Feather name="chevron-left" size={20} color="#111" />
          </TouchableOpacity>

          <Text className="text-base font-semibold">Details</Text>

          <View className="w-9" />
        </View>

        <View className="mt-2 items-center">
          <Image source={{ uri: item.strMealThumb }} className="h-56 w-56 rounded-2xl" />
        </View>

        <View className="mx-4 mt-4 rounded-2xl bg-white p-5 shadow">
          <Text className="text-xl font-bold text-slate-900">{item.strMeal}</Text>

          <View className="mt-4 flex-row items-center space-x-6">
            <View className="flex-row items-center">
              <AntDesign name="star" size={16} color="#ff9900" />
              <Text className="ml-2 text-sm text-gray-400">4.7</Text>
            </View>

            <View className="flex-row items-center">
              <Feather name="truck" size={16} color="#ff9900" />
              <Text className="ml-2 text-sm text-gray-400">Free</Text>
            </View>

            <View className="flex-row items-center">
              <Feather name="clock" size={16} color="#ff9900" />
              <Text className="ml-2 text-sm text-gray-400">20 min</Text>
            </View>
          </View>

          <Text className="mt-6 text-xs font-semibold text-gray-500">INGREDIENTS</Text>

          <View className="mt-3 flex-row flex-wrap justify-between">
            {ingredients.map((ing, idx) => (
              <View key={idx} className="my-3 w-1/3 items-center">
                <Text className="text-2xl">{emojiList[idx % emojiList.length]}</Text>
                <Text className="mt-1 text-center text-xs text-gray-600" numberOfLines={1}>
                  {ing}
                </Text>
              </View>
            ))}
          </View>

          <Text className="mt-6 text-xs font-semibold text-gray-500">STEPS</Text>

          <View className="mt-3 space-y-4">
            {rawSteps.map((step, index) => (
              <View key={index} className="flex-row items-start">
                <View className="mt-1 h-6 w-6 items-center justify-center rounded-full bg-orange-500">
                  <Text className="text-xs font-bold text-white">{index + 1}</Text>
                </View>

                <Text className="ml-3 flex-1 text-sm leading-[20px] text-gray-600">{step}.</Text>
              </View>
            ))}
          </View>

          <View className="mt-8 flex-row space-x-3">
            <TouchableOpacity
              onPress={handleSave}
              className="flex-1 items-center rounded-lg border border-gray-200 bg-white py-3">
              <Text className="font-semibold text-gray-800">Save Recipe</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleAddIngredients}
              className="flex-1 items-center rounded-lg bg-orange-500 py-3">
              <Text className="font-bold text-white">Add Ingredients</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
