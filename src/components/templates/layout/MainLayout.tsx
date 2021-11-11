import React, {useContext, useEffect} from "react";
import {PageProps} from "./mainLayoutProps.types";
import AppProvider from "../../../share/context";
import {PhoneInputScreen} from "../../../screens/auth/PhoneInputScreen";
import {SonkimApiService, useLocalStorage} from "../../../share";

const MainLayout = (Component: React.FC<PageProps>) => ({authRequire = false, ...props}) => {
    const {accessToken} = useContext(AppProvider.context)
    const [deviceToken] = useLocalStorage(useLocalStorage.KEY_NOTIFICATION_DEVICE_TOKEN,"")

    useEffect(() => {
        if(accessToken && deviceToken && accessToken.length > 0 && deviceToken.length > 0){
            SonkimApiService.UpdateUserDeviceToken(deviceToken).then(res => {
                //  save success
                console.log("save device token success....", res)
            }).catch(err => {
                console.log("save device token error....", err)
            })
        }
    },[accessToken, deviceToken])

    if (authRequire && (!accessToken || accessToken.length === 0)) {
        return (
            <PhoneInputScreen/>
        )
    }

    return (
        <Component {...props}/>
    )
}

export default MainLayout
