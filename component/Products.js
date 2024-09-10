import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const Products = () => {
  const [like,setlike]=useState(false)
  return (
    <TouchableOpacity style={{ flex: 1,justifyContent:"center",alignItems:"center" }} onPress={()=>setlike(!like)}>
      <View >


      <Image
        source={require('../assets/girl.jpg')}
        style={{ width: 180, height: 256, borderRadius: 20, }}
         />
        </View>
      <Text style={{ fontSize: 20, color: "orange", }}>ProductName</Text>
      <Text style={{ fontSize: 15, color: "red", }}>RS 2,000/-</Text>
        <View style={{position:"absolute",top:9,right:20,height:25,width:25,borderRadius:20,justifyContent:"center",alignContent:"center"}}>
         { like?
      <AntDesign name="heart" size={25} color="orange"/>:
      <AntDesign name="heart" size={25} color="white"/>}
        </View>
    </TouchableOpacity>
  )
}

export default Products

const styles = StyleSheet.create({})