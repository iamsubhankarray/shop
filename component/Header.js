import { StyleSheet, Text, View,Image, } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react'

const Header = () => {
  return (
    <View style={{alignItems:"center",justifyContent:"center"}}>
       <View style={{flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:10,
       
        backgroundColor:"white",
        width:375,
        height:40,
        borderRadius:7}}>
         <Entypo name="grid" size={35} color="black" />
        <Image source={require("../assets/dp.png")}
         style={styles.dp}/>
      </View>
      {/* <Text>Header</Text> */}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  dp: {
    width:35,
    height:35,
  }
})