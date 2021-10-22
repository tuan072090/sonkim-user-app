import React, {createContext, Dispatch, useReducer} from "react";
import FetchDataService from "../services/fetch";
import LocalStorageService from "../services/local-storage";

const UPDATE_ACCESS_TOKEN = "UPDATE_ACCESS_TOKEN";
const UPDATE_REFRESH_TOKEN = "UPDATE_REFRESH_TOKEN";
const UPDATE_USER_INFO = "UPDATE_USER_INFO";
const LOGOUT = "LOGOUT";

export type ActionType = {
    data: any;
    type: string;
};

type initialStateType = {
    accessToken: string;
    refreshToken: string;
    user?: any,
    dispatch: Dispatch<ActionType>;
};

const initState: initialStateType = {
    accessToken: "",
    refreshToken: "",
    dispatch: (value: any) => {}
};

const appContext = createContext(initState);
const {Provider} = appContext;

const reducer = (state: any, action: ActionType) => {
    let newData = initState;
    const {type, data} = action;

    switch (type) {

        case UPDATE_ACCESS_TOKEN:
            FetchDataService.SetAccessToken(data);
            LocalStorageService.SetAccessToken(data);

            newData = {...state, accessToken: data};
            break;

        case UPDATE_REFRESH_TOKEN:
            LocalStorageService.SetRefreshToken(data)
            newData = {...state, refreshToken: data};
            break;

        case UPDATE_USER_INFO:
            newData = {...state, user: data};
            break;

        case LOGOUT:
            FetchDataService.SetAccessToken("");
            LocalStorageService.SetAccessToken("");
            LocalStorageService.SetRefreshToken("")
            newData = {...state, user: undefined, accessToken: "", refreshToken: ""};
            break;

        default:
            throw new Error("Unexpected action");
    }

    return newData;
};

const AppProvider = (props: React.PropsWithChildren<any>) => {
    const accessToken = LocalStorageService.GetAccessToken();
    const refreshToken = LocalStorageService.GetRefreshToken();

    const initData = {
        ...initState,
        accessToken: accessToken,
        refreshToken: refreshToken,
    };

    const [state, dispatch] = useReducer(reducer, initData);

    return (
        <Provider value={{...state, dispatch}}>
            {props.children}
        </Provider>
    );
};

AppProvider.context = appContext
AppProvider.actions = {
    UPDATE_ACCESS_TOKEN,
    UPDATE_REFRESH_TOKEN,
    UPDATE_USER_INFO,
    LOGOUT,
}

export default AppProvider;
