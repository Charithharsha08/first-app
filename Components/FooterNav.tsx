import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

 function FooterNav() {
  return (
    <View
      style={{
        marginTop: 20,
        backgroundColor: "#333",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Link
        href="/"
        style={{
          color: "#fff",
          fontSize: 18,
          textDecorationLine: "underline",
        }}
      >
        Go to Index
      </Link>
      <Link
        href="/profile"
        style={{
          color: "#fff",
          fontSize: 18,
          textDecorationLine: "underline",
        }}
      >
        Go to Profile
      </Link>

      <Link
        href="/login"
        style={{
          color: "#fff",
          fontSize: 18,
          textDecorationLine: "underline",
        }}
      >
        login
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({})

export default FooterNav;