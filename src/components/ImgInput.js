import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//"card" que segura uma imagem ou texto.

const Card = (props) => {

    const texto = props.texto
    const icon = props.icon
    const color = props.color

    return (
        <View style={estilos.viewCard}>
            <View style={estilos.view}>
                <View>
                    {texto && <Text style={estilos.textCard}>{texto}</Text>}
                    {icon && <Icon name={icon} color={color} size={50}/>}
                </View>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    textCard: {
        color: "grey",
        padding: 10,
        fontFamily: "AveriaLibre-Regular",
        fontSize: 20
    },
    viewCard: {
        marginTop: '1%',
        height: 65,
        width: 300,
        justifyContent: "center",
        backgroundColor: "white",
    },
    view: {
        flexDirection: "column",
        alignItems: "center"
    }
})

export default Card