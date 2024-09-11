import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const Products = () => {
  const [like, setlike] = useState(false)
  return (
    <View style={{ justifyContent: "center", alignItems: "center", marginHorizontal: 7,marginTop:20 }}>
      
      <View >
        <Image
          source={require('../assets/girl.png')}
          style={{ width: 175, height: 256, borderRadius: 20, }}
        />
        <Text style={{ fontSize: 15, color: "orange", }}>ProductName</Text>
        <Text style={{ fontSize: 12, color: "black", }}>RS 2,000/-</Text>
        <TouchableOpacity style={{
          position: "absolute",
          bottom: 50, right: 10, height: 25, width: 25,
          borderRadius: 20,
          justifyContent: "center",
          alignContent: "center",
        }} onPress={() => setlike(!like)}>
          {like ?
            <AntDesign name="heart" size={20} color="red" /> :
            <AntDesign name="heart" size={25} color="lightgrey" />}
        </TouchableOpacity>
      </View>
      </View>
    
  )
}

export default Products

const styles = StyleSheet.create({})