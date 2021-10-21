import React from "react";
import {AuthComponent} from "../../components";
import {AuthLayout} from "./components/Layout";

export const LoginScreen = () => {

    return (
        <AuthLayout>
            <AuthComponent display="login"/>
        </AuthLayout>
    )
}
