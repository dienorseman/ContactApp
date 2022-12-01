import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AddContact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add contact</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          placeholderTextColor="#00000030"
          onChangeText={(text) => {
            setName(text);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Last name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Last name"
          placeholderTextColor="#00000030"
          onChangeText={(text) => {
            setLastName(text);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="email"
          placeholderTextColor="#00000030"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
      </View>
      <View style={{ justifyContent: "space-between", height: 60 }}>
        <Text style={styles.inputTitle}>Phone number</Text>
        <TextInput
          keyboardType={"numeric"}
          style={styles.textInput}
          placeholder="Phone number"
          placeholderTextColor="#00000030"
          onChangeText={(text) => {
            setPhoneNumber(text);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={async () => {
          token = await AsyncStorage.getItem("token");
          headers = {
            headers: {
              Authorization: "Bearer " + token,
            },
          };
          axios
            .post("http://192.168.1.144:8000/contact/contacts/", {
              name: name,
              last_name: lastName,
              email: email,
              phone_number: phoneNumber,
            }, headers)
            .then(async (res) => {
              console.log(res)
              navigation.navigate("Main");
            })
            .catch((errors) => console.log(errors));
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 35,
    marginTop: 10,
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24,
  },
  textInput: {
    borderBottomColor: "#00000030",
    borderBottomWidth: 1,
    width: "70%",
  },
  inputContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 30,
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: "#000",
    width: "100%",
    height: 50,
    justifyContent: "center",
  },
});
