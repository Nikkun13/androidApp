import React, { useEffect, useState } from "react";

import Bolsa from "./src/Bolsa";
import MenuInicial from "./src/MenuInicial";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
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
    <View style={styles.container}>
      <View>
        {bolsa ? (
          <MenuInicial irBolsa={irBolsa} />
        ) : (
          <Bolsa
            onChangeNumber={onChangeNumber}
            diceNumber={diceNumber}
            addDice={addDice}
            dices={dices}
            modalVisible={modalVisible}
            selectDice={selectDice}
            selectedDice={selectedDice}
            add3Dice={add3Dice}
            removeDice={removeDice}
            cancelModal={cancelModal}
            lanzamiento={lanzamiento}
            irBolsa={irBolsa}
            desactivado={desactivado}
            desactivado3={desactivado3}
          />
        )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
