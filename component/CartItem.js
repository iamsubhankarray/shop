import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from './redux/Action'
const cartItem = ({ item }) => {
  const handleRemoveCart=()=>{
    useDispatch(removeFromCart(item))
  }





  return (
    <View style={{flex:1, flexDirection: "row" }}>
      <Image
        source={{ uri: item.item.image }}
        style={{ width: 50, height: 100 }} />
      <View style={{}}>
        <Text>{item.item.title}</Text>
        <Text>{item.item.price}</Text>
      </View>
      <View>
        <Button 
        title='remove'
        onPress={handleRemoveCart}/>
      </View>
    </View>
  )
}

export default cartItem

const styles = StyleSheet.create({})