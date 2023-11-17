import {doc, setDoc} from 'firebase/firestore';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Botao from '../components/Botao';
import DataModal from '../components/DateModal';
import Header from '../components/Header';
import ImgInput from '../components/ImgInput';
import InputText from '../components/InputText';
import {db, storage} from '../firebase/config';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {uploadBytes, ref, getDownloadURL} from 'firebase/storage';

const NovaPesquisa = props => {
  const [txtNome, setNome] = useState('');
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [urlFoto, setUrlFoto] = useState('');
  const [foto, setFoto] = useState();
  const dispatch = useDispatch();

  const email = useSelector(state => state.login.email);

  const cadastrar = async () => {
    try {
      const nomeImagem = `imagem_${txtNome}.jpeg`;
      const imageRef = ref(storage, nomeImagem);
      const file = await fetch(urlFoto);
      const blob = await file.blob();

      await uploadBytes(imageRef, blob, {contentType: 'image/jpeg'});
      const imageUrl = await getDownloadURL(imageRef);

      await setDoc(doc(db, email, txtNome), {
        id: txtNome,
        name: txtNome,
        data: dataSelecionada.toDateString(),
        foto: imageUrl,
      });

      props.navigation.navigate('Drawer');
    } catch (error) {
      console.error('Error during upload:', error);
    }
  };

  const capturarImagem = () => {
    launchImageLibrary()
      .then(result => {
        setUrlFoto(result.assets[0].uri);
        setFoto(result.assets[0]);
      })
      .catch(error => {
        console.log('Erro ao capturar foto' + error);
      });
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
          <ImgInput texto="Câmera/Galeria de imagens" funcao={capturarImagem} />
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
    backgroundColor: '#372775',
    flex: 1,
  },
  container: {
    flex: 0.7,
    justifyContent: 'center',
    padding: 100,
    backgroundColor: '#372775',
  },
  cardInput: {
    width: 50,
    aspectRatio: 1,
  },
  container_botoes: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '2%',
  },
});

export default NovaPesquisa;
