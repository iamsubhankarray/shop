import { View, Text, FlatList } from "react-native";
import Header from "../component/Header";
import CartItem from  "../component/CartItem.js"   ;

function CartScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ marginTop: 35, }}>
        <Header iscart = {true} />
      </View>
      <View>
        <FlatList 
        data={[1,2,3,4,5,6,7,8,9]}
        renderItem={({item})=>(<CartItem item={item}/>)}/>
        
        
      </View>
      <Text>Cart!</Text>
    </View>
  );
}
export default CartScreen