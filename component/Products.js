import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const Products = () => {
  return (
    <View style={{ flex: 1,justifyContent:"center",alignItems:"center" }}>
      <View>

      <AntDesign name="heart" size={30} color="orange"/>
      <Image
        source={require('../assets/girl.jpg')}
        style={{ width: 180, height: 256, borderRadius: 20, }} />
        </View>
      <Text style={{ fontSize: 20, color: "orange", }}>ProductName</Text>
      <Text style={{ fontSize: 15, color: "red", }}>RS 2,000/-</Text>
    </View>
  )
}

export default Products

const styles = StyleSheet.create({})