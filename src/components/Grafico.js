import { StyleSheet, View} from 'react-native'
import React from 'react';
import { PieChart } from 'react-native-svg-charts'
import {useSelector} from 'react-redux';

const PieChartWithDifferentArcs = () => {
    
    const pessimo = useSelector(state => state.pesquisa.pessimo);
    const ruim = useSelector(state => state.pesquisa.ruim);
    const neutro = useSelector(state => state.pesquisa.neutro);
    const bom = useSelector(state => state.pesquisa.bom);
    const excelente = useSelector(state => state.pesquisa.excelente);
    
    const data = [
        {
            key: 1,
            value: pessimo,
            svg: { fill: '#53D8D8' },
        },
        {
            key: 2,
            value: ruim,
            svg: { fill: '#EA7288' }
        },
        {
            key: 3,
            value: neutro,
            svg: { fill: '#5FCDA4' }
        },
        {
            key: 4,
            value: bom,
            svg: { fill: '#6994FE' }
        },
        {
            key: 5,
            value: excelente,
            svg: { fill: '#F1CE7E' }
        }
    ]

    let filteredData = data.filter((dados) => dados.value > 0);
    console.log(filteredData);

    if (filteredData.length < 1) {
        filteredData.push({
            key: 1,
            value: 1,
            svg: {fill: "#808080"}
        })
    }

    return (
        <PieChart
            style={estilos.imageGrafico}    
            outerRadius={'70%'}
            innerRadius={2}
            data={filteredData}
            animate={true}
            animationDuration={3000}
        />
    );
}

const estilos = StyleSheet.create({
    imageGrafico:{
        marginLeft: "-15%",
        height: 270,
        width: 270
    }
})

export default PieChartWithDifferentArcs