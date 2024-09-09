import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


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
      <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:false}}>
        <Tab.Screen name="home" component={HomeScreen} options={{tabBarIcon:()=><Text>home</Text>}}/>
        <Tab.Screen name="reOrder" component={HomeScreen}options={{tabBarIcon:()=><Text>reOrder</Text>}} />
        <Tab.Screen name="cart" component={HomeScreen} options={{tabBarIcon:()=><Text>cart</Text>}}/>
        <Tab.Screen name="account" component={SettingsScreen}options={{tabBarIcon:()=><Text>name</Text>}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}