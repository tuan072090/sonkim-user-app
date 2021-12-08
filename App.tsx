import React, {useContext, useEffect, useState} from 'react';
import {extendTheme, NativeBaseProvider} from 'native-base';
import AppNavigation from "./src/screens";
import {Colors, FetchDataService, FirebaseService, LocalStorageService} from "./src/share";
import AppProvider from "./src/share/context";
import {Alert, Platform} from "react-native";
import {FullScreenLoader, OnBoarding} from "./src/components";
import LanguageProvider from "./src/share/context/Language";
import SplashScreen from 'react-native-splash-screen'
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from "react-redux";

const theme = extendTheme({
    colors: Colors
});

const App = () => {
    const {setLanguage} = useContext(LanguageProvider.context)
    const [isFirstOpen, setFirstOpen] = useState<boolean | null>(null)

    useEffect(() => {
        LocalStorageService.SynsData().then(async () => {

            await FetchDataService.RefreshToken()

            setLanguage(LocalStorageService.GetLanguage())
            setFirstOpen(LocalStorageService.GetFirstOpen())

            if(Platform.OS === 'android'){
                SplashScreen.hide()
            }

            //  check notification permission status
            FirebaseService.RequestNotificationPermission()
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
            <Provider store={store}>
                <PersistGate loading={<FullScreenLoader/>} persistor={persistor}>
                    <LanguageProvider>
                        {
                            isFirstOpen === null ? <FullScreenLoader/>
                                : isFirstOpen ? <OnBoarding finish={_finishOnboarding}/>
                                : <AppProvider>
                                    <AppNavigation/>
                                </AppProvider>
                        }
                    </LanguageProvider>

                </PersistGate>
            </Provider>

        </NativeBaseProvider>
    );
};

export default App;
