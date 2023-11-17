import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = props => {
  const {texto, icon, color, onPress, urlFoto} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={estilos.touchable}
      onPress={props.funcao}>
      {urlFoto && !props.funcao && (
        <Image source={{uri: urlFoto}} style={estilos.imagem} />
      )}
      <View style={estilos.viewCard}>
        <View style={estilos.view}>
          <View>
            {texto && <Text style={estilos.textCard}>{texto}</Text>}
            {icon && <Icon name={icon} color={color} size={50} />}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  textCard: {
    color: 'grey',
    padding: 10,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },
  viewCard: {
    marginTop: '1%',
    height: 65,
    width: 300,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  view: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  touchable: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default Card;
