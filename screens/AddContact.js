import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export const AddContact = () => {

  const [name, setName] = useState('')

  return (
    <View style={styles.container}>        
    <Text style={styles.title}>Add contact</Text>
      <View style={{flexDirection: 'row'}} >
        <Text style={styles.inputTitle}>First Name</Text>
        <TextInput 
            style={styles.textInput} 
            placeholder='Name'
            placeholderTextColor='#00000030'
            onChangeText={(text) => {setName(text)}}
        />
      </View>
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
  textInput: {},
});
