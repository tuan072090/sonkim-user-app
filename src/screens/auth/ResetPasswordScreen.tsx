import React from "react";
import {AuthComponent} from "../../components";
import {AuthLayout} from "./components/Layout";

export const ResetPasswordScreen = () => {

    return (
        <AuthLayout>
            <AuthComponent display="resetPassword"/>
        </AuthLayout>
    )
}
