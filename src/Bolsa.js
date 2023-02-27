import { FlatList, Pressable, Text, TextInput, View } from "react-native";

import Button from "./Button";
import Modal from "./Modal";
import React from "react";
import { styles } from "../styles";

const Bolsa = ({
  onChangeNumber,
  diceNumber,
  addDice,
  dices,
  modalVisible,
  selectDice,
  selectedDice,
  add3Dice,
  removeDice,
  cancelModal,
  lanzamiento,
  irBolsa,
  desactivado,
  desactivado3,
}) => {
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
        add3Dice={add3Dice}
        removeDice={removeDice}
        cancelModal={cancelModal}
        desactivado3={desactivado3}
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

export default Bolsa;
