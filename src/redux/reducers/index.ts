import authReducer from "./auth"
import messageReducer from "./message"
import notificationReducer from './notification'
import { combineReducers } from 'redux'
import settingsReducer from "./settings";

const rootReducer = combineReducers({
    message: messageReducer,
    auth: authReducer,
    notification: notificationReducer,
    settings: settingsReducer
})

export default rootReducer;
