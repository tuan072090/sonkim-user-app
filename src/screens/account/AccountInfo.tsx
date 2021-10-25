import { Box } from 'native-base'
import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ScreenHeader from '../../components/organisms/screen-header'
import { Translate } from '../../share'
import LanguageProvider from '../../share/context/Language'
import AccountInfoForm from './components/AccountInfoForm'

const AccountInfo = () => {
    const {language}=useContext(LanguageProvider.context)
    return (
        <Box flex={1} position="relative">
            <ScreenHeader hasBackButton={true} title={Translate[language].userInfo} bgColor="primary.500"></ScreenHeader>
            <AccountInfoForm></AccountInfoForm>
        </Box>
    )
}

export default AccountInfo

const styles = StyleSheet.create({})
