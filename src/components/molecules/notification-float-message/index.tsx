import React, {useContext, useEffect} from "react";
import AppProvider from "../../../share/context";
import {Box, HStack,CloseIcon} from "native-base";
import Image from "../../atoms/image";
import {Typo} from "../../atoms/typo";
import PressBox from "../../atoms/press-box";


const NotificationFloatMessage = () => {
    const {notificationInApp, dispatch} = useContext(AppProvider.context)

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch({
                type: AppProvider.actions.UPDATE_NOTIFICATION_IN_APP,
                data: null
            })
        }, 3000)

        return () => clearTimeout(timeout)
    }, [notificationInApp])

    if (!notificationInApp) return null

    const _notiPressHandler = () => {
        dispatch({
            type: AppProvider.actions.UPDATE_NOTIFICATION_IN_APP,
            data: null
        })
    }

    const {data, notification} = notificationInApp

    return (
        <Box width="100%" p={3} pt={5} position="absolute" top={0} left={0} zIndex={10}>
            <PressBox position="relative" onPress={_notiPressHandler} width="100%" flexDirection="row" alignItems="center" bgColor="white" p={3} borderRadius={16} shadow={9}>
                <HStack>
                    <Image uri={data.fcm_options.image} width={16} height={16} borderRadius={10} resizeMode="contain"/>

                    <Box ml={3}>
                        <Typo type="subtitle16" numberOfLines={1}>{notification.title}</Typo>
                        <Typo type="body16" mt={1} numberOfLines={2}>{notification.body}</Typo>
                    </Box>
                </HStack>

                <CloseIcon position={"absolute"} top={3} right={3} size={3}/>
            </PressBox>
        </Box>
    )
}

export default NotificationFloatMessage

// const dataSample = {"category": "debug",
//     "data": {
//         "body": "Chương trình thành viên Vera",
//         "fcm_options": {"image": "https://sonkim.s3.ap-southeast-1.amazonaws.com/logo_sonkim_b378a99ac6.jpg"},
//         "icon": "https://sonkim.s3.ap-southeast-1.amazonaws.com/logo_sonkim_b378a99ac6.jpg",
//         "image": "https://sonkim.s3.ap-southeast-1.amazonaws.com/logo_sonkim_b378a99ac6.jpg",
//         "title": "Bạn được tặng 500 điểm"
//     },
//     "messageId": "1636951030807072",
//     "mutableContent": true,
//     "notification": {
//         "body": "Chương trình thành viên Vera",
//         "ios": {"badge": 0, "sound": [Object]},
//         "title": "Bạn được tặng 500 điểm"
//     }
// }
