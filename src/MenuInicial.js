import { Image, Text, View } from "react-native";

import Button from "./Button";
import React from "react";
import { styles } from "../styles";

const MenuInicial = ({ irBolsa }) => {
  return (
    <View style={styles.menu}>
      <View>
        <Text style={styles.textoUno}>Hola Coder!</Text>
        <Text style={styles.textoUno}>Soy Nicolás</Text>
      </View>
      <View>
        <Image style={styles.imagen} source={require("../img/Dados.jpg")} />
      </View>
      <Text style={styles.textoDos}>
        Como primera app crearé un simulador de dados.
      </Text>
      <Button
        styleButtonType={styles.buttonRegresar}
        onPress={irBolsa}
        title="Ir a la Bolsa de Dados"
        disabled={false}
      />
    </View>
  );
};

export default MenuInicial;
