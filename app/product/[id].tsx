import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const SelectedProduct = () => {
    // This component will display the selected product based on the ID from the URL
   const params = useLocalSearchParams();
   console.log(params);
   
  return (
    <View className='flex-1 items-center justify-center bg-gray-800'>
      <Text>Product ID: {params?.id}</Text>
      <Text>Product Name: {params?.name}</Text>
      <Text>Product Age: {params?.age}</Text>
    </View>
  )
}

export default SelectedProduct