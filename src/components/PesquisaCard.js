import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PesquisaCard = (props) => {

    const texto = props.texto
    const icone = props.icone

    return (
        <View style={estilos.viewCard}>
            <View style={estilos.view}>
                <View>
                    <Icon name={icone} size={58} color="#F9F9F9" />
                </View>
                <View>
                    <Text style={estilos.textCard}>{texto}</Text>
                </View>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    textCard: {
        color: "#3F92C5",
        padding: 10,
        fontFamily: "AveriaLibre-Regular",
        fontSize: 20
    },
    viewCard: {
        margin: '2%',
        height: 175,
        width: 175,
        justifyContent: "space-evenly",
        backgroundColor: "white",
    },
    view: {
        alignItems: "center"
    }
})

export default PesquisaCard