import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { reducerSetAvaliacoes, reducerSetId, reducerSetPesquisa } from '../../redux/pesquisaSlice';
import BarraPesquisa from '../components/BarraPesquisa';
import Botao from '../components/Botao';
import PesquisaCard from '../components/PesquisaCard';
import { db } from '../firebase/config';

const Home = props => {
  const email = useSelector(state => state.login.email);
  const pesquisas = collection(db, email);
  const [listaPesquisas, setListaPesquisas] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(pesquisas);

    const unsubscribe = onSnapshot(q, snapshot => {
      const userPesquisas = [];
      snapshot.forEach(doc => {
        userPesquisas.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setListaPesquisas(userPesquisas);
    });
  }, []);

  const novaPesquisa = () => {
    props.navigation.navigate('Nova Pesquisa');
  };
  const goToAcoesPesquisa = propsCard => {
    const {name, data, id} = propsCard;
    const {pessimo, ruim, neutro, bom, excelente} = propsCard;
    dispatch(reducerSetPesquisa({name: name, data: data}));
    dispatch(reducerSetId({id: id}));
    dispatch(reducerSetAvaliacoes({pessimo: pessimo, ruim: ruim, neutro: neutro, bom: bom, excelente: excelente}))

    props.navigation.navigate('Acoes Pesquisa');
  };
  return (
    <View style={styles.container}>
      <BarraPesquisa style={styles.searchBar}></BarraPesquisa>
      <View style={styles.cards}>
        {listaPesquisas && listaPesquisas.length > 0 && (
          <FlatList
            horizontal={true}
            data={listaPesquisas}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              ...styles.flatlist.content,
              width: `${100 * listaPesquisas.length}%`,
            }}
            renderItem={({item, index}) => (
              <View style={[styles.cardContainer, props.style]}>
                <PesquisaCard
                  name={item.name}
                  data={item.data}
                  urlFoto={item.foto}
                  id={item.id}
                  pessimo={item.pessimo}
                  ruim={item.ruim}
                  neutro={item.neutro}
                  bom={item.bom}
                  excelente={item.excelente}
                  onPress={goToAcoesPesquisa}
                />
              </View>
            )}
          />
        )}

        {/* <FlatList data={listaPesquisas}
                    renderItem={PesquisaCard}
                    keyExtractor={pesq => pesq.id}
                    horizontal={true}
                    contentContainerStyle={{ width: '100%', justifyContent: 'center'}}
                    scrollEnabled={true}
                ></FlatList> */}
        {/* <PesquisaCard texto="secomp2023" textoData="05/06/2022" icone="devices" color="#704141" nome="Secomp2023" onPress={goToAcoesPesquisa}></PesquisaCard>
                <PesquisaCard texto="ubuntu2022" textoData="10/10/2023" icone="group" color="#383838" nome="Ubuntu2022" onPress={goToAcoesPesquisa}></PesquisaCard>
                <PesquisaCard texto="meninas cpu" textoData="01/04/2022" icone="woman" color="red" nome="Meninas CPU" onPress={goToAcoesPesquisa}></PesquisaCard> */}
      </View>
      <View style={styles.container_botoes}>
        <Botao
          texto="Nova pesquisa"
          altura={35}
          largura={725}
          corFundo="#37BD6D"
          tamanhoTexto={20}
          marginB="3%"
          funcao={novaPesquisa}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flex: 0.5,
    padding: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 12.5,
    backgroundColor: '#372775',
  },
  cards: {
    marginBottom: '5%',
    flexDirection: 'row',
  },
  container_botoes: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '5%',
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
  flatlist: {
    content: {
      alignItems: 'center',
      flexGrow: 1,
      padding: 15,
    },
  },
  cardContainer: {
    marginHorizontal: 25,
    marginRight: -80,
  },
});

export default Home;
