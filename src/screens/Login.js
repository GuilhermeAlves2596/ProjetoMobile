import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Botao from '../components/Botao';
import InputText from '../components/InputText';

const Login = props => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const criarConta = () => {
    props.navigation.navigate('Nova Conta');
  };

  const recuperarSenha = () => {
    props.navigation.navigate('Recuperação de Senha');
  };

  const entrar = () => {
    props.navigation.navigate('Home');
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
      </View>

      <View style={styles.container_botoes}>
        <Botao
          texto="Entrar"
          altura={35}
          corFundo="#37BD6D"
          tamanhoTexto={20}
          marginB="5%"
          funcao={entrar}
        />

        <Botao
          texto="Criar minha conta"
          altura={27}
          corFundo="#419ED7"
          tamanhoTexto={16}
          funcao={criarConta}
        />
        <Botao
          texto="Esqueci minha senha"
          altura={27}
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
    marginTop: '3%',
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
