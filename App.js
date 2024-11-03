import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./screens/SearchScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Пошук">
        <Stack.Screen name="Пошук" component={SearchScreen} />
        <Stack.Screen name="Деталі" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
