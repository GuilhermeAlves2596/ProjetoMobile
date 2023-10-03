import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';

const PesquisaCard = (props) => {
    const texto = props.texto
    const textoData = props.textoData
    const icone = props.icone
    const color = props.color
    const nome = props.nome

    return (
        <View style={estilos.viewCard}>
            <TouchableOpacity style={estilos.view} onPress={() => props.onPress(nome)}>
                <View>
                    <Icon style={estilos.iconCard} name={icone} size={48} color={color} />
                </View>
                <View>
                    <Text style={estilos.textCard}>{texto}</Text>
                    <Text style={estilos.dataText}>{textoData}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    dataText: {
        fontSize: 12,
        alignSelf: "center"
    },
    iconCard: {
        marginBottom: '8%'
    },
    textCard: {
        color: "#3F92C5",
        fontFamily: "AveriaLibre-Regular",
        fontSize: 20,
        textTransform: "uppercase"
    },
    viewCard: {
        margin: '2%',
        borderRadius: 10,
        height: 125,
        width: 160,
        justifyContent: "space-around",
        backgroundColor: "white",
    },
    view: {
        alignItems: "center",
        justifyContent: "flex-start"
    }
})

export default PesquisaCard