import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  bolsa: {
    flex: 1,
    backgroundColor: "#fcbf6b",
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
  centrar: {
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    height: 300,
    width: 300,
    borderRadius: 150,
  },
  input: {
    width: 150,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    fontSize: 16,
    textAlign: "center",
    margin: 5,
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
    backgroundColor: "#fcbf6b",
    justifyContent: "center",
  },
  modalContainer: {
    height: "auto",
    width: 300,
    marginTop: 100,
    alignSelf: "center",
    backgroundColor: "#d34017",
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
    marginLeft: -9,
  },
  inputContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
