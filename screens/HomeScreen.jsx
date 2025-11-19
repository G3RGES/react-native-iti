// screens/HomeScreen.js
import React, { useState, useEffect, useContext } from 'react';
import { FlatList, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import MealCard from '../components/MealCard';
import AddedModal from '../components/AddedModal';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from 'context/ThemeContext';

export default function HomeScreen({ navigation }) {
  const { isDark } = useContext(theme); // <-- consume global theme

  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  async function getMeals() {
    try {
      setRefreshing(true);
      const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
      setMeals(res.data.meals ?? []);
    } catch (err) {
      console.log(err);
      setMeals([]);
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    getMeals();
  }, []);

  async function refetch() {
    await getMeals();
  }

  const displayed = query
    ? meals.filter((m) => (m.strMeal ?? '').toLowerCase().includes(query.trim().toLowerCase()))
    : meals;

  function computePrice(item) {
    return Math.max(8, (parseInt(item.idMeal.slice(-3)) % 50) + 10);
  }

  async function addToCart(item) {
    try {
      setModalVisible(true);
      const stored = await AsyncStorage.getItem('CART');
      const cart = stored ? JSON.parse(stored) : [];
      const idx = cart.findIndex((c) => c.idMeal === item.idMeal);
      if (idx > -1) {
        cart[idx].qty = (cart[idx].qty || 1) + 1;
      } else {
        cart.push({
          idMeal: item.idMeal,
          strMeal: item.strMeal,
          strMealThumb: item.strMealThumb,
          strArea: item.strArea,
          strCategory: item.strCategory,
          qty: 1,
          price: computePrice(item),
        });
      }
      await AsyncStorage.setItem('CART', JSON.stringify(cart));
    } catch (err) {
      console.warn('cart error', err);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }} className={isDark ? 'bg-slate-900' : 'bg-[#eef3f6]'}>
      <FlatList
        data={displayed}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <MealCard
            item={item}
            onAdd={() => addToCart(item)}
            onPress={() => navigation.navigate('MealDetails', { item })}
          />
        )}
        ListHeaderComponent={<Header query={query} setQuery={setQuery} />}
        refreshing={refreshing}
        onRefresh={refetch}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 40 }}
        ListEmptyComponent={() => (
          <View className="items-center py-8">
            <Text className={isDark ? 'text-gray-300' : 'text-[#666]'}>No meals found.</Text>
          </View>
        )}
      />

      <AddedModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </SafeAreaView>
  );
}
