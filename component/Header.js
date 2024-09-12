import { StyleSheet, Text, View, Image, } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';


import React from 'react';

const Header = ({ iscart }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View style={{   flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        width: 375,
        height: 40,
        borderRadius: 7
      }}>
        
        {iscart ?
          <AntDesign name="back" size={35} color="black" /> :
          <Entypo name="grid" size={35} color="black" />

        }

       {iscart?
         <Text style={styles.title}>
         your Cart
       </Text>:null
       }
        <Image source={require("../assets/dp.png")}
          style={styles.dp} />
      </View>
      

    </View>

  )
}

export default Header

const styles = StyleSheet.create({
  dp: {
    width: 35,
    height: 35,
  },
  title:{
    fontSize:25,
    fontWeight:"bold",
    color:"orange"

  }
})