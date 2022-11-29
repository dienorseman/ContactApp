import React from "react";
import { FlatList, View, Text } from "react-native";
import Contacts from "./Contacts";

export default function ContactList({contactsData}) {
  return (
    <>
      <FlatList
        data={contactsData}      
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Contacts {... item}/>} 
      />
    </>
  );
}
