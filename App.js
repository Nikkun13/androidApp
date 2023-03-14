import * as SplashScreen from "expo-splash-screen";

import React, { useEffect, useState } from "react";

import DiceNavigator from "./src/navigators/DiceNavigator";
// import BolsaScreen from "./src/screens/BolsaScreen";
// import MenuInicialScreen from "./src/screens/MenuInicialScreen";
// import ResultadosScreen from "./src/screens/ResultadosScreen";
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
  // const [bolsa, setBolsa] = useState(true);
  // const [resultPage, setResultPage] = useState(true);
  //const [dices, setDices] = useState([]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // const irBolsa = () => {
  //   setBolsa(!bolsa);
  //   setDices([]);
  // };

  // const irResultados = () => {
  //   setResultPage(!resultPage);
  // };

  if (!fontsLoaded) {
    return null;
  }
  return (
    <DiceNavigator />
    // <View style={styles.container}>
    //   <View>
    //     {bolsa ? (
    //       <MenuInicialScreen irBolsa={irBolsa} />
    //     ) : (
    //       <>
    //         {resultPage ? (
    //           <BolsaScreen
    //             irBolsa={irBolsa}
    //             irResultados={irResultados}
    //             dices={dices}
    //             setDices={setDices}
    //           />
    //         ) : (
    //           <ResultadosScreen
    //             irBolsa={irBolsa}
    //             irResultados={irResultados}
    //             dices={dices}
    //           />
    //         )}
    //       </>
    //     )}
    //   </View>

    //   <StatusBar style="auto" />
    // </View>
  );
}
