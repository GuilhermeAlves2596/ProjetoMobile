import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Header = (props) => {

    const texto = props.texto

    const navigation = useNavigation();

    const home = () => {
        navigation.goBack();
      };

    return (
        <View style={estilos.viewHeader}>
            <View>
                <TouchableOpacity activeOpacity={0.6} onPress={home}>
                    <Icon name="arrow-left" size={45} color="#573FBA" />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={estilos.textHeader}>{texto}</Text>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    viewHeader: {
      backgroundColor: "#2B1D62",
      flex: 0.50,
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 10,
    },
    textHeader: {
        color: "#FFFFFF",
        fontFamily: "AveriaLibre-Regular",
        fontSize: 40,
        paddingLeft: 25
      }
})

export default Header