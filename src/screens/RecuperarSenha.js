import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputText from '../components/InputText';
import {useState} from 'react';
import Botao from '../components/Botao';

const Login = props => {
  const [txtEmail, setEmail] = useState('');

  const recuperar = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <InputText
          texto="E-mail"
          value={txtEmail}
          onChangeText={setEmail}
          keyboardType="default"
        />
      </View>

      <View style={styles.container_botoes}>
        <Botao
          texto="RECUPERAR"
          altura={35}
          corFundo="#37BD6D"
          tamanhoTexto={20}
          funcao={recuperar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 100,
    backgroundColor: '#372775',
  },
  container_botoes: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '12%',
  },
});

export default Login;
