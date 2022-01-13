import React, {useEffect} from "react";
import {Box, CloseIcon, HStack} from "native-base";
import Image from "../../atoms/image";
import {Typo} from "../../atoms/typo";
import PressBox from "../../atoms/press-box";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {UpdateInAppNotification} from "../../../redux/reducers/notification";

const NotificationFloatMessage = () => {
    const {inAppNotification} = useAppSelector(state => state.notification)
    const appDispatch = useAppDispatch()

    useEffect(() => {
        const timeout = setTimeout(() => {
            appDispatch(UpdateInAppNotification(null))
        }, 3000)

        return () => clearTimeout(timeout)
    }, [inAppNotification])


    const _notiPressHandler = () => {
        appDispatch(UpdateInAppNotification(null))
    }

    if (!inAppNotification) return null

    const {data, notification} = inAppNotification

    return (
        <Box width="100%" p={3} pt={5} position="absolute" top={0} left={0} zIndex={10}>
            <PressBox position="relative" onPress={_notiPressHandler} width="100%" flexDirection="row"
                      alignItems="center" bgColor="white" p={3} borderRadius={16} shadow={9}>
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
