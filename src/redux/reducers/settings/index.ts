import {createSlice} from "@reduxjs/toolkit";

export type LanguageType = "vi" | "en"

export type SettingsType = {
    language: LanguageType,
    allowNotification: boolean,
    showOnBoarding: boolean
}
const initialState: SettingsType = {
    language: 'vi',
    allowNotification: false,
    showOnBoarding: true
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
        },
        UpdateShowOnBoarding: (state, action) => {
            state.showOnBoarding = action.payload
        }
    }
})

export const {UpdateLanguage, UpdateAllowNotification, UpdateShowOnBoarding} = settingsSlice.actions

export default settingsSlice.reducer;
