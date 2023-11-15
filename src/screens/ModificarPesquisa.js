import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Botao from '../components/Botao';
import DataModal from '../components/DateModal';
import Header from '../components/Header';
import ImgInput from '../components/ImgInput';
import InputText from '../components/InputText';
import PopUp from '../components/PopUp';
import { db } from "../firebase/config";

const ModificarPesquisa = props => {

  const dispatch = useDispatch();
  
  const name = useSelector((state) => state.pesquisa.name)
  const email = useSelector((state) => state.login.email)
  const id = useSelector((state) => state.pesquisa.id)

  const [txtNome, setNome] = useState(name);
  const [dataSelecionada, setDataSelecionada] = useState(new Date());

  const modificar = async ()  => {
    
    await updateDoc(doc(db, email, id), {
      name: txtNome,
      data: dataSelecionada.toDateString()
    });
    
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
          <DataModal
            selectedDate={dataSelecionada}
            onDateSelect={setDataSelecionada}
          />
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
