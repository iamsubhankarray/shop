import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Products = ({item,index,}) => {
  const [like, setlike] = useState(false)
  const navigation = useNavigation()
  
  return (
    <View style={{ justifyContent: "center", alignItems: "center", marginHorizontal: 7,marginTop:20 }}>
      
      <TouchableOpacity onPress={()=>
        {navigation.navigate("ProductDetails",{item})} }>
        <Image
        
         source={{uri:item.image}}
          
          style={{ width: 175, height: 256, borderRadius: 20, }}
        />
        <Text style={{ fontSize: 15, color: "orange", }}>{item.title}</Text>
        <Text style={{ fontSize: 12, color: "black", }}>RS:{Math.round(item.price*85)}</Text>
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
      </TouchableOpacity>
      </View>
    
  )
}

export default Products

const styles = StyleSheet.create({})