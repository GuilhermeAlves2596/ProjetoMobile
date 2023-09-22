import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Satisfacao from "../src/components/Satisfacao";

const Coleta = () => {

  return (
    <View style={estilos.viewBody}>
      <TouchableOpacity style={estilos.botao} activeOpacity={0.2}>
        <Text>      </Text>
      </TouchableOpacity>

      <View style={estilos.content}>
        <View style={estilos.viewCorpo}>
          <Text style={estilos.text}>O que você achou do Carnaval 2024?</Text>
        </View>
      </View>

      <View style={estilos.iconesPesquisa}>
        <View>
          <Satisfacao texto="Péssimo" icone="sentiment-very-dissatisfied" cor="#D71616" />
        </View>
        <View>
          <Satisfacao texto="Ruim" icone="sentiment-dissatisfied" cor="#FF360A" />
        </View>
        <View>
          <Satisfacao texto="Neutro" icone="sentiment-neutral" cor="#FFC632" />
        </View>
        <View>
          <Satisfacao texto="Bom" icone="sentiment-satisfied-alt" cor="#37BD6D" />
        </View>
        <View>
          <Satisfacao texto="Excelente" icone="sentiment-very-satisfied" cor="#25BC22" />
        </View>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  viewBody: {
    backgroundColor: "#372775",
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center"
  },
  botao: {
    position: 'absolute',
    top: 1,
    right: 1,
    backgroundColor: "#372775",
    padding: 10,
  },
  viewCorpo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 40,
  },
  iconesPesquisa: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
})

export default Coleta;