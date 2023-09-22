import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Satisfacao = (props) => {

    const texto = props.texto
    const icone = props.icone
    const cor = props.cor

    return (
        <View style={{height: 180, width: 150}}>
            <TouchableOpacity>
                <View style={estilos.pesquisa}>
                    <Icon name={icone} size={60} color={cor}/>
                    <Text style={estilos.textLegenda}>{texto}</Text>
                </View>
            </TouchableOpacity>
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