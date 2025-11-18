import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Feather } from '@expo/vector-icons';

export default function SearchScreen({ navigation }) {
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  async function fetchMealsByLetter() {
    try {
      setRefreshing(true);
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
      const data = await res.json();
      setMeals(data.meals ?? []);
    } catch (err) {
      console.log(err);
      setMeals([]);
    } finally {
      setRefreshing(false);
    }
  }

  async function fetchMealsByQuery(q) {
    try {
      setRefreshing(true);
      const encoded = encodeURIComponent(q);
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encoded}`);
      const data = await res.json();
      setMeals(data.meals ?? []);
    } catch (err) {
      console.log(err);
      setMeals([]);
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    fetchMealsByLetter();
  }, []);

  useEffect(() => {
    const run = async () => {
      if (!query || query.trim().length === 0) {
        await fetchMealsByLetter();
      } else {
        await fetchMealsByQuery(query.trim());
      }
    };
    run();
  }, [query]);

  const onRefresh = async () => {
    if (!query || query.trim().length === 0) await fetchMealsByLetter();
    else await fetchMealsByQuery(query.trim());
  };

  const renderCard = ({ item }) => {
    return (
      <TouchableOpacity
        className="mb-4 w-[48%] overflow-hidden rounded-xl bg-white"
        activeOpacity={0.85}
        onPress={() => navigation.navigate('MealDetails', { item })}>
        <Image source={{ uri: item.strMealThumb }} className="h-28 w-full bg-gray-100" />
        <View className="p-3">
          <Text numberOfLines={1} className="text-sm font-semibold text-slate-900">
            {item.strMeal}
          </Text>
          <Text numberOfLines={1} className="mt-1 text-xs text-gray-400">
            {item.strArea} • {item.strCategory}
          </Text>
        </View>

        <TouchableOpacity
          className="absolute bottom-3 right-3 h-9 w-9 items-center justify-center rounded-full bg-orange-500 shadow"
          onPress={() => navigation.navigate('MealDetails', { item })}>
          <AntDesign name="plus" size={18} color="#fff" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="p-4">
        <View className="flex-row items-center rounded-xl bg-white p-3 shadow">
          <Feather name="search" size={18} color="#9aa2a8" />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search meals..."
            placeholderTextColor="#9aa2a8"
            className="ml-3 flex-1 text-base"
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery('')} className="pl-2">
              <Feather name="x" size={16} color="#9aa2a8" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={renderCard}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 16 }}
        contentContainerStyle={{ paddingTop: 12, paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListEmptyComponent={() => (
          <View className="items-center py-8">
            <Text className="text-gray-500">No meals found.</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
