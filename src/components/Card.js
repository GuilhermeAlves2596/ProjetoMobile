import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = (props) => {

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
        color: "#FFFFFF",
        padding: 10,
        fontFamily: "AveriaLibre-Regular",
        fontSize: 20
    },
    viewCard: {
        height: 160,
        width: 170,
        justifyContent: "center",
        backgroundColor: "#312464",
    },
    view: {
        flexDirection: "column",
        alignItems: "center"
    }
})

export default Card