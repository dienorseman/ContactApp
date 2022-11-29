import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { AddContact } from "./screens/AddContact";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="add contact" component={AddContact} options={{presentation: 'modal'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
