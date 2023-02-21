import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#40CFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  textoUno: {
    color: "#FF0000",
    paddingBottom: 20,
    paddingTop: 10,
    fontSize: 48,
    textAlign: "center",
  },
  textoDos: {
    color: "#000",
    paddingBottom: 10,
    paddingTop: 50,
    fontSize: 24,
    textAlign: "center",
  },
  textoTres: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
  },
  imagen: {
    height: 300,
    width: 300,
    borderRadius: 150,
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    fontSize: 16,
    textAlign: "center",
  },
  diceContainer: {
    marginTop: 30,
    flex: 1,
  },
  dice: {
    padding: 10,
    textAlign: "center",
  },
  contentList: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    justifyContent: "center",
  },
  modalContainer: {
    height: 400,
    width: 300,
    marginTop: 100,
    alignSelf: "center",
    backgroundColor: "lime",
  },
  modalTitle: {
    padding: 10,
    borderRadius: 5,
  },
  modalContent: {
    padding: 10,
    width: "50%",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imagenDado: {
    height: 40,
    width: 40,
    position: "absolute",
    left: "50%",
    marginLeft: -10,
  },
});
