import { Image, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Legenda from "../components/Legenda";

const Relatorio = (props) => {

  const back = () => {
    props.navigation.goBack()
  }

  return (
    <View style={estilos.viewBody}>
      <Header texto="Relatório"></Header>
      <View style={estilos.viewCorpo}>
        <View style={estilos.viewCard}>
            <Image source={require('../../assets/images/grafico.jpg')} style={estilos.imageGrafico} />
            <View>
                <Legenda/>
            </View>
        </View>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  viewBody: {
    backgroundColor: "#372775",
    flex: 1
  },
  viewCorpo:{
    flex: 2,
    flexDirection: "column",
    justifyContent: "center"
  },
  textHeader: {
    color: "#FFFFFF",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 40,
    paddingLeft: 25
  },
  viewCard:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  imageGrafico:{
    height: 270,
    width: 270
  }

})

export default Relatorio;