import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Botao from '../components/Botao';
import DataModal from '../components/DateModal';
import Header from '../components/Header';
import ImgInput from '../components/ImgInput';
import InputText from '../components/InputText';
import PopUp from '../components/PopUp';

const ModificarPesquisa = props => {
  const [txtNome, setNome] = useState('');

  const cadastrar = () => {
    props.navigation.navigate('Home');
  };

  return (
    <View style={styles.viewBody}>
      <Header texto="Modificar Pesquisa"></Header>
      <View style={styles.container}>
        <View style={styles.inputs}>
          <InputText
            texto="Nome"
            value={txtNome}
            onChangeText={setNome}
            keyboardType="default"
          />
          <DataModal></DataModal>
        </View>
        <ImgInput icon="party-popper" color="pink" />
        <View style={styles.container_botoes}>
          <Botao
            texto="SALVAR"
            altura={35}
            largura="100%"
            corFundo="#37BD6D"
            marginB="2%"
            tamanhoTexto={20}
            funcao={cadastrar}
          />
        </View>
        
        <View style={styles.botaoApagar}>
          <PopUp></PopUp>
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
  botaoApagar: {
    position: 'absolute',
    bottom: 0,
    right: 3,
    padding: 5,
    margin: '1%'
  },
  container_botoes: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1%',
  },
});

export default ModificarPesquisa;
