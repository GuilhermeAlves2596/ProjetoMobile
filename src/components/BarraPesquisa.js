import { Searchbar } from "react-native-paper"
import {StyleSheet} from 'react-native';
import * as React from 'react';

const BarraPesquisa = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      style= {estilos.barraPesquisa}
      placeholder="Insira o termo de busca..."
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
}

const estilos = StyleSheet.create({
    barraPesquisa: {
        backgroundColor: '#f5f5f5'
    }
})

export default BarraPesquisa;