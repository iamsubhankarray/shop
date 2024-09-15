import { View, Text, FlatList } from "react-native";
import Header from "../component/Header";
import CartItem from "../component/CartItem.js";
import { useSelector } from "react-redux";
import { useEffect } from "react";



function CartScreen(item) {

  const cartData=useSelector((state) => state.cart)
    // console.log(cartData);
  


 

  return (
    <View >
      <View style={{ marginTop: 35, }}>
        <Header iscart={true} />
      </View>
      <View style={{ marginVertical: 25, marginHorizontal: 25 }}>
        <FlatList
          data={cartData}
          keyExtractor={(item, index) => (index)}
          renderItem={(item) => (<CartItem item={item} />)} />


      </View>

    </View>
  );
}
export default CartScreen