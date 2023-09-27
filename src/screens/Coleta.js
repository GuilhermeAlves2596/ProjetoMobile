import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Satisfacao from "../components/Satisfacao";

const Coleta = (props) => {

  const back = () => {
    props.navigation.goBack()
  }

  const goToAgradecimento = () => {
    props.navigation.navigate("Agradecimento");
  
    setTimeout(() => {
      props.navigation.goBack();
    }, 3000); 
  }

  return (
    <View style={estilos.viewBody}>
      <TouchableOpacity style={estilos.botao} activeOpacity={0.2} onPress={back}>
        <Text>      </Text>
      </TouchableOpacity>

      <View style={estilos.content}>
        <View style={estilos.viewCorpo}>
          <Text style={estilos.text}>O que você achou do Carnaval 2024?</Text>
        </View>
      </View>

      <View style={estilos.iconesPesquisa}>
        <TouchableOpacity onPress={goToAgradecimento}>
          <Satisfacao texto="Péssimo" icone="sentiment-very-dissatisfied" cor="#D71616" />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToAgradecimento}>
          <Satisfacao texto="Ruim" icone="sentiment-dissatisfied" cor="#FF360A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToAgradecimento}>
          <Satisfacao texto="Neutro" icone="sentiment-neutral" cor="#FFC632" />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToAgradecimento}>
          <Satisfacao texto="Bom" icone="sentiment-satisfied-alt" cor="#37BD6D" />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToAgradecimento}>
          <Satisfacao texto="Excelente" icone="sentiment-very-satisfied" cor="#25BC22" />
        </TouchableOpacity>

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