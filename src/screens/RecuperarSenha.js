import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Botao from '../components/Botao';
import Header from '../components/Header';
import InputText from '../components/InputText';
import MensagemErro from '../components/MensagemErro';

const Login = props => {
  const [txtEmail, setEmail] = useState('');
  const [erroMsg, setErroMsg] = useState ('');

  const voltarLogin = () => {
    props.navigation.navigate('Login');
  };

  const recuperar = () => {
    if(verificarEmail()) {
      setErroMsg(null);
      voltarLogin();
    } else {
      setErroMsg('E-mail parece ser inválido. ');
      return false;
    }
  };

  const verificarEmail = () => {
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regEmail.test(txtEmail);
  }

  return (
    <View style={styles.viewBody}>
      <Header texto="Recuperação de Senha"></Header>
      <View style={styles.container}>
        <View style={styles.inputs}>
          <InputText
            texto="E-mail"
            value={txtEmail}
            onChangeText={setEmail}
            keyboardType="default"
          />
        </View>
        <MensagemErro erroMsg={erroMsg} visible={erroMsg != null}/>

        <View style={styles.container_botoes}>
          <Botao
            texto="RECUPERAR"
            altura={35}
            largura="100%"
            corFundo="#37BD6D"
            tamanhoTexto={20}
            funcao={recuperar}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    backgroundColor: "#372775",
    flex: 1
  },
  container: {
    flex: 0.7,
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
