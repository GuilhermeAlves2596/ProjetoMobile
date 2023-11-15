import { createSlice } from '@reduxjs/toolkit';

const inicialValues = {
    email: null,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: inicialValues,
    reducers: {
        reducerSetLogin: (state, action) => {
            state.email = action.payload.email
        }
    }
})

export const {reducerSetLogin} = loginSlice.actions

export default loginSlice.reducer