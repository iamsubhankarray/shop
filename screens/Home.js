import { FlatList, Image, StyleSheet, TextInput } from "react-native";
import { Text, View } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Header from "../component/Header"
import Catagory from "../component/Catagory";
import Products from "../component/Products";
import { useState } from "react";

// <<<MAIN FUNCTION START>>>
export default function HomeScreen() {
  const [selectedcatagory, setSelectedCatagory] = useState(null)
  const catagories = ["treanding", 'new', 'mens', 'women', 'kids', 'teens', 'others']
  return (
    //<<<HEADER COMPONENT FROM COMPONENT/HEAADER >>>

    <View style={styles.container}>

      <View style={styles.header}>

        <Header />
      </View>


      {/* <<< FlatList ITEM WITH BODY OF THE PAGE>>>     */}
      


      <FlatList
        numColumns={2}
        ListHeaderComponent={()=>(
          <>
          {/* <<< MAIN TITLE >>> */}
          <View style={{justifyContent:"center",alignItems:"center"}}>

            <Text style={styles.title}>Ecommerce App</Text>
          </View>
          {/* <<< SEARCH ELEMENT STARTS >>>> */}

<View style={styles.inputContainer}>
  <View style={{ flex: .2, alignItems: "center" }}>

    <EvilIcons name="search" size={30} color="grey" />
  </View>
  <TextInput
    // placeholder="search"

    // value=""
    // onChangeText={hehehe}
    style={styles.input} />/

    {/* <<< PRODUCT PAGE >>> */}
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
          </>
        )}
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9,]}
        renderItem={(item) => <Products
        />} />



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
    fontSize: 25,
    // fontFamily:"arial",
    fontWeight: "500",
    color: "orange",
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
    alignSelf: "center",


  }

})
