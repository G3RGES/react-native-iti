// screens/CartScreen.js
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather, AntDesign } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { theme } from 'context/ThemeContext';

export default function CartScreen({ navigation }) {
  const { isDark } = useContext(theme);

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) loadCart();
  }, [isFocused]);

  async function loadCart() {
    setLoading(true);
    try {
      const raw = await AsyncStorage.getItem('CART');
      const parsed = raw ? JSON.parse(raw) : [];
      setCart(parsed);
    } catch (err) {
      console.log(err);
      setCart([]);
    } finally {
      setLoading(false);
    }
  }

  async function saveCart(newCart) {
    setCart(newCart);
    await AsyncStorage.setItem('CART', JSON.stringify(newCart));
  }

  function removeItem(itemId) {
    Alert.alert('Remove', 'Remove item from cart?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Remove',
        style: 'destructive',
        onPress: async () => {
          const newCart = cart.filter((c) => c.idMeal !== itemId);
          await saveCart(newCart);
        },
      },
    ]);
  }

  function renderRow({ item }) {
    return (
      <View
        className="mb-3 flex-row items-center rounded-xl p-3"
        style={{ backgroundColor: isDark ? '#0b0f15' : '#ffffff' }}>
        <Image source={{ uri: item.strMealThumb }} className="h-16 w-16 rounded-lg" />
        <View className="ml-3 flex-1">
          <Text style={{ color: isDark ? '#fff' : '#111' }} className="text-base font-semibold">
            {item.strMeal}
          </Text>

          <Text className="mt-1 text-sm" style={{ color: isDark ? '#9aa2a8' : '#9ca3af' }}>
            Qty: {item.qty ?? 1}
          </Text>
        </View>

        <View className="mr-3 items-center">
          <TouchableOpacity
            onPress={() => removeItem(item.idMeal)}
            className="h-8 w-8 items-center justify-center rounded-full"
            style={{ backgroundColor: '#ef4444' }}>
            <AntDesign name="close" size={14} color="#fff" />
          </TouchableOpacity>
        </View>

        <View className="items-center">
          <Text className="text-base font-bold" style={{ color: isDark ? '#fff' : '#111' }}>
            $10
          </Text>
        </View>
      </View>
    );
  }

  //   const total = cart.reduce((s, i) => s + 10 * (i.qty || 1), 0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? '#0b0f15' : '#eef3f6' }}>
      <View className="flex-row items-center justify-between p-4">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="h-9 w-9 items-center justify-center rounded-full"
          style={{ backgroundColor: isDark ? '#0b0f15' : '#fff' }}>
          <Feather name="chevron-left" size={20} color={isDark ? '#fff' : '#111'} />
        </TouchableOpacity>

        <Text className="text-lg font-semibold" style={{ color: isDark ? '#fff' : '#111' }}>
          Cart
        </Text>

        <View className="w-9" />
      </View>

      <View className="px-4">
        {cart.length === 0 ? (
          <View className="mt-12 items-center">
            <Text style={{ color: isDark ? '#9aa2a8' : '#9ca3af' }}>Your cart is empty</Text>
          </View>
        ) : (
          <>
            <FlatList
              data={cart}
              keyExtractor={(item) => item.idMeal}
              renderItem={renderRow}
              contentContainerStyle={{ paddingBottom: 20 }}
            />

            <View
              className="mt-4 rounded-xl p-4"
              style={{
                backgroundColor: isDark ? '#0b0f15' : '#fff',
                borderWidth: isDark ? 0 : 1,
                borderColor: '#eceff1',
              }}>
              {/* <View className="mb-3 flex-row items-center justify-between">
                <Text className="text-gray-600" style={{ color: isDark ? '#9aa2a8' : '#6b7280' }}>
                  Total
                </Text>
                <Text className="text-xl font-bold" style={{ color: isDark ? '#fff' : '#111' }}>
                  ${total}
                </Text>
              </View> */}

              <TouchableOpacity
                onPress={() => Alert.alert('Checkout', 'Proceed to checkout (not implemented)')}
                className="items-center rounded-lg py-3"
                style={{ backgroundColor: '#ff8a2b' }}>
                <Text className="font-bold text-white">Checkout</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
