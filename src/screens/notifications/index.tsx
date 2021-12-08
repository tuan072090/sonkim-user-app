import React, {useEffect, useState} from "react";
import {Box, FlatList} from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import {NotificationType, SonkimApiService, Translate} from "../../share";
import {CheckAllIcon, MainLayout, Typo} from "../../components";
import NotificationCard from "./components/NotificationCard";
import {ActivityIndicator, Alert} from "react-native";
import {useIsFocused} from "@react-navigation/native";
import {useAppSelector} from "../../redux/store";

const NotificationsScreen: React.FC<any> = MainLayout(() => {
    const {language} = useAppSelector(state => state.settings)
    const [notifications, setNotifications] = useState<NotificationType[] | null>(null)
    const [count, setCount] = useState<number | null>(null)
    const isFocused = useIsFocused()

    useEffect(() => {
        if (isFocused) {
            SonkimApiService.GetNotifications().then(data => {
                setNotifications(data.notifications)
                setCount(data.count)
            }).catch(err => {
                Alert.alert(err.message)
            })
        }
    }, [isFocused])

    //  @ts-ignore
    const _renderItems = ({item}) => {
        return (<NotificationCard item={item}/>)
    }

    return (
        <Box flex={1}>
            <ScreenHeader hasBackButton={true} title={Translate[language].notifications} bgColor="primary.500"
                          rightComponent={<CheckAllIcon size={6}/>}/>
            {
                !notifications ? <Box p={5}><ActivityIndicator/></Box>
                    : <FlatList
                        ListHeaderComponent={<Typo type="subtitle14" p={4}>Có {count !== null ? count : "..."} kết
                            quả</Typo>}
                        data={notifications}
                        renderItem={_renderItems}
                    />
            }
        </Box>
    )
})

NotificationsScreen.defaultProps = {authRequire: true}

export default NotificationsScreen
