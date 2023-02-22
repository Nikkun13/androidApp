import {
  Button,
  FlatList,
  Image,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

export default function App() {
  const [bolsa, setBolsa] = useState(true);
  const [diceNumber, setDiceNumber] = useState("");
  const [dices, setDices] = useState([]);
  const [imagenLados, setImagenLados] = useState("");

  const onChangeNumber = (number) => {
    setDiceNumber(number);
    switch (number) {
      case "4":
        setImagenLados(require("./img/4ladosdice.png"));
        break;
      case "6":
        setImagenLados(require("./img/6ladosdice.png"));
        break;
      case "8":
        setImagenLados(require("./img/8ladosdice.png"));
        break;
      case "10":
        setImagenLados(require("./img/10ladosdice.png"));
        break;
      case "12":
        setImagenLados(require("./img/12ladosdice.png"));
        break;
      case "20":
        setImagenLados(require("./img/20ladosdice.png"));
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
          imgSource: imagenLados,
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

  return (
    <View style={styles.container}>
      <View>
        {bolsa ? (
          <View style={styles.menu}>
            <View>
              <Text style={styles.textoUno}>Hola Coder!</Text>
              <Text style={styles.textoUno}>Soy Nicolás</Text>
            </View>
            <View>
              <Image
                style={styles.imagen}
                source={require("./img/Dados.jpg")}
              />
            </View>
            <Text style={styles.textoDos}>
              Como primera app crearé un simulador de dados.
            </Text>
            <Button
              title="Ir a la Bolsa de Dados"
              color="#841584"
              onPress={irBolsa}
            />
          </View>
        ) : (
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
                <Button title="Agregar dado" onPress={addDice} />
              </View>
            </View>
            <FlatList
              data={dices}
              renderItem={(data) => (
                <Pressable
                  style={styles.contentList}
                  onPress={() => {
                    selectDice(data.item);
                  }}
                >
                  <Image
                    style={styles.imagenDado}
                    source={data.item.imgSource}
                  />
                  <Text style={styles.textoTres}>{data.item.value}</Text>
                </Pressable>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
            >
              <View style={styles.modalContainer}>
                <View styles={styles.modalTitle}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    Eliminar Dado
                  </Text>
                </View>
                <View styles={styles.modalContent}>
                  <Text>
                    ¿Está seguro que desea eliminar el Dado de{" "}
                    {selectedDice?.value} caras?
                  </Text>
                </View>
                <View styles={styles.modalActions}>
                  <Button
                    title="Cancelar"
                    onPress={() => {
                      setModalVisible(false);
                      setSelectedDice(null);
                    }}
                  />
                  <Button
                    title="Eliminar"
                    onPress={() => {
                      removeDice(selectedDice.id);
                    }}
                  />
                </View>
              </View>
            </Modal>
            <View>
              <Button title="Lanzar Dados" color="#FF8000" />
            </View>
            <View>
              <Button title="Regresar" color="#841584" onPress={irBolsa} />
            </View>
          </View>
        )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
