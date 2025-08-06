import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function FooterNav() {
  return (
    <View className="mt-5 bg-gray-800 py-4 px-5 rounded-xl flex-row flex-wrap justify-between">
      <Link href="/" className="text-white text-base underline mr-3 mb-2">
        🏠 Index
      </Link>

      <Link
        href="/profile"
        className="text-white text-base underline mr-3 mb-2"
      >
        👤 Profile
      </Link>

      <Link href="/login" className="text-white text-base underline mr-3 mb-2">
        🔐 Login
      </Link>

      <Link href="/home/" className="text-white text-base underline mr-3 mb-2">
        🗂️ Home Index
      </Link>

      {/* <Link
        href="/product/1"
        className="text-white text-base underline mr-3 mb-2"
      >
        🗂️ product
      </Link> */}

      <Link
        href={{
            pathname: "/product/[id]",
            params: {
                 id: "1",
                name: "Product 1",
                age: 20
            },
        }}
        className="text-white text-base underline mr-3 mb-2"
      >
        🗂️ product
      </Link>

      <Link
        href="/home/test"
        className="text-white text-base underline mr-3 mb-2"
      >
        🧪 Test
      </Link>
    </View>
  );
}