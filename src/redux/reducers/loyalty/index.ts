import {createSlice} from '@reduxjs/toolkit'
import FetchDataService from "../../../share/services/fetch";

export type LoyaltyType = {
    skmAccount: any
    gsshopAccount: any
    gs25Account: any
    jardinAccount: any
    wataminAccount: any
}

const initialState: LoyaltyType = {
    skmAccount: null,
    gsshopAccount: null,
    gs25Account: null,
    jardinAccount: null,
    wataminAccount: null
};

export const loyaltySlice = createSlice({
    name: 'loyalty',
    initialState,
    reducers: {
        UpdateSkmAccount: (state, action) => {
            state.skmAccount = action.payload
        },
        UpdateGSShopAccount: (state, action) => {
            state.gsshopAccount = action.payload
        },
        UpdateGS25Account: (state, action) => {
            state.gs25Account = action.payload
        },
        UpdateJardinAccount: (state, action) => {
            state.jardinAccount = action.payload
        },
        UpdateWataminAccount: (state, action) => {
            state.wataminAccount = action.payload
        },
    },
})

export const {UpdateSkmAccount, UpdateGSShopAccount, UpdateGS25Account, UpdateJardinAccount, UpdateWataminAccount} = loyaltySlice.actions

export default loyaltySlice.reducer;
