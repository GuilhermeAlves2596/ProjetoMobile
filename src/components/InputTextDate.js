import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const InputText = props => {
  return (
    <View>
      <Text style={estilos.Text}>{props.texto}</Text>
      <TextInput
        style={estilos.TextInput}
        value={props.value} // Corrigir a passagem do valor
        showSoftInputOnFocus={props.showSoftInputOnFocus}
        onChangeText={(text) => props.onChangeText(text)} // Corrigir a chamada do onChangeText
        onPressIn={() => props.onPressIn()}
        right={<TextInput.Icon style={estilos.TextInputIcon} size={35} icon={require('../../assets/images/grafico.jpg')} />}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  TextInput: {
    fontSize: 15,
    borderWidth: 1,
    height: 35,
    borderColor: '#555555',
    color: '#3F92C5',
    backgroundColor: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
    padding: 10,
    marginBottom: '1%',
  },
  TextInputIcon: {
    
  },
  Text: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default InputText;