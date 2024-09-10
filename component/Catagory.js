import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Catagory = ({ item, selectedcatagory, setSelectedCatagory }) => {
 

  return (
    <TouchableOpacity onPress={() => setSelectedCatagory(item)}>
      <Text style={[styles.catagory, selectedcatagory === item && { color: "white", backgroundColor: "orange" }]}>{item}</Text>
    </TouchableOpacity>
  )
}

export default Catagory

const styles = StyleSheet.create({
  catagory: {
    width: 100,
    height: 50,
    fontSize: 16,
    
    backgroundColor: "grey",
    borderRadius: 10,
    textAlign: "center",
    marginHorizontal: 10,
    marginVertical: 20,
    paddingVertical: 10,
    color: "white",


  }
})