import React, {useContext} from "react";
import {Box} from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import {Translate} from "../../share";
import LanguageProvider from "../../share/context/Language";

const NotificationsScreen = () => {
    const {language} = useContext(LanguageProvider.context)

    return (
        <Box flex={1} >
            <ScreenHeader hasBackButton={true} title={Translate[language].notifications} bgColor="primary.500"/>
        </Box>
    )
}


export default NotificationsScreen
