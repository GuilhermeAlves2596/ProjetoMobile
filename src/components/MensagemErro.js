import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { HelperText } from 'react-native-paper';

const MyComponent = props => {
   const erroMsg = props.erroMsg;
   const visible = props.visible;

 return (
    <View>
      {erroMsg && <HelperText style={estilos.textoErro} type="error" visible={visible}> {erroMsg} </HelperText>}
    </View>
  );
};

const estilos = StyleSheet.create({
    textoErro: {
        color: "#FD7979",
        fontFamily: "AveriaLibre-Regular",
        fontSize: 14,
    }
});

export default MyComponent;