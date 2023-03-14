import BolsaScreen from "../screens/BolsaScreen";
import MenuInicialScreen from "../screens/MenuInicialScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import ResultadosScreen from "../screens/ResultadosScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const DiceNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MenuInicialScreen} />
        <Stack.Screen name="Bag" component={BolsaScreen} />
        <Stack.Screen name="Result" component={ResultadosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DiceNavigator;
