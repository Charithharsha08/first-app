import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Profile = () => {
  return (
    <View className='flex-1 items-center justify-center bg-black'>
      <Text style={{color: "#fff", fontSize: 20, textAlign: "center"}}>this is profile</Text>
      <Link href="/" style={{color: "#fff", fontSize: 20, textAlign: "center"}}>back</Link>
    </View>
  )
}

export default Profile