import { StyleSheet, Text, View } from "react-native";

const Agradecimento = () => {
  return (
    <View style={estilos.viewBody}>
      <View>
        <Text style={estilos.text}>Obrigado por participar da pesquisa!</Text>
        <Text style={estilos.text}>Aguardamos você no próximo ano!</Text>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  viewBody: {
    backgroundColor: "#372775",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 40,
    marginBottom: 35,
    textAlign: "center"
  }
})

export default Agradecimento;