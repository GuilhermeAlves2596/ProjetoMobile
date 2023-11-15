import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { useDispatch } from 'react-redux/es/exports';
import { reducerSetLogin } from '../../redux/loginSlice';
import Botao from '../components/Botao';
import InputText from '../components/InputText';
import MensagemErro from '../components/MensagemErro';
import { auth_mode } from '../firebase/config';

const Login = props => {
  const [email, setEmail] = useState('guilhermeand21@gmail.com');
  const [senha, setSenha] = useState('Alvess2596');
  const [erroMsg, setErroMsg] = useState('');

  const dispatch = useDispatch()

  const criarConta = () => {
    props.navigation.navigate('Nova Conta');
  };

  const recuperarSenha = () => {
    props.navigation.navigate('Recuperação de Senha');
  };

  const drawer = () => {
    dispatch(reducerSetLogin({email: email}))
    props.navigation.navigate('Drawer');
  };

  const entrar = () => {
    setErroMsg(null);

    if (verificarEmail() && verificarSenha()) {
      signInWithEmailAndPassword(auth_mode, email, senha)
        .then(() => {
          drawer();
        })
        .catch(error => {
          setErroMsg('Erro ao autenticar usuário');
        });
    } else {
      setErroMsg('E-mail ou senha inválidos.');
      return false;
    }
  };

  const verificarEmail = () => {
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regEmail.test(email);
  };

  const verificarSenha = () => {
    if (senha.length < 1) {
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Satisfying.you</Text>
        <Icon name="emotsmile" size={35} color="#FFFF" style={styles.icon} />
      </View>
      <View style={styles.inputs}>
        <InputText
          texto="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="default"
        />
        <InputText
          texto="Senha"
          value={senha}
          onChangeText={setSenha}
          keyboardType="default"
          campoSenha={true}
        />
        <MensagemErro erroMsg={erroMsg} visible={erroMsg != null} />
      </View>

      <View style={styles.container_botoes}>
        <Botao
          texto="Entrar"
          altura={35}
          largura="100%"
          corFundo="#37BD6D"
          tamanhoTexto={20}
          marginB="5%"
          funcao={entrar}
        />

        <Botao
          texto="Criar minha conta"
          altura={27}
          largura="100%"
          corFundo="#419ED7"
          tamanhoTexto={16}
          funcao={criarConta}
        />
        <Botao
          texto="Esqueci minha senha"
          altura={27}
          largura="100%"
          corFundo="#B0CCDE"
          tamanhoTexto={16}
          funcao={recuperarSenha}
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
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: '#FFFF',
    fontFamily: 'AveriaLibre-Regular',
  },
  icon: {
    marginLeft: 30,
  },
});

export default Login;
