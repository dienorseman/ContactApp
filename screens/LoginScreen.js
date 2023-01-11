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
import { ip } from "../App";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View
        style={{
          justifyContent: "space-between",
          height: 60,
          width: 200,
          marginBottom: 40,
        }}
      >
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="johnDoe@email.com"
          placeholderTextColor="#00000030"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "space-between",
          height: 60,
          width: 200,
          marginBottom: 40,
        }}
      >
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          placeholder="****"
          placeholderTextColor="#00000030"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          axios
            .post("https://safe-contact-cblnbu253a-uc.a.run.app/api/auth/login", {
              username: email,
              password: passWord,
            })
            .then(async (res) => {
                AsyncStorage.setItem('token', res.data.access)
                navigation.navigate("Main")
            })
            .catch((errors) => console.log(errors));
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    paddingHorizontal: 30,
    paddingTop: 70,
    alignItems: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: "45%",
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
  },
  inputContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 30,
  },
  loginButton: {
    backgroundColor: "#000",
    width: 200,
    height: 50,
    justifyContent: "center",
  },
});
