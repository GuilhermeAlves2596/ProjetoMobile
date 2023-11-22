import { doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import Botao from '../components/Botao';
import DataModal from '../components/DateModal';
import Header from '../components/Header';
import ImgInput from '../components/ImgInput';
import InputText from '../components/InputText';
import MensagemErro from '../components/MensagemErro';
import PopUp from '../components/PopUp';
import { db, storage } from '../firebase/config';

const ModificarPesquisa = props => {
  const dispatch = useDispatch();

  const name = useSelector(state => state.pesquisa.name);
  const email = useSelector(state => state.login.email);
  const id = useSelector(state => state.pesquisa.id);

  const [txtNome, setNome] = useState(name);
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [urlFoto, setUrlFoto] = useState('');

  const [erroMsg, setErroMsg] = useState('');

  const atualizarImagem = async () => {
    setErroMsg(null);
    try {
      const response = await launchImageLibrary({});
      if (response.assets && response.assets.length > 0) {
        const newImage = response.assets[0].uri;

        const nomeImagem = `imagem_${id}.jpeg`;
        const imageRef = ref(storage, nomeImagem);
        const file = await fetch(newImage);
        const blob = await file.blob();

        await uploadBytes(imageRef, blob, {contentType: 'image/jpeg'});
        const imageUrl = await getDownloadURL(imageRef);

        await updateDoc(doc(db, email, id), {
          id: txtNome,
          data: dataSelecionada.toDateString(),
          foto: imageUrl,
        });

        setUrlFoto(imageUrl);
      }
    } catch (error) {
      setErroMsg('Erro ao atualizar a imagem:');
    }
  };
  const modificar = async () => {
    try {
      await updateDoc(doc(db, email, id), {
        name: txtNome,
        data: dataSelecionada.toDateString(),
      });
      props.navigation.navigate('Home');
    } catch (error) {
      setErroMsg('Erro ao modificar a pesquisa');
    }
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
          <DataModal
            selectedDate={dataSelecionada}
            onDateSelect={setDataSelecionada}
          />
        </View>

        <ImgInput funcao={atualizarImagem} imgInput={urlFoto} />
        <MensagemErro erroMsg={erroMsg} visible={erroMsg != null} />
        <View style={styles.container_botoes}>
          <Botao
            texto="SALVAR"
            altura={35}
            largura="100%"
            corFundo="#37BD6D"
            marginB="2%"
            tamanhoTexto={20}
            funcao={modificar}
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
    backgroundColor: '#372775',
    flex: 1,
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
    margin: '1%',
  },
  container_botoes: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1%',
  },
});

export default ModificarPesquisa;
