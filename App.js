import {
  FlatList,
  Image,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import Button from "./src/Button";
import MenuInicial from "./src/MenuInicial";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

export default function App() {
  const [bolsa, setBolsa] = useState(true);
  const [diceNumber, setDiceNumber] = useState("");
  const [dices, setDices] = useState([]);
  const [colorDado, setColorDado] = useState("");
  const [desactivado, setDesactivado] = useState(false);
  const [desactivado3, setDesactivado3] = useState(false);

  useEffect(() => {
    if (dices.length > 21) {
      setDesactivado3(true);
      if (dices.length > 23) {
        setDesactivado(true);
      } else {
        setDesactivado(false);
      }
    } else {
      setDesactivado3(false);
    }
  }, [dices]);

  const onChangeNumber = (number) => {
    setDiceNumber(number);
    switch (number) {
      case "4":
        setColorDado(styles.red);
        break;
      case "6":
        setColorDado(styles.white);
        break;
      case "8":
        setColorDado(styles.yellow);
        break;
      case "10":
        setColorDado(styles.blue);
        break;
      case "12":
        setColorDado(styles.green);
        break;
      case "20":
        setColorDado(styles.violet);
        break;

      default:
        break;
    }
  };

  const addDice = () => {
    if (
      diceNumber == 4 ||
      diceNumber == 6 ||
      diceNumber == 8 ||
      diceNumber == 10 ||
      diceNumber == 12 ||
      diceNumber == 20
    ) {
      setDices((oldArry) => [
        ...oldArry,
        {
          id: Date.now(),
          value: diceNumber,
          colorD: colorDado,
        },
      ]);
    } else {
      alert("Escriba 4, 6, 8, 10, 12 o 20");
    }
    setDiceNumber("");
  };

  const irBolsa = () => {
    setBolsa(!bolsa);
    setDices([]);
    setDesactivado(false);
  };

  const [selectedDice, setSelectedDice] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const selectDice = (dice) => {
    setSelectedDice(dice);
    setModalVisible(true);
  };

  const removeDice = (id) => {
    setModalVisible(!modalVisible);
    setDices((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedDice(null);
  };

  const add3Dice = (id, dices) => {
    setModalVisible(!modalVisible);
    let valor;
    let colorDadoAdd3;
    dices.map((dice) => {
      if (dice.id == id) {
        valor = dice.value;
        colorDadoAdd3 = dice.colorD;
      }
    });
    console.log(colorDadoAdd3);
    for (let j = 1; j < 4; j++) {
      setDices((oldArry) => [
        ...oldArry,
        {
          id: Date.now() + j,
          value: valor,
          colorD: colorDadoAdd3,
        },
      ]);
    }
  };

  const lanzamiento = (dices) => {
    let resultado = [];
    let caras = [];
    let cantidad = dices.length;
    dices.map((dice) => {
      let valor = Math.floor(Math.random() * dice.value + 1);
      resultado = [...resultado, valor];
      caras = [...caras, dice.value];
    });
    let final = "";
    for (let i = 0; i < cantidad; i++) {
      final =
        final +
        "Dado-" +
        (i + 1) +
        " (" +
        caras[i] +
        " caras) = " +
        resultado[i] +
        ". /// ";
    }
    alert("El resultado es " + final);
  };

  return (
    <View style={styles.container}>
      <View>
        {bolsa ? (
          <MenuInicial irBolsa={irBolsa} />
        ) : (
          // <View style={styles.menu}>
          //   <View>
          //     <Text style={styles.textoUno}>Hola Coder!</Text>
          //     <Text style={styles.textoUno}>Soy Nicolás</Text>
          //   </View>
          //   <View>
          //     <Image
          //       style={styles.imagen}
          //       source={require("./img/Dados.jpg")}
          //     />
          //   </View>
          //   <Text style={styles.textoDos}>
          //     Como primera app crearé un simulador de dados.
          //   </Text>
          //   <Button
          //     styleButtonType={styles.buttonRegresar}
          //     onPress={irBolsa}
          //     title="Ir a la Bolsa de Dados"
          //     disabled={false}
          //   />
          // </View>
          <View style={styles.bolsa}>
            <View>
              <Text style={styles.textoUno}>En la bolsa!</Text>
            </View>
            <View style={styles.centrar}>
              <Text style={styles.textoDos}>
                Seleccionar número de caras del dado a arrojar
              </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={diceNumber}
                  placeholder="4, 6, 8, 10, 12, o 20"
                  keyboardType="numeric"
                />
                <Button
                  styleButtonType={styles.buttonAgregar}
                  onPress={addDice}
                  title="Agregar dado"
                  disabled={desactivado}
                />
              </View>
            </View>
            <FlatList
              data={dices}
              horizontal={false}
              numColumns={3}
              renderItem={(data) => (
                <Pressable
                  style={[styles.contentList, data.item.colorD]}
                  onPress={() => {
                    selectDice(data.item);
                  }}
                >
                  <Text style={styles.numeroDado}>{data.item.value}</Text>
                </Pressable>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
            >
              <View style={styles.modalMainView}>
                <View style={styles.modalView}>
                  <View styles={styles.modalTitle}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    >
                      Dado de {selectedDice?.value} caras
                    </Text>
                  </View>
                  <View styles={styles.modalContent}>
                    <Text style={styles.textoTres}>¿Qué desea hacer?</Text>
                  </View>
                  <View styles={styles.modalActions}>
                    <Button
                      styleButtonType={styles.buttonAgregar}
                      onPress={() => {
                        add3Dice(selectedDice.id, dices);
                      }}
                      title="Agregar 3 Dados"
                      disabled={desactivado3}
                    />
                    <Button
                      styleButtonType={styles.buttonEliminar}
                      onPress={() => {
                        removeDice(selectedDice.id);
                      }}
                      title="Eliminar"
                      disabled={false}
                    />
                    <Button
                      styleButtonType={styles.buttonCancelar}
                      onPress={() => {
                        setModalVisible(false);
                        setSelectedDice(null);
                      }}
                      title="Cancelar"
                      disabled={false}
                    />
                  </View>
                </View>
              </View>
            </Modal>
            <View style={styles.inputContainer}>
              <Button
                styleButtonType={styles.buttonLanzar}
                onPress={() => lanzamiento(dices)}
                title="Lanzar Dados"
                disabled={false}
              />
              <Button
                styleButtonType={styles.buttonRegresar}
                onPress={irBolsa}
                title="Regresar"
                disabled={false}
              />
            </View>
          </View>
        )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
