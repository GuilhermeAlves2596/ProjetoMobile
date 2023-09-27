import React from 'react';
import {View, StyleSheet} from 'react-native';
import Botao from '../components/Botao';
import PesquisaCard from '../components/PesquisaCard';

import BarraPesquisa from '../components/BarraPesquisa';

const Home = props => {
    const novaPesquisa = () => {
        props.navigation.navigate('Nova Pesquisa');
    };

    return (
        <View style={styles.container}>
            <BarraPesquisa style={styles.searchBar} ></BarraPesquisa>
            <View style={styles.cards}>
                <PesquisaCard texto="Teste" icone="calendar"></PesquisaCard>
                <PesquisaCard texto="Teste" icone="calendar"></PesquisaCard>
                <PesquisaCard texto="Teste" icone="calendar"></PesquisaCard>
            </View>
            <View style={styles.container_botoes}>
                <Botao
                    texto="Nova pesquisa"
                    altura={35}
                    corFundo="#37BD6D"
                    tamanhoTexto={20}
                    marginB="5%"
                    funcao={novaPesquisa}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        flex: 0.5,
        padding: 5
    },
    container: {
      flex: 1,  
      justifyContent: 'center',
      padding: 12.5,
      backgroundColor: '#372775',
    },
    cards: {
        marginBottom: '5%',
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    container_botoes: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '5%'
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

  export default Home;