// screens/Onboarding1.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function Onboarding1({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }} // replace with your image
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>All your favorites</Text>
        <Text style={styles.subtitle}>
          Get all your loved foods in one once place, you just place the order we do the rest
        </Text>

        <View style={styles.dotsRow}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('Onboarding2')}>
          <Text style={styles.nextText}>NEXT</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace('Home')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef0f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '86%',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 4,
  },
  image: { width: 160, height: 160, marginBottom: 18 },
  title: { fontSize: 20, fontWeight: '700', marginTop: 6 },
  subtitle: { textAlign: 'center', color: '#777', marginTop: 8, lineHeight: 20 },
  dotsRow: { flexDirection: 'row', marginTop: 16, marginBottom: 18 },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#f0b7a0',
    marginHorizontal: 6,
    opacity: 0.3,
  },
  dotActive: { opacity: 1, backgroundColor: '#ff8a2b' },
  nextBtn: {
    backgroundColor: '#ff8a2b',
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 10,
  },
  nextText: { color: '#fff', fontWeight: '700' },
  skipText: { marginTop: 10, color: '#666' },
});
