import { createSlice } from '@reduxjs/toolkit';

const inicialValues = {
    id: null,
    name: null,
    data: null,
    pessimo: 0,
    ruim: 0,
    neutro: 0,
    bom: 0,
    excelente: 0,
}

export const pesquisaSlice = createSlice({
    name: 'pesquisa',
    initialState: inicialValues,
    reducers: {
        reducerSetPesquisa: (state, action) => {
            state.name = action.payload.name
            state.data = action.payload.data
        },
        reducerSetId: (state, action) => {
            state.id = action.payload.id
        },
        reducerSetAvaliacoes: (state, action) => {
            state.pessimo = action.payload.pessimo;
            state.ruim = action.payload.ruim;
            state.neutro = action.payload.neutro;
            state.bom = action.payload.bom;
            state.excelente = action.payload.excelente;
        }
    }
})



export const {reducerSetPesquisa, reducerSetId, reducerSetAvaliacoes} = pesquisaSlice.actions

export default pesquisaSlice.reducer