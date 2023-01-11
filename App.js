import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { AddContact } from "./screens/AddContact";
import { LoginScreen } from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Main" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="add contact" component={AddContact} options={{presentation: 'modal'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const ip = '172.20.10.3:19000';
