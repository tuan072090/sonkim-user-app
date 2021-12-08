import {createSlice} from '@reduxjs/toolkit'

export type AuthType = {
    accessToken: string | null,
    refreshToken: string | null
}

const initialState: AuthType = {
    accessToken: null,
    refreshToken: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        UpdateAccessToken: (state, action) => {
            state.accessToken = action.payload
        },
        UpdateRefreshToken: (state, action) => {
            state.refreshToken = action.payload
        },
        Logout: (state) => {
            state.accessToken = null
            state.refreshToken = null
        }
    },
})

export const { UpdateAccessToken, UpdateRefreshToken, Logout } = authSlice.actions

export default authSlice.reducer;
