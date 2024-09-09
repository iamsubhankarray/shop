import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Catagory = () => {
  return (
    <View>
      <Text style={styles.catagory}>Catagory</Text>
    </View>
  )
}

export default Catagory

const styles = StyleSheet.create({
  catagory:{
    width:100,
    height:50,
    fontSize:16,
    // fontWeight:500,
    backgroundColor:"hotpink",
    borderRadius:10,
    textAlign:"center",
    marginHorizontal:10,
    marginVertical:20,
    paddingVertical:10,
    color:"white",


  }
})