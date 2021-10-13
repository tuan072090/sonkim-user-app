import React from 'react'
import {AuthComponent} from '../../components'

import {LayoutWithBackButton} from "./components/LayoutWithBackButton";

const OtpScreen = () => {
    return (
        <LayoutWithBackButton>
            <AuthComponent display="otp"/>
        </LayoutWithBackButton>
    )
}

export {OtpScreen}
