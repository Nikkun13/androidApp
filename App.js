import * as SplashScreen from "expo-splash-screen";

import React, { useEffect, useState } from "react";

import AppLoading from "expo-app-loading";
import BolsaScreen from "./src/screens/BolsaScreen";
import MenuInicialScreen from "./src/screens/MenuInicialScreen";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { styles } from "./styles";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "roboto-bold": require("./assets/fonts/RobotoSlab-Bold.ttf"),
  });
  const [bolsa, setBolsa] = useState(true);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const irBolsa = () => {
    setBolsa(!bolsa);
  };

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View>
        {bolsa ? (
          <MenuInicialScreen irBolsa={irBolsa} />
        ) : (
          <BolsaScreen irBolsa={irBolsa} />
        )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
