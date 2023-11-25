import { doc, increment, updateDoc } from "firebase/firestore";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from 'react-redux';
import Satisfacao from "../components/Satisfacao";
import { db } from '../firebase/config';

const Coleta = (props) => {

  const email = useSelector(state => state.login.email);
  const id = useSelector(state => state.pesquisa.id);
  const name = useSelector((state) => state.pesquisa.name)

  const back = () => {
    props.navigation.navigate("Drawer")
  }

  const goToAgradecimento = async (satisfacao) => {

    const pesquisaRef = doc(db, email, id);

    if (satisfacao == "pessimo") {
      await updateDoc(pesquisaRef, {
        pessimo: increment(1)
      });
    } else if (satisfacao == "ruim") {
      await updateDoc(pesquisaRef, {
        ruim: increment(1)
      });
    } else if (satisfacao == "neutro") {
      await updateDoc(pesquisaRef, {
        neutro: increment(1)
      });
    } else if (satisfacao == "bom") {
      await updateDoc(pesquisaRef, {
        bom: increment(1)
      });
    } else if (satisfacao == "excelente") {
      await updateDoc(pesquisaRef, {
        excelente: increment(1)
      });
    }
      props.navigation.navigate("Agradecimento");

      setTimeout(() => {
        props.navigation.navigate("Coleta");
      }, 3000);
    }

    return (
      <View style={estilos.viewBody}>
        <TouchableOpacity style={estilos.botao} activeOpacity={0.2} onPress={back}>
          <Text>      </Text>
        </TouchableOpacity>

        <View style={estilos.content}>
          <View style={estilos.viewCorpo}>
            <Text style={estilos.text}>O que você achou da {name}?</Text>
          </View>
        </View>

        <View style={estilos.iconesPesquisa}>
          <TouchableOpacity onPress={() => goToAgradecimento("pessimo")}>
            <Satisfacao texto="Péssimo" icone="sentiment-very-dissatisfied" cor="#D71616" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToAgradecimento("ruim")}>
            <Satisfacao texto="Ruim" icone="sentiment-dissatisfied" cor="#FF360A" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToAgradecimento("neutro")}>
            <Satisfacao texto="Neutro" icone="sentiment-neutral" cor="#FFC632" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToAgradecimento("bom")}>
            <Satisfacao texto="Bom" icone="sentiment-satisfied-alt" cor="#37BD6D" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToAgradecimento("excelente")}>
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