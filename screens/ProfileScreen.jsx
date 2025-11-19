import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';

export default function EditProfileScreen() {
  const [imageUri, setImageUri] = useState('');
  const [fullName, setFullName] = useState('Gerges Nashaat');
  const [email, setEmail] = useState('georgios.nashaat@gmail.com');
  const [phone, setPhone] = useState('01203346582');
  const [bio, setBio] = useState('I love food');

  async function uploadImg() {
    // request permissom
    const request = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log(request);

    // open gallery
    const image = await ImagePicker.launchImageLibraryAsync();
    console.log(image.assets[0].uri);

    //select,store img
    setImageUri(image.assets[0].uri);
  }

  return (
    <SafeAreaView className="flex-1 items-center bg-[#eef3f6]">
      <View className="mt-6 w-[330px] rounded-xl bg-white p-5">
        <View className="flex-row items-center">
          <TouchableOpacity className="h-9 w-9 items-center justify-center rounded-full bg-gray-100">
            <Feather name="chevron-left" size={18} color="#111" />
          </TouchableOpacity>
          <Text className="ml-3 text-base font-semibold">Edit Profile</Text>
        </View>

        <View className="mt-6 items-center">
          <View
            style={{ width: 116, height: 116, borderRadius: 999 }}
            className="items-center justify-center">
            <Image
              source={{ uri: imageUri }}
              style={{ width: 116, height: 116, borderRadius: 999 }}
              resizeMode="cover"
            />
            <TouchableOpacity
              onPress={uploadImg}
              activeOpacity={0.9}
              style={{
                position: 'absolute',
                right: -6,
                bottom: -6,
                width: 38,
                height: 38,
                borderRadius: 999,
                backgroundColor: '#ff7a2a',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 3,
                borderColor: '#ffffff',
                shadowColor: '#000',
                shadowOpacity: 0.15,
                shadowRadius: 6,
                elevation: 4,
              }}>
              <Feather name="edit-2" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-xs font-bold text-[#666]">FULL NAME</Text>
          <View className="mt-2 rounded-lg bg-[#f1f6fb] p-3">
            <TextInput
              value={fullName}
              onChangeText={setFullName}
              className="text-base"
              style={{ color: '#111' }}
            />
          </View>

          <Text className="mt-4 text-xs font-bold text-[#666]">EMAIL</Text>
          <View className="mt-2 rounded-lg bg-[#f1f6fb] p-3">
            <TextInput
              value={email}
              onChangeText={setEmail}
              className="text-base"
              style={{ color: '#111' }}
            />
          </View>

          <Text className="mt-4 text-xs font-bold text-[#666]">PHONE NUMBER</Text>
          <View className="mt-2 rounded-lg bg-[#f1f6fb] p-3">
            <TextInput
              value={phone}
              onChangeText={setPhone}
              className="text-base"
              style={{ color: '#111' }}
            />
          </View>

          <Text className="mt-4 text-xs font-bold text-[#666]">BIO</Text>
          <View className="mt-2 rounded-lg bg-[#f1f6fb] p-3">
            <TextInput
              value={bio}
              onChangeText={setBio}
              className="text-base"
              style={{ color: '#111' }}
              multiline
              numberOfLines={3}
            />
          </View>

          <TouchableOpacity
            onPress={() => Alert.alert('Saved', 'Profile saved (demo only)')}
            activeOpacity={0.9}
            className="mt-6 items-center rounded-lg py-3"
            style={{ backgroundColor: '#ff8a2b' }}>
            <Text className="font-bold text-white">SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
