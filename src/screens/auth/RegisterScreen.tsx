import React from "react";
import {AuthComponent} from "../../components";
import {LayoutWithBackButton} from "./components/LayoutWithBackButton";

export const RegisterScreen = () => {

    return (
        <LayoutWithBackButton>
            <AuthComponent display="register"/>
        </LayoutWithBackButton>
    )
}
