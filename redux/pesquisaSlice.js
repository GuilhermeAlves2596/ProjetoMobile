import { createSlice } from '@reduxjs/toolkit';

const inicialValues = {
    id: null,
    name: null,
    data: null
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
        }
    }
})



export const {reducerSetPesquisa, reducerSetId} = pesquisaSlice.actions

export default pesquisaSlice.reducer