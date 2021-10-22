import React, {useContext, useEffect, useState} from 'react';
import {extendTheme, NativeBaseProvider} from 'native-base';
import AppNavigation from "./src/screens";
import {Colors, FetchDataService, LocalStorageService} from "./src/share";
import AppProvider from "./src/share/context";
import {Alert, Platform} from "react-native";
import {FullScreenLoader, OnBoarding} from "./src/components";
import LanguageProvider from "./src/share/context/Language";
import SplashScreen from 'react-native-splash-screen'

const configs = {
    colors: Colors
}

const theme = extendTheme(configs);

const App = () => {
    const {setLanguage} = useContext(LanguageProvider.context)
    const [isFirstOpen, setFirstOpen] = useState<boolean | null>(null)

    useEffect(() => {
        LocalStorageService.SynsData().then(res => {
            console.log("sync data.....")

            FetchDataService.RefreshToken()

            setLanguage(LocalStorageService.GetLanguage())
            setFirstOpen(LocalStorageService.GetFirstOpen())

            if(Platform.OS === 'android'){
                SplashScreen.hide()
            }
        }).catch(err => {
            Alert.alert("Có lỗi xảy ra", err.message)
        })
    }, [])

    const _finishOnboarding = () => {
        LocalStorageService.SetFirstOpen("no")
        setFirstOpen(false)
    }

    return (
        <NativeBaseProvider theme={theme}>
            <LanguageProvider>
                {
                    isFirstOpen === null ? <FullScreenLoader/>
                        : isFirstOpen ? <OnBoarding finish={_finishOnboarding}/>
                        : <AppProvider>
                            <AppNavigation/>
                        </AppProvider>
                }
            </LanguageProvider>
        </NativeBaseProvider>
    );
};

export default App;
