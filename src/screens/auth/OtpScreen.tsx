import { Box, StatusBar } from 'native-base'
import React from 'react'
import { AuthComponent, ImageStatic } from '../../components'
import ScreenHeader from '../../components/organisms/screen-header'
import { StaticImages } from '../../share'
import { AuthLayout } from './components/Layout'
import {LayoutWithBackButton} from "./components/LayoutWithBackButton";

const OtpScreen = () => {
    return (
        <LayoutWithBackButton>
            <AuthComponent display="otp"/>
        </LayoutWithBackButton>
    )
}

export {OtpScreen}
