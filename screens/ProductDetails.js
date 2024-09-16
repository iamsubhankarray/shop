import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../component/Header'
import React, { useContext } from 'react'
import { useRoute } from '@react-navigation/native'

import { addToCart } from '../component/redux/Action'
import { useDispatch } from 'react-redux'

const ProductDetails = () => {
  const size = ['s', 'm', 'l', 'xl', 'xxl']
  const dispatch = useDispatch()

  const route = useRoute()
  const item = route.params.item
  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
    // console.log(item);
    




  }
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 35, }}>
        <Header />
      </View>
      <View >
        <Image source={{ uri: item.image }}
          style={{ width: "100%", height: 350, alignSelf: "center" }} />
      </View >
      <Text style={
        {
          alignSelf: "center",
          fontSize: 20,
          fontWeight: 600,
        }}>{item.title}</Text>
      <Text style={
        {
          alignSelf: "center",
          fontSize: 18,
          fontWeight: 350,
        }}>{item.price}</Text>
      <Text style={{ fontSize: 15, }}>size</Text>
      <View style={{
        flexDirection: "row",
        borderWidth: 1,
        Color: "lightgrey",
        width: "45%"
      }}>



        {
          size.map((item, index) => (
            <TouchableOpacity key={index} >
              <Text style={
                {
                  fontSize: 18,
                  marginHorizontal: 10,
                  borderRadius: 5,

                }}>{item}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <TouchableOpacity style={
        {
          backgroundColor: "orange",
          height: 50, width: "60%",
          alignSelf: "center",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
        onPress={()=>handleAddToCart(item)}>
        <Text style={{
          textAlignVertical: "center",
          color: "white", fontWeight: 500,
          fontSize: 20,
        }}>Add to Cart</Text>
      </TouchableOpacity>


    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",

    textAlign: "center",



  }
})