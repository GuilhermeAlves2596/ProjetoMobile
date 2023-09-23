import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Satisfacao = (props) => {

    const texto = props.texto
    const icone = props.icone
    const cor = props.cor

    return (
        <View style={{height: 180, width: 150}}>
                <View style={estilos.pesquisa}>
                    <Icon name={icone} size={60} color={cor}/>
                    <Text style={estilos.textLegenda}>{texto}</Text>
                </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    textLegenda: {
        color: "#FFFFFF",
        fontFamily: "AveriaLibre-Regular",
        fontSize: 30,
        paddingTop: 10
    },
    pesquisa: {
        flexDirection: "column",
        alignItems: "center",
    }
});


export default Satisfacao