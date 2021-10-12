import React, {createContext, Dispatch, useReducer, useState} from "react";
import LocalStorageService from "../services/local-storage";

const UPDATE_LANGUAGE = "UPDATE_LANGUAGE";

export type LanguageType = null | "vi" | "en"

type initialStateType = {
    language: LanguageType;
    setLanguage: (lang: LanguageType) => void
};

const initState: initialStateType = {
    language: null,
    setLanguage: (lang: LanguageType) => {}
};

const languageContext = createContext(initState);
const {Provider} = languageContext;

const LanguageProvider = (props: React.PropsWithChildren<any>) => {
    const language = LocalStorageService.GetLanguage();
    const [lang, setLanguage] = useState(language||"vi");

    return (
        //  @ts-ignore
        <Provider value={{language:lang, setLanguage}}>
            {props.children}
        </Provider>
    );
};

LanguageProvider.context = languageContext
LanguageProvider.actions = {
    UPDATE_LANGUAGE
}

export default LanguageProvider;
