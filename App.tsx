import React, {useEffect, useState} from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import AppNavigation from "./src/screens";
import {Colors} from "./src/share";
import AppProvider from "./src/share/context";
import {LocalStorageService} from "./src/share";
import {Alert} from "react-native";
import {FullScreenLoader, OnBoarding} from "./src/components";

const configs = {
    colors: Colors
}

const theme = extendTheme(configs);

const App = () => {
    const [isFirstOpen, setFirstOpen] = useState<boolean|null>(null)

    useEffect(() => {
        LocalStorageService.GetData("firstOpen").then(res => {
            if(res === null){
                setFirstOpen(true)
            }else {
                setFirstOpen(false)
            }
        }).catch(err => {
            Alert.alert("Có lỗi xảy ra", err.message)
        })
    },[])

    const _finishOnboarding = () => {
        LocalStorageService.StoreData("firstOpen", "yes")
        setFirstOpen(false)
    }

    return (
        <NativeBaseProvider theme={theme}>
            {
                isFirstOpen === null ? <FullScreenLoader/>
                    : isFirstOpen ? <OnBoarding finish={_finishOnboarding}/>
                    : <AppProvider>
                        <AppNavigation/>
                    </AppProvider>
            }
        </NativeBaseProvider>
    );
};

export default App;
