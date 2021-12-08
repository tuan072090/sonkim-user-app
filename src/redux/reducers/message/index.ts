import {createSlice} from '@reduxjs/toolkit'
import MyError from "../../../share/services/error";


export type MessageType = {
    message: string,
    status?: "info" | "success" | "error" | "warning",
    delay?: number
}

type MessageStoreType = {
    message: null | MessageType,
    error: null | MyError
}
const initialState: MessageStoreType = {
    message: null,
    error: null
};

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        UpdateMessage: (state, action) => {
            state.message = action.payload
        },
        UpdateError: (state, action) => {
            state.error = action.payload
        }
    },
})

export const { UpdateMessage, UpdateError } = messageSlice.actions

export default messageSlice.reducer;
