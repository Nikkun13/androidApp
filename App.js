import { Image, StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textoUno}>Hola Coder!</Text>
      <Text style={styles.textoUno}>Soy Nicolás</Text>
      <Image style={styles.imagen} source={require("./img/Dados.jpg")} />
      <Text style={styles.textoDos}>
        Como primera app crearé un simulador de dados.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#40CFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  textoUno: {
    color: "#FF0000",
    paddingBottom: 20,
    paddingTop: 10,
    fontSize: 48,
    textAlign: "center",
  },
  textoDos: {
    color: "#000",
    paddingBottom: 10,
    paddingTop: 50,
    fontSize: 24,
    textAlign: "center",
  },
  imagen: {
    height: 300,
    width: 300,
    borderRadius: 150,
  },
});
