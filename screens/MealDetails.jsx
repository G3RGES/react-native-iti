import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, AntDesign } from '@expo/vector-icons';
import { theme } from 'context/ThemeContext';

export default function MealDetails({ route, navigation }) {
  const { isDark } = useContext(theme);
  const { item } = route.params ?? {};

  if (!item) {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: isDark ? '#0b0f15' : '#eef3f6' }}
        className="items-center justify-center">
        <Text style={{ color: isDark ? '#9aa2a8' : '#6b7280' }}>No meal provided</Text>
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
    <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? '#0b0f15' : '#eef3f6' }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View className="flex-row items-center justify-between p-4">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="h-9 w-9 items-center justify-center rounded-full"
            style={{ backgroundColor: isDark ? '#0b0f15' : '#fff' }}>
            <Feather name="chevron-left" size={20} color={isDark ? '#fff' : '#111'} />
          </TouchableOpacity>

          <Text className="text-base font-semibold" style={{ color: isDark ? '#fff' : '#111' }}>
            Details
          </Text>

          <View className="w-9" />
        </View>

        <View className="mt-2 items-center">
          <Image source={{ uri: item.strMealThumb }} className="h-56 w-56 rounded-2xl" />
        </View>

        <View
          className="mx-4 mt-4 rounded-2xl p-5"
          style={{ backgroundColor: isDark ? '#0b0f15' : '#fff' }}>
          <Text className="text-xl font-bold" style={{ color: isDark ? '#fff' : '#0f172a' }}>
            {item.strMeal}
          </Text>

          <View className="mt-4 flex-row items-center space-x-6">
            <View className="flex-row items-center">
              <AntDesign name="star" size={16} color="#ff9900" />
              <Text className="ml-2 text-sm" style={{ color: isDark ? '#9aa2a8' : '#9ca3af' }}>
                4.7
              </Text>
            </View>

            <View className="flex-row items-center">
              <Feather name="truck" size={16} color="#ff9900" />
              <Text className="ml-2 text-sm" style={{ color: isDark ? '#9aa2a8' : '#9ca3af' }}>
                Free
              </Text>
            </View>

            <View className="flex-row items-center">
              <Feather name="clock" size={16} color="#ff9900" />
              <Text className="ml-2 text-sm" style={{ color: isDark ? '#9aa2a8' : '#9ca3af' }}>
                20 min
              </Text>
            </View>
          </View>

          <Text
            className="mt-6 text-xs font-semibold"
            style={{ color: isDark ? '#9aa2a8' : '#6b7280' }}>
            INGREDIENTS
          </Text>

          <View className="mt-3 flex-row flex-wrap justify-between">
            {ingredients.map((ing, idx) => (
              <View key={idx} className="my-3 w-1/3 items-center">
                <Text className="text-2xl">{emojiList[idx % emojiList.length]}</Text>
                <Text
                  className="mt-1 text-center text-xs"
                  numberOfLines={1}
                  style={{ color: isDark ? '#9aa2a8' : '#6b7280' }}>
                  {ing}
                </Text>
              </View>
            ))}
          </View>

          <Text
            className="mt-6 text-xs font-semibold"
            style={{ color: isDark ? '#9aa2a8' : '#6b7280' }}>
            STEPS
          </Text>

          <View className="mt-3 space-y-4">
            {rawSteps.map((step, index) => (
              <View key={index} className="flex-row items-start">
                <View
                  className="mt-1 h-6 w-6 items-center justify-center rounded-full"
                  style={{ backgroundColor: '#ff8a2b' }}>
                  <Text className="text-xs font-bold text-white">{index + 1}</Text>
                </View>

                <Text
                  className="ml-3 flex-1 text-sm leading-[20px]"
                  style={{ color: isDark ? '#e5e7eb' : '#374151' }}>
                  {step}.
                </Text>
              </View>
            ))}
          </View>

          <View className="mt-8 flex-row space-x-3">
            <TouchableOpacity
              onPress={handleSave}
              className="flex-1 items-center rounded-lg border py-3"
              style={{
                borderColor: isDark ? '#1f2937' : '#e6e9ee',
                backgroundColor: isDark ? '#0b0f15' : '#fff',
              }}>
              <Text className="font-semibold" style={{ color: isDark ? '#fff' : '#111' }}>
                Save Recipe
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleAddIngredients}
              className="flex-1 items-center rounded-lg py-3"
              style={{ backgroundColor: '#ff8a2b' }}>
              <Text className="font-bold text-white">Add Ingredients</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
