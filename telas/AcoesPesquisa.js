import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from "../src/components/Card";

const AcoesPesquisa = () => {

  return (
    <View style={estilos.viewBody}>
      <View style={estilos.viewHeader}>
        <View>
        <TouchableOpacity activeOpacity={0.6}>
          <Icon name="arrow-left" size={45} color="#573FBA" />
        </TouchableOpacity>
        </View>
        <View>
          <Text style={estilos.textHeader}>Carnaval</Text>
        </View>
      </View>

      <View style={estilos.viewCorpo}>
        <View style={estilos.viewCard}>
          <View>
            <Card texto="Modificar" icone="file-document-edit-outline"></Card>
          </View>
          <View>
            <Card texto="Coletar Dados" icone="checkbox-multiple-outline"></Card>
          </View>
          <View>
            <Card texto="Relatório" icone="chart-donut"></Card>
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
  }

})

export default AcoesPesquisa;