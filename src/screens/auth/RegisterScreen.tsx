import React from "react";
import {AuthComponent} from "../../components";
import {AuthLayout} from "./components/Layout";
import {LayoutWithBackButton} from "./components/LayoutWithBackButton";

export const RegisterScreen = () => {

    return (
        <LayoutWithBackButton>
            <AuthComponent display="register"/>
        </LayoutWithBackButton>
    )
}
