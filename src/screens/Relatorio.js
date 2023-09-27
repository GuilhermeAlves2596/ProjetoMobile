import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Legenda from "../components/Legenda";

const Relatorio = (props) => {

  const back = () => {
    props.navigation.goBack()
  }

  return (
    <View style={estilos.viewBody}>
      <View style={estilos.viewHeader}>
        <View>
        <TouchableOpacity activeOpacity={0.6} onPress={back}>
          <Icon name="arrow-left" size={45} color="#573FBA" />
        </TouchableOpacity>
        </View>
        <View>
          <Text style={estilos.textHeader}>Relatório</Text>
        </View>
      </View>

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
  viewHeader: {
    backgroundColor: "#2B1D62",
    flex: 0.20,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10
  },
  viewCorpo:{
    flex: 0.80,
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