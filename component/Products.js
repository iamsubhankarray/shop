import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const Products = () => {
  const [like, setlike] = useState(false)
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View >


        <Image
          source={require('../assets/girl.jpg')}
          style={{ width: 180, height: 256, borderRadius: 20, }}
        />
      </View>
      <Text style={{ fontSize: 20, color: "orange", }}>ProductName</Text>
      <Text style={{ fontSize: 15, color: "black", }}>RS 2,000/-</Text>
      <TouchableOpacity style={{
        position: "absolute",
        top: 9, right: 20, height: 25, width: 25,
        borderRadius: 20,
        justifyContent: "center",
        alignContent: "center",
      }} onPress={() => setlike(!like)}>
        {like ?
          <AntDesign name="heart" size={25} color="red" /> :
          <AntDesign name="heart" size={25} color="white" />}
      </TouchableOpacity>
    </View>
  )
}

export default Products

const styles = StyleSheet.create({})