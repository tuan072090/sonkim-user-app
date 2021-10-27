import { Box } from 'native-base'
import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ImageStatic } from '../../components'
import ScreenHeader from '../../components/organisms/screen-header'
import { StaticImages, Translate } from '../../share'
import LanguageProvider from '../../share/context/Language'
import AccountInfoForm from './components/AccountInfoForm'
import {MainLayout} from "../../components";

const AccountInfo: React.FC<any> = MainLayout(() => {
    const {language} = useContext(LanguageProvider.context)

    return (
        <Box flex={1} position="relative" alignItems="center">
            <ImageStatic resizeMode="cover" position="absolute" bottom={0} left={0} width="100%" height="100%" uri={StaticImages.reg_membership_backgroud}></ImageStatic>
            <Box flex={1} width="100%">
                <ScreenHeader hasBackButton={true} title={Translate[language].userInfo} bgColor="primary.500"></ScreenHeader>
                <AccountInfoForm></AccountInfoForm>
            </Box>
        </Box>
    )
})


//  add auth require
AccountInfo.defaultProps = {authRequire: true}
export default AccountInfo
