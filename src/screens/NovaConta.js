import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputText from '../components/InputText';
import {useState} from 'react';
import Botao from '../components/Botao';

const Login = props => {
  const [txtEmail, setEmail] = useState('');
  const [txtSenha, setSenha] = useState('');

  const cadastrar = () => {
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
        <InputText
          texto="Senha"
          value={txtSenha}
          onChangeText={setSenha}
          keyboardType="default"
          campoSenha={true}
        />
        <InputText
          texto="Repetir Senha"
          value={txtSenha}
          onChangeText={setSenha}
          keyboardType="default"
          campoSenha={true}
        />
      </View>

      <View style={styles.container_botoes}>
        <Botao
          texto="CADASTRAR"
          altura={35}
          corFundo="#37BD6D"
          tamanhoTexto={20}
          funcao={cadastrar}
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
    marginTop: '5%',
  },
});

export default Login;
