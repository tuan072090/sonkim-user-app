import {createSlice} from '@reduxjs/toolkit'
import FetchDataService from "../../../share/services/fetch";

export type AuthType = {
    accessToken: string | null
    refreshToken: string | null
    user: any
}

const initialState: AuthType = {
    accessToken: null,
    refreshToken: null,
    user: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        UpdateAccessToken: (state, action) => {
            state.accessToken = action.payload
            FetchDataService.SetAccessToken(action.payload)
        },
        UpdateRefreshToken: (state, action) => {
            state.refreshToken = action.payload
        },
        UpdateUser: (state, action) => {
            state.user = action.payload
        },
        Logout: (state) => {
            state.accessToken = null
            state.refreshToken = null
            state.user = null
            FetchDataService.SetAccessToken('')
        }
    },
})

export const {UpdateAccessToken, UpdateRefreshToken, UpdateUser, Logout} = authSlice.actions

export default authSlice.reducer;
