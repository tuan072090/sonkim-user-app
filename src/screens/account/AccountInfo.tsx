import {Box} from 'native-base'
import React from 'react'
import {ImageStatic, MainLayout} from '../../components'
import ScreenHeader from '../../components/organisms/screen-header'
import {StaticImages, Translate} from '../../share'
import AccountInfoForm from './components/AccountInfoForm'
import {useAppSelector} from "../../redux/store";

const AccountInfo: React.FC<any> = MainLayout(() => {
    const {language} = useAppSelector(state => state.settings)

    return (
        <Box flex={1} position="relative" alignItems="center">

            <ImageStatic resizeMode="cover" position="absolute" bottom={0} left={0} width="100%" height="100%"
                         uri={StaticImages.reg_membership_backgroud}/>
            <ScreenHeader hasBackButton={true} title={Translate[language].userInfo} bgColor="transparent"/>

            <AccountInfoForm/>
        </Box>
    )
})


//  add auth require
AccountInfo.defaultProps = {authRequire: true}
export default AccountInfo
