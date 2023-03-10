import { Image, Text, View } from "react-native";

import Button from "../components/Button";
import React from "react";
import { styles } from "../../styles";

const MenuInicialScreen = ({ navigation }) => {
  return (
    <View style={styles.menu}>
      <View>
        <Text style={styles.textoUno}>Hola Coder!</Text>
        <Text style={styles.textoUno}>Soy Nicolás</Text>
      </View>
      <View>
        <Image style={styles.imagen} source={require("../../img/Dados.jpg")} />
      </View>
      <Text style={styles.textoDos}>
        Como primera app crearé un simulador de dados.
      </Text>
      <Button
        styleButtonType={styles.buttonRegresar}
        onPress={() => {
          navigation.navigate("Bag");
        }}
        title="Ir a la Bolsa de Dados"
        disabled={false}
      />
    </View>
  );
};

export default MenuInicialScreen;
