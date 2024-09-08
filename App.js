import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      {/* <Ionicons name='checkmark'size={32} color="green"/> */}
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{}}>
        <Tab.Screen name="home" component={HomeScreen} options={{tabBarIcon:()=><AntDesign name="home" size={24} color="black" />}} />
        <Tab.Screen name="reOrder" component={HomeScreen} options={{tabBarIcon:()=><AntDesign name="user" size={24} color="black" />}} />
        <Tab.Screen name="cart" component={HomeScreen} options={{tabBarIcon:()=> <AntDesign name="shoppingcart" size={24} color="black" />}}/>
        <Tab.Screen name="account" component={SettingsScreen}options={{tabBarIcon:()=><AntDesign name="user" size={24} color="black" />}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}