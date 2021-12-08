import {createSlice} from '@reduxjs/toolkit'

export type NotificationType = {
    data: any,
    notification: any,
    messageId: string,
    sentTime: string
}

type NotificationState = {
    foregroundNotification: null | NotificationType,
    backgroundNotification: null | NotificationType,
    inAppNotification: null | NotificationType
}
const initialState: NotificationState = {
    foregroundNotification: null,
    backgroundNotification: null,
    inAppNotification: null
};

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        UpdateForegroundNotification: (state, action) => {
            state.foregroundNotification = action.payload
        },
        UpdateBackgroundNotification: (state, action) => {
            state.backgroundNotification = action.payload
        },
        UpdateInAppNotification: (state, action) => {
            state.inAppNotification = action.payload
        }
    },
})

export const { UpdateForegroundNotification, UpdateBackgroundNotification,UpdateInAppNotification } = notificationSlice.actions

export default notificationSlice.reducer;
