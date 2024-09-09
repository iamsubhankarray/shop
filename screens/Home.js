import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function HomeScreen() {
    return (
      // <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text style={styles.buttonText}></Text>
        <Text>Home!</Text>
      
      </View>
      // </LinearGradient>
    );
  }
  const styles= StyleSheet.create({
    linearGradient:{
      flex:1,

    }
  })