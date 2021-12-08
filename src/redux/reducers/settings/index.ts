import {createSlice} from "@reduxjs/toolkit";

export type LanguageType = "vi" | "en"

export type SettingsType = {
    language: LanguageType,
    allowNotification: boolean
}
const initialState: SettingsType = {
    language: 'vi',
    allowNotification: false
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        UpdateLanguage: (state, action) => {
            state.language = action.payload
        },
        UpdateAllowNotification: (state, action) => {
            state.allowNotification = action.payload
        }
    }
})

export const {UpdateLanguage, UpdateAllowNotification} = settingsSlice.actions

export default settingsSlice.reducer;
