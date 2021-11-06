import React, {useContext} from "react";
import {PageProps} from "./mainLayoutProps.types";
import AppProvider from "../../../share/context";
import {PhoneInputScreen} from "../../../screens/auth/PhoneInputScreen";

const MainLayout = (Component: React.FC<PageProps>) => ({authRequire = false, ...props}) => {
    const {accessToken} = useContext(AppProvider.context)

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
