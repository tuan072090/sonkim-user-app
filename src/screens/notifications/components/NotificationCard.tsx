import {Box, HStack, Text, VStack} from 'native-base'
import React from 'react'
import {ImageStatic} from '../../../components'
import {NotificationCardType} from './NotificationType'

const NotificationCard: React.FC<NotificationCardType> = ({item, ...props}) => {
    return (
        <HStack alignItems="flex-start" mt={4} mx={4} borderRadius={12} bgColor="white">
            <ImageStatic flex={1} uri={item.logo} width={8} height={8} my={4} ml={3}/>
            <VStack flex={9} justifyContent="center" py={4} px={3}>
                <HStack position="relative" justifyContent="space-between">
                    <Text pr={4} fontWeight="semibold" fontStyle="normal" fontSize="md" lineHeight="md" mb={3} >{item.title}</Text>
                    {item.unread && <Box position="absolute" width={2} height={2} borderRadius="full" bgColor="#951540" top={2} right={2}/>}
                </HStack>

                <Text fontStyle="normal" fontWeight="normal" fontSize="xs" lineHeight="2xs" letterSpacing="lg"
                      color="gray.400" mb={1}>{item.due}</Text>
                <Text fontStyle="normal" fontWeight="normal"
                      width="full">{item.description}</Text>
            </VStack>
        </HStack>
    )
}

export default NotificationCard

