import React, {useContext, useEffect, useState} from "react";
import {Box, FlatList} from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import {NotificationType, SonkimApiService, StaticImages, Translate} from "../../share";
import LanguageProvider from "../../share/context/Language";
import {CheckAllIcon, MainLayout} from "../../components";
import NotificationCard from "./components/NotificationCard";
import {ActivityIndicator, Alert} from "react-native";
import {useIsFocused} from "@react-navigation/native";

const NotificationsScreen: React.FC<any> = MainLayout(() => {
    const {language} = useContext(LanguageProvider.context)
    const [notifications, setNotifications] = useState<NotificationType[]|null>(null)
    const isFocused = useIsFocused()

    useEffect(() => {
        if(isFocused){
            SonkimApiService.GetNotifications().then(data => {
                setNotifications(data)
            }).catch(err => {
                Alert.alert(err.message)
            })
        }
    },[isFocused])

    //  @ts-ignore
    const _renderItems = ({ item }) => {
        return (<NotificationCard item={item} />)
    }

    return (
        <Box flex={1}>
            <ScreenHeader hasBackButton={true} title={Translate[language].notifications} bgColor="primary.500"
                          rightComponent={<CheckAllIcon size={6}/>}/>
            {
                !notifications ? <Box p={5}><ActivityIndicator/></Box>
                : <FlatList data={notifications} renderItem={_renderItems}/>
            }
        </Box>
    )
})

NotificationsScreen.defaultProps = {authRequire: true}

export default NotificationsScreen
