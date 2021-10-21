import React from "react";
import {AuthComponent} from "../../components";
import {AuthLayout} from "./components/Layout";

export const PhoneInputScreen = () => {

    return (
        <AuthLayout>
            <AuthComponent display="phone"/>
        </AuthLayout>
    )
}
