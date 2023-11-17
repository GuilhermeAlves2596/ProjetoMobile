import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {StyleSheet, Text, View} from 'react-native';
import IconMCM from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';

import Separador from './Hr';

const CustomDrawer = props => {
  const email = useSelector(state => state.login.email);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={estilos.drawerContainer}>
      <View>
        <Text style={estilos.titulo}>{email}</Text>
        <Separador></Separador>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Pesquisas"
          labelStyle={estilos.texto}
          onPress={() => {
            props.navigation.closeDrawer();
          }}
          icon={() => (
            <IconMCM
              color="#FFFFFF"
              size={30}
              name="file-document-edit-outline"
            />
          )}
        />
        <DrawerItem
          label="Sair"
          labelStyle={estilos.texto}
          onPress={() => {
            props.navigation.navigate('Login');
          }}
          icon={() => <Icon color="#FFFFFF" size={30} name="exit-to-app" />}
          style={estilos.sair}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const estilos = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  sair: {
    marginTop: '50%',
  },
  titulo: {
    marginTop: '4%',
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
  },
  texto: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFFFFF',
    textAlign: 'left',
    fontSize: 22,
  },
});

export default CustomDrawer;
