import React, { useState, useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import MealCard from '../components/MealCard';
import AddedModal from '../components/AddedModal';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  async function getMeals() {
    try {
      setRefreshing(true);
      const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
      setMeals(res.data.meals);
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

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-[#eef3f6]">
      <FlatList
        data={displayed}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <MealCard
            item={item}
            onAdd={() => setModalVisible(true)}
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
            <Text className="text-[#666]">No meals found.</Text>
          </View>
        )}
      />

      <AddedModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </SafeAreaView>
  );
}
