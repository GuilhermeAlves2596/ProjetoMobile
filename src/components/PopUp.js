import { useNavigation } from '@react-navigation/native';
import { deleteDoc, doc } from "firebase/firestore";
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
import { db } from "../firebase/config";
import ButtonIcon from './ButtonIcon';

const PopUp = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const email = useSelector((state) => state.login.email)
  const id = useSelector((state) => state.pesquisa.id)

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const excluir = async () => {
    await deleteDoc(doc(db, email, id))
    console.log("Pesquisa excluida com sucesso: " + id)
    toggleModal();
    navigation.navigate('Drawer');
  };

  const cancelar = () => {
    toggleModal();
  };

  return (
    <View style={estilos.container}>
      <TouchableOpacity onPress={toggleModal}>
        <ButtonIcon icone="trash-o" tamanho={20} texto="Apagar" cor="white" />
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={estilos.modal}>
          <Text style={estilos.text}>Tem certeza de apagar essa pesquisa?</Text>
          <View style={estilos.buttonContainer}>
            <TouchableOpacity
              style={[estilos.button, { backgroundColor: '#FF8383' }]}
              onPress={excluir}
            >
              <Text style={estilos.buttonText}>SIM</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[estilos.button, { backgroundColor: '#3F92C5' }]}
              onPress={cancelar}
            >
              <Text style={estilos.buttonText}>CANCELAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    flex: 0.8,
    position: 'relative',
    left: '25%',
    backgroundColor: '#2B1F5C',
    padding: 20,
    width: 380,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 25,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 22,
    textAlign: 'center'
  }
});

export default PopUp;
