import { StyleSheet, Text, View } from "react-native";

const Legenda = () => {
    return (
        <View>
            <View style={estilos.itemLegenda}>
                <View style={[estilos.quadrado, { backgroundColor: "#F1CE7E" }]}></View>
                <Text style={estilos.textLegenda}>Excelente</Text>
            </View>
            <View style={estilos.itemLegenda}>
                <View style={[estilos.quadrado, { backgroundColor: "#6994FE" }]}></View>
                <Text style={estilos.textLegenda}>Bom</Text>
            </View>
            <View style={estilos.itemLegenda}>
                <View style={[estilos.quadrado, { backgroundColor: "#5FCDA4" }]}></View>
                <Text style={estilos.textLegenda}>Neutro</Text>
            </View>
            <View style={estilos.itemLegenda}>
                <View style={[estilos.quadrado, { backgroundColor: "#EA7288" }]}></View>
                <Text style={estilos.textLegenda}>Ruim</Text>
            </View>
            <View style={estilos.itemLegenda}>
                <View style={[estilos.quadrado, { backgroundColor: "#53D8D8" }]}></View>
                <Text style={estilos.textLegenda}>Péssimo</Text>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    textLegenda: {
        color: "#FFFFFF",
        fontFamily: "AveriaLibre-Regular",
        fontSize: 30,
        marginLeft: 10, // Adicione um espaço entre o quadrado e o texto
    },
    itemLegenda: {
        flexDirection: "row", // Alinhe os elementos horizontalmente
        alignItems: "center", // Centralize verticalmente
        marginBottom: 10, // Adicione espaço entre os itens da legenda
    },
    quadrado: {
        height: 20,
        width: 20,
        marginRight: 10, // Adicione espaço entre o quadrado e o texto
    },
});


export default Legenda