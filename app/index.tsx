import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  return (
    <View
      style={{
        backgroundColor: "#000",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#fff",
        }}
      >
        Index
      </Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
        }}
      >
        Hello
      </Text>
      <Link href="/profile" className='text-gray-500'> this is profile link</Link>
        <Text className="text-white text-lg font-medium bg-blue-500" >
        This is a text with Nativewind class
      </Text>
    </View>
  );
}

export default Index