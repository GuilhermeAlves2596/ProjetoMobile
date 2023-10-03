import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Botao = props => {
  const {altura, largura, corFundo, tamanhoTexto, marginB} = props;

  return (
    <>
      <TouchableOpacity
        style={[
          estilos.TouchableOpacity,
          {backgroundColor: corFundo, height: altura, width: largura, marginBottom: marginB},
        ]}
        onPress={props.funcao}>
        <Text style={[estilos.textoBotao, {fontSize: tamanhoTexto}]}>
          {props.texto}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const estilos = StyleSheet.create({
  TouchableOpacity: {
    borderColor: '#777777',
    borderWidth: 1,
    width: '100%',
    margin: 5,
    shadowColor: '#00000040',
    shadowOffset: {width: 0, height: 4},
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFFF',
  },
});

export default Botao;
