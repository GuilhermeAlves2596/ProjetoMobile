import { StyleSheet, View } from "react-native";

//equivalente ao <hr>, necessário no drawer

const Separador = (props) => {
    return (
        <View style={estilos.hr}></View>
    )
}

const estilos = StyleSheet.create({
    hr: {
        backgroundColor: "#FFFF",
        height: 1,
        width: '85%',
        alignSelf: 'center',
        marginTop: '5%',
        marginBottom: '5%'
    }
})

export default Separador;