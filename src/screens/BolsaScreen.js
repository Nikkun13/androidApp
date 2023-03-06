import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";

import Button from "../components/Button";
import Modal from "../components/Modal";
import { styles } from "../../styles";

const BolsaScreen = ({ irBolsa }) => {
  const [diceNumber, setDiceNumber] = useState("");
  const [dices, setDices] = useState([]);
  const [colorDado, setColorDado] = useState("");
  const [desactivado, setDesactivado] = useState(false);
  const [desactivadoOpcionTresDados, setDesactivadoOpcionTresDados] =
    useState(false);
  const [selectedDice, setSelectedDice] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (dices.length > 21) {
      setDesactivadoOpcionTresDados(true);
      if (dices.length > 23) {
        setDesactivado(true);
      } else {
        setDesactivado(false);
      }
    } else {
      setDesactivadoOpcionTresDados(false);
    }
  }, [dices]);

  const onChangeNumber = (number) => {
    setDiceNumber(number);
    switch (number) {
      case "4":
        setColorDado(styles.colorCuatro);
        break;
      case "6":
        setColorDado(styles.colorSeis);
        break;
      case "8":
        setColorDado(styles.colorOcho);
        break;
      case "10":
        setColorDado(styles.colorDiez);
        break;
      case "12":
        setColorDado(styles.colorDoce);
        break;
      case "20":
        setColorDado(styles.colorVeinte);
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

  const selectDice = (dice) => {
    setSelectedDice(dice);
    setModalVisible(true);
  };

  const removeDice = (id) => {
    setModalVisible(!modalVisible);
    setDices((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedDice(null);
  };

  const addThreeDices = (id, dices) => {
    setModalVisible(!modalVisible);
    let valor;
    let colorDadoAdd3;
    dices.map((dice) => {
      if (dice.id == id) {
        valor = dice.value;
        colorDadoAdd3 = dice.colorD;
      }
    });
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

  const cancelModal = () => {
    setModalVisible(false);
    setSelectedDice(null);
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
        dices={dices}
        modalVisible={modalVisible}
        selectedDice={selectedDice}
        addThreeDices={addThreeDices}
        removeDice={removeDice}
        cancelModal={cancelModal}
        desactivadoOpcionTresDados={desactivadoOpcionTresDados}
      />
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
  );
};

export default BolsaScreen;
