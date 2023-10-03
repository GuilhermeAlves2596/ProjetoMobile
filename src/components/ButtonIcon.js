import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonIcon = props => {
    const tamanho = props.tamanho
    const cor = props.cor
    const icone = props.icone
    const texto = props.texto
    
    return (
        <View style={estilos.viewBotao}>
            <Icon name={icone} size={tamanho} color={cor}/>
            <Text style={estilos.texto}>{texto}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    viewBotao: {
        alignItems: 'center'
    },
    texto: {
        fontFamily: "AveriaLibre-Regular",
        color: '#FFFF',
        fontSize: 15
    }
})

export default ButtonIcon;