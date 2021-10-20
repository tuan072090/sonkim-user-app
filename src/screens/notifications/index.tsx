import React, {useContext} from "react";
import {Box} from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import {Translate} from "../../share";
import LanguageProvider from "../../share/context/Language";
import { CheckAllIcon } from "../../components";

const NotificationsScreen = () => {
    const {language} = useContext(LanguageProvider.context)

    return (
        <Box flex={1} >
            <ScreenHeader hasBackButton={true} title={Translate[language].notifications} bgColor="primary.500" rightIcon={<CheckAllIcon size={6} />}/>
        </Box>
    )
}


export default NotificationsScreen
