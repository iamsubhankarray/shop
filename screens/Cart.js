import { View, Text, FlatList } from "react-native";
import Header from "../component/Header";
import CartItem from  "../component/CartItem.js"   ;
import { useSelector } from "react-redux";



function CartScreen() {
  const cartData = useSelector((state)=>state.reducer)
 
  
  return (
    <View style={{ }}>
      <View style={{ marginTop: 35, }}>
        <Header iscart = {true} />
      </View>
      <View style={{ marginVertical:25, marginHorizontal:25}}>
        <FlatList 
        data={cartData}
        keyExtractor={(item,index)=>(index)}
        renderItem={(item)=>(<CartItem item={item} />)}/>
        
        
      </View>
      
    </View>
  );
}
export default CartScreen