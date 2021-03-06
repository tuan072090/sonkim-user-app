import {Box, HStack, VStack} from 'native-base'
import React from 'react'
import {Image, PressBox, Typo} from '../../../components'
import {NotificationCardType} from './NotificationType'
import {Formatter, SonkimApiService} from "../../../share";

const NotificationCard: React.FC<NotificationCardType> = ({item, ...props}) => {

    const _onPress = () => {
        //  update read
        SonkimApiService.ReadNotification(item.id).then(data => {
            //  update thành công
            console.log("update success", data)
        }).catch(err=>{
            console.log("Update notification error", err)
        })
    }

    return (
        <PressBox onPress={_onPress} flexDirection="row" {...props} alignItems="flex-start" mt={4} mx={4} borderRadius={12} bgColor="white">

            <Image flex={1} uri={item.avatar} width={8} height={8} my={4} ml={3} borderRadius={4}/>

            <VStack flex={9} justifyContent="center" py={4} px={3}>
                <HStack position="relative" justifyContent="space-between">
                    <Typo type="subtitle16" pr={4} mb={2}>{item.title}</Typo>
                    {!item.read &&
                    <Box position="absolute" width={2} height={2} borderRadius="full" bgColor="#951540" top={2}
                         right={2}/>}
                </HStack>

                <Typo type="caption" color="gray.400" mb={1}>
                    {Formatter.FormatDateFromDate(new Date(item.published_at), "dd-MM-yyyy H:m:s")}
                </Typo>

                <Typo type="body14" width="full">{item.body}</Typo>
            </VStack>
        </PressBox>
    )
}

export default NotificationCard

