import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const PesquisaCard = props => {
  const {name, data, onPress, id, urlFoto} = props;

  return (
    <View style={estilos.viewCard}>
      <TouchableOpacity
        style={estilos.view}
        onPress={() => onPress({name, data, id, urlFoto})}>
        <View>
          {/* <Icon style={estilos.iconCard} name={icone} size={48} color={color} /> */}
          <Image source={{uri: urlFoto}} style={estilos.imagemCard} />
        </View>
        <View>
          <Text style={estilos.textCard}>{name}</Text>
          <Text style={estilos.dataText}>{data}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  dataText: {
    fontSize: 12,
    alignSelf: 'center',
  },
  iconCard: {
    marginBottom: '8%',
  },
  textCard: {
    color: '#3F92C5',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  viewCard: {
    margin: '2%',
    borderRadius: 10,
    height: 125,
    width: 160,
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  view: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imagemCard: {
    width: 120,
    height: 60,
  },
});

export default PesquisaCard;
