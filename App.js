import { Button, Image, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textoUno}>Hola Coder!</Text>
      <Text style={styles.textoUno}>Soy Nicolás</Text>
      <Image style={styles.imagen} source={require("./img/Dados.jpg")} />
      <Text style={styles.textoDos}>
        Como primera app crearé un simulador de dados.
      </Text>
      <Button title="Lanza los dados" color="#841584" />
      <StatusBar style="auto" />
    </View>
  );
}
