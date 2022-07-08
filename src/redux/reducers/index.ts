import authReducer from "./auth"
import messageReducer from "./message"
import notificationReducer from './notification'
import { combineReducers } from 'redux'
import settingsReducer from "./settings";
import loyaltyReducer from './loyalty'

const rootReducer = combineReducers({
    message: messageReducer,
    auth: authReducer,
    notification: notificationReducer,
    settings: settingsReducer,
    loyalty: loyaltyReducer
})

export default rootReducer;
