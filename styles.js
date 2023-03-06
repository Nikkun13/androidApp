import Colors from "./src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.fondoMenu,
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    alignItems: "center",
    justifyContent: "center",
  },
  bolsa: {
    backgroundColor: Colors.fondoBolsa,
    alignItems: "center",
    justifyContent: "center",
  },
  textoUno: {
    color: Colors.titulo,
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 48,
    textAlign: "center",
    fontFamily: "open-sans-bold",
  },
  textoDos: {
    color: Colors.texto,
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 24,
    textAlign: "center",
    fontFamily: "open-sans",
  },
  textoTres: {
    color: Colors.texto,
    fontSize: 16,
    textAlign: "center",
    padding: 10,
    fontFamily: "open-sans",
  },
  numeroDado: {
    color: Colors.texto,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "roboto-bold",
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
  colorCuatro: {
    backgroundColor: Colors.dadoCuatro,
  },
  colorDiez: {
    backgroundColor: Colors.dadoDiez,
  },
  colorOcho: {
    backgroundColor: Colors.dadoOcho,
  },
  colorDoce: {
    backgroundColor: Colors.dadoDoce,
  },
  colorSeis: {
    backgroundColor: Colors.dadoSeis,
  },
  colorVeinte: {
    backgroundColor: Colors.dadoVeinte,
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
    marginTop: 10,
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
    backgroundColor: Colors.botonAgregar,
  },
  buttonEliminar: {
    backgroundColor: Colors.botonEliminar,
  },
  buttonCancelar: {
    backgroundColor: Colors.botonCancelar,
  },
  buttonLanzar: {
    backgroundColor: Colors.botonLanzar,
  },
  buttonRegresar: {
    backgroundColor: Colors.botonBolsa,
  },
  buttonDesactivado: {
    backgroundColor: Colors.botonDesactivado,
  },
  buttonVaciar: {
    backgroundColor: Colors.botonVaciar,
  },
  resultados: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  resultadosTexto: {
    fontFamily: "roboto-bold",
    fontSize: 16,
  },
  resultPage: {
    backgroundColor: Colors.fondoResultado,
    alignItems: "center",
    justifyContent: "center",
  },
});
