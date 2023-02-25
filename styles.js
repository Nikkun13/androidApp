import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    alignItems: "center",
    justifyContent: "center",
  },
  bolsa: {
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
    padding: 10,
  },
  numeroDado: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  centrar: {
    alignItems: "stretch",
    paddingRight: 40,
    paddingLeft: 40,
    paddingBottom: 10,
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
    margin: 5,
    width: 40,
    height: 40,
    justifyContent: "center",
    borderRadius: 5,
  },
  red: {
    backgroundColor: "#FF6347",
  },
  blue: {
    backgroundColor: "#87CEEB",
  },
  yellow: {
    backgroundColor: "#F0E68C",
  },
  green: {
    backgroundColor: "#90EE90",
  },
  white: {
    backgroundColor: "#FFFAF0",
  },
  violet: {
    backgroundColor: "#DDA0DD",
  },
  modalMainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContent: {
    padding: 10,
    width: "50%",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    margin: 10,
    width: 160,
    alignItems: "center",
  },
  buttonAgregar: {
    backgroundColor: "#87CEFA",
  },
  buttonEliminar: {
    backgroundColor: "#FF4500",
  },
  buttonCancelar: {
    backgroundColor: "#EEE8AA",
  },
  buttonLanzar: {
    backgroundColor: "#FF8000",
  },
  buttonRegresar: {
    backgroundColor: "#7B68EE",
  },
  buttonDesactivado: {
    backgroundColor: "#696969",
  },
});
