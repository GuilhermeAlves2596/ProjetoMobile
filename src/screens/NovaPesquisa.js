import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Botao from '../components/Botao';
import DataModal from '../components/DateModal';
import Header from '../components/Header';
import ImgInput from '../components/ImgInput';
import InputText from '../components/InputText';
import app from '../firebase/config';

const NovaPesquisa = props => {
  const [txtNome, setNome] = useState('');
  const [dataSelecionada, setDataSelecionada] = useState(new Date());

  const db = getFirestore(app)
  const pesquisaCollection = collection(db, "pesquisas")

  const cadastrar = () => {
    const docPesquisa = {
      nome: txtNome,
      data: dataSelecionada.toDateString()
    };

    addDoc(pesquisaCollection, docPesquisa).then((docRef) => {
      console.log("Nova pesquisa inserida com sucesso: " + docRef.id);
    }).catch((erro) => {
      console.log("Erro: " + erro);
    });

    props.navigation.navigate('Drawer');
  };

  return (
    <View style={styles.viewBody}>
      <Header texto="Nova Pesquisa"></Header>
      <View style={styles.container}>
        <View>
          <InputText
            texto="Nome"
            value={txtNome}
            onChangeText={setNome}
            keyboardType="default"
          />
          <DataModal
            selectedDate={dataSelecionada}
            onDateSelect={setDataSelecionada}
          />
        </View>
        <View>
          <ImgInput texto="Câmera/Galeria de imagens" />
        </View>
        <View style={styles.container_botoes}>
          <Botao
            texto="CADASTRAR"
            altura={30}
            largura="100%"
            corFundo="#37BD6D"
            tamanhoTexto={20}
            funcao={cadastrar}
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
  cardInput: {
    width: 50,
    aspectRatio: 1
  },
  container_botoes: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: "2%"
  },
});

export default NovaPesquisa;
