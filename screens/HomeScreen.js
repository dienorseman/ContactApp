import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ContactList from "../components/ContactList";
import { contactsData } from "../data/contacts";


export default function HomeScreen({navigation}) {
  const [localData, setlocalData] = useState(
    contactsData.sort((a, b) => {
      return a.name > b.name;
    })
  );


  const [searchData, setSearchData] = useState({});

  return (
    <View style={styles.container}>
      <Image
        style={styles.pic}
        source={{
          uri: "https://images.pexels.com/photos/14464893/pexels-photo-14464893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      />
      <Text style={styles.title}>Contactos</Text>
      <TextInput style={styles.search} placeholder="Search"
      />
      <ContactList contactsData={localData} />
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("add contact")}
      >
        <Text style={styles.plus}>
            +
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 74,
    paddingHorizontal: 24,
    backgroundColor: '#fff'
  },
  pic: {
    width: 54,
    height: 54,
    borderRadius: 30,
    alignSelf: "flex-end",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 12,
  },
  search: {
    backgroundColor: "#eee",
    height: 40,
    marginBottom: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 50,
    right: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },

  plus: {
    color: '#fff',
    fontSize: 34,
    position: 'absolute',
    top: -2,
    left: 10,
  }
});
