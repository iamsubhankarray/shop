import { FlatList, Image, StyleSheet, TextInput } from "react-native";
import { Text, View } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Header from "../component/Header"
import Catagory from "../component/Catagory";
import Products from "../component/Products";
import { useState } from "react";


export default function HomeScreen() {
  const [selectedcatagory, setSelectedCatagory] = useState(null)
  const catagories = ["treanding", 'new', 'mens', 'women', 'kids', 'teens', 'others']
  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Header />
      </View>
      <Text style={styles.title}>Placeholder Title</Text>

      <View style={styles.inputContainer}>
        <View style={{ flex: .2, alignItems: "center" }}>

          <EvilIcons name="search" size={30} color="grey" />
        </View>
        <TextInput
          // placeholder="search"

          // value=""
          // onChangeText={hehehe}
          style={styles.input} />

      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={catagories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Catagory item={item}
            selectedcatagory={selectedcatagory}
            setSelectedCatagory={setSelectedCatagory} />)} />
      <View style={{flexDirection:"row"}}>

        <Products />
        <Products />
      </View>



    </View>

  );
}
const styles = StyleSheet.create({
  container: {

    alignItems: "center",
    // backgroundColor: "lightgrey"

  },
  header: {
    marginTop: 35,

  },

  title: {
    fontSize: 20,
    fontWeight: "500",

    marginTop: 10,

  },
  inputContainer: {
    backgroundColor: "white",
    height: 40,
    marginTop: 10,
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",

    paddingHorizontal: 10,



  },
  input: {
    fontSize: 15,
    flex: 1,
    // backgroundColor:"lightgrey"
    alignSelf: "center",


  }

})
