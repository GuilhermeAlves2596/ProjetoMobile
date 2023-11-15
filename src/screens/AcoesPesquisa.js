import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSelector } from 'react-redux';
import Card from "../components/Card";
import Header from "../components/Header";

const AcoesPesquisa = (props) => {

  const name = useSelector((state) => state.pesquisa.name)

  const goToColeta = () => {
    props.navigation.navigate("Coleta")
  }

  const goToRelatorio = () => {
    props.navigation.navigate("Relatorio")
  }

  const goToModificar = () => {
    props.navigation.navigate("Modificar Pesquisa")
  }


  return (
    <View style={estilos.viewBody}>
      <Header texto={name}></Header>
      <View style={estilos.viewCorpo}>
        <View style={estilos.viewCard}>
          <TouchableOpacity activeOpacity={0.6} onPress={goToModificar}>
            <View>
              <Card texto="Modificar" icone="file-document-edit-outline"></Card>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} onPress={goToColeta}>
            <View>
              <Card texto="Coletar Dados" icone="checkbox-multiple-outline"></Card>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} onPress={goToRelatorio}>
            <View>
              <Card texto="Relatório" icone="chart-donut"></Card>
            </View>
          </TouchableOpacity>
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
  viewCorpo: {
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
  viewCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  }

})

export default AcoesPesquisa;