import React, {createContext, Dispatch, useEffect, useReducer, useState} from "react";
import LocalStorageService from "../services/local-storage";
import {FullScreenLoader} from "../../components";
import {Alert} from "react-native";

const UPDATE_LANGUAGE = "UPDATE_LANGUAGE";

export type LanguageType = "vi" | "en"

type initialStateType = {
    language: LanguageType;
    setLanguage: (lang: LanguageType) => void
};

const initState: initialStateType = {
    language: "vi",
    setLanguage: (lang: LanguageType) => {}
};

const languageContext = createContext(initState);
const {Provider} = languageContext;

const LanguageProvider = (props: React.PropsWithChildren<any>) => {
    const [lang, setLanguage] = useState<null|LanguageType>(null);

    useEffect(() => {
        LocalStorageService.GetData(LocalStorageService.Keys.LANGUAGE_KEY).then(currentLang => {
            // @ts-ignore
            setLanguage(currentLang||"vi")
        }).catch(err => {
            Alert.alert(err.message)
        })
    },[])

    const _updateLanguage = (newLang:LanguageType) => {
        setLanguage(newLang)
        LocalStorageService.SetLanguage(newLang)
    }

    if(!lang){
        return <FullScreenLoader/>
    }

    return (
        <Provider value={{language:lang, setLanguage:_updateLanguage}}>
            {props.children}
        </Provider>
    );
};

LanguageProvider.context = languageContext
LanguageProvider.actions = {
    UPDATE_LANGUAGE
}

export default LanguageProvider;
