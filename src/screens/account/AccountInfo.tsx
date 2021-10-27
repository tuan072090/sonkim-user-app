import {Box} from 'native-base'
import React, {useContext} from 'react'
import ScreenHeader from '../../components/organisms/screen-header'
import {Translate} from '../../share'
import LanguageProvider from '../../share/context/Language'
import AccountInfoForm from './components/AccountInfoForm'
import {MainLayout} from "../../components";

const AccountInfo: React.FC<any> = MainLayout(() => {
    const {language} = useContext(LanguageProvider.context)

    return (
        <Box flex={1} position="relative" bgColor="primary.500">
            <ScreenHeader hasBackButton={true} title={Translate[language].userInfo} bgColor="primary.500"/>
            <AccountInfoForm/>
        </Box>
    )
})


//  add auth require
AccountInfo.defaultProps = {authRequire: true}
export default AccountInfo
