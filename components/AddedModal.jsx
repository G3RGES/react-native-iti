import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

export default function AddedModal({ visible, onClose }) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View className="flex-1 items-center justify-center bg-black/40">
        <View className="w-10/12 items-center rounded-xl bg-white p-6">
          <Text className="mb-2 text-xl font-bold">Added to Cart</Text>
          <Text className="mb-6 text-center text-[#666]">
            The meal was added to your cart successfully.
          </Text>
          <TouchableOpacity onPress={onClose} className="rounded-lg bg-[#ff8a2b] px-6 py-2">
            <Text className="font-bold text-white">Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
