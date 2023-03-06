import { FlatList, Text, View } from "react-native";

import Button from "../components/Button";
import React from "react";
import { styles } from "../../styles";

const ResultadosScreen = ({ irResultados, dices }) => {
  if (dices == undefined) {
    return (
      <View>
        <Text>Sin dados</Text>
      </View>
    );
  }
  return (
    <View style={styles.resultPage}>
      <View>
        <Text style={styles.textoUno}>Resultados:</Text>
      </View>
      <FlatList
        data={dices}
        horizontal={false}
        numColumns={3}
        renderItem={(data) => (
          <View style={styles.resultados}>
            <View style={[styles.contentList, data.item.colorD]}>
              <Text style={styles.numeroDado}>{data.item.value}</Text>
            </View>
            <View>
              <Text style={styles.resultadosTexto}> = {data.item.result}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View>
        <Button
          styleButtonType={styles.buttonRegresar}
          onPress={irResultados}
          title="Ir a la Bolsa de Dados"
          disabled={false}
        />
      </View>
    </View>
  );
};

export default ResultadosScreen;
