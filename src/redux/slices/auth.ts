import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import MyAxiosinstance from '../../axios'
import { IUser, LoadingStatus } from '../../types'

interface IState {
    user: null | IUser,
    status: LoadingStatus
}

const initialState: IState = {
    user: null,
    status: 'loading'
}

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
    const { data } = await MyAxiosinstance.post('/auth/register', params);
    return data;
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchRegister.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchRegister.fulfilled, (state, action) => {
            state.status = 'loaded';
            state.user = action.payload;
        })
    }
})