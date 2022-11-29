import React from "react";
import { StyleSheet, Text, View, } from "react-native";

export default function Contacts ({id, name, last_name, email, phone_number}) {
    return (
        <>
        <View style={styles.container}>
            <Text>Nombres: {name}</Text>
            <Text>Apellido: {last_name}</Text>
            <Text>Telefono: {phone_number}</Text>
        </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    }
})