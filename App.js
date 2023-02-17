import { Button, Image, Text, TextInput, View } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("itemText", itemText);
  }, [itemText]);

  const onChangeText = (text) => {
    setItemText(text);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textoUno}>Hola Coder!</Text>
        <Text style={styles.textoUno}>Soy Nicolás</Text>
      </View>
      <View>
        <Image style={styles.imagen} source={require("./img/Dados.jpg")} />
      </View>
      <View>
        <TextInput
          placeholder="escriba aqui"
          onChangeText={onChangeText}
          value={itemText}
        />
      </View>
      <Text style={styles.textoDos}>
        Como primera app crearé un simulador de dados.
      </Text>
      <Button title="Lanza los dados" color="#841584" />
      <StatusBar style="auto" />
    </View>
  );
}
