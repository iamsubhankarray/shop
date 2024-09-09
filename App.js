import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import AccountScreen from './screens/account';
import CartScreen from './screens/Cart';
import HomeScreen from './screens/Home';
import ReorderScreen from './screens/Reorder';





const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarShowLabel: false,headerShown:false}}>
        <Tab.Screen name="home" component={HomeScreen} options={{tabBarIcon:()=><AntDesign name="home" size={35} color="black" />}} />
        <Tab.Screen name="reOrder" component={ReorderScreen} options={{tabBarIcon:()=><AntDesign name="user" size={35} color="black" />}} />
        <Tab.Screen name="cart" component={CartScreen} options={{tabBarIcon:()=> <AntDesign name="shoppingcart" size={35} color="black" />}}/>
        <Tab.Screen name="account" component={AccountScreen}options={{tabBarIcon:()=><AntDesign name="user" size={35} color="black" />}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}