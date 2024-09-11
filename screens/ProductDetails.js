import { Image, StyleSheet, Text, View } from 'react-native'
import Header from '../component/Header'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const ProductDetails = () => {
  const route =useRoute()
  
  
  const item = route.params.item
  return (
    <View >
      <View style={{marginTop:35,}}>
      <Header/>
        </View>
      <View >
        <Image source={{uri:item.image}}
        style={{width:400,height:500,}}/>
      </View>
      <Text>{item.title}</Text>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})