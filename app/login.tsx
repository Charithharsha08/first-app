import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center px-6 bg-white">
      <Text className="text-2xl font-bold mb-6">Login</Text>

      <TextInput
        placeholder="Username"
        className="w-full border border-gray-300 rounded-md p-3 mb-4"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        className="w-full border border-gray-300 rounded-md p-3 mb-4"
      />

      <TouchableOpacity className="bg-blue-500 w-full p-3 rounded-md mb-4">
        <Text className="text-white text-center font-semibold">Login</Text>
      </TouchableOpacity>

      <Link href="/" className="text-gray-500 text-base">
        Back
      </Link>
    </View>
  );
}
