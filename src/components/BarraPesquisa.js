import { Searchbar } from "react-native-paper"
import {StyleSheet} from 'react-native';
import * as React from 'react';

const BarraPesquisa = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      style= {estilos.barraPesquisa}
      inputStyle={estilos.barraPesquisaInput}
      placeholder="Insira o termo de busca..."
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
}

const estilos = StyleSheet.create({
    barraPesquisaInput: {
      height: 35,
      paddingBottom: 28,
      color: "#8B8B8B"
    },
    barraPesquisa: {
        borderRadius: 0,
        backgroundColor: '#FFFFFF',
        marginTop: '3%',
        marginBottom: '2%',
        height: 30,
        width: 725,
        alignSelf: "center",
    }
})

export default BarraPesquisa;