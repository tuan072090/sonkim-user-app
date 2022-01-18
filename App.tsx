import React, {useEffect, useState} from 'react';
import {extendTheme, NativeBaseProvider} from 'native-base';
import AppNavigation from "./src/screens";
import {Colors, FirebaseService} from "./src/share";
import {FullScreenLoader, OnBoarding} from "./src/components";
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from "react-redux";
import {UpdateShowOnBoarding} from './src/redux/reducers/settings';
import {Platform} from "react-native";
import SplashScreen from 'react-native-splash-screen'

const theme = extendTheme({
    colors: Colors
});

const App = () => {
    const [isPersisted, setIsPersisted] = useState<boolean>(false)
    const [showOnBoarding, setShowOnBoarding] = useState(false)

    useEffect(() => {
        if (isPersisted) {
            //  check notification permission status
            FirebaseService.RequestNotificationPermission()
            setShowOnBoarding(store.getState().settings.showOnBoarding)
            if(Platform.OS === 'android'){
                SplashScreen.hide()
            }
        }

    }, [isPersisted])

    const _persistFinish = () => {
        setIsPersisted(true)
    }

    const _finishOnBoarding = () => {
        setShowOnBoarding(false)
        store.dispatch(UpdateShowOnBoarding(false))
    }

    return (
        <NativeBaseProvider theme={theme}>
            <Provider store={store}>
                <PersistGate loading={<FullScreenLoader unMountCallback={_persistFinish}/>} persistor={persistor}>
                    {
                        showOnBoarding ? <OnBoarding finish={_finishOnBoarding}/>
                            : <AppNavigation/>
                    }
                </PersistGate>
            </Provider>
        </NativeBaseProvider>
    );
};

export default App;
