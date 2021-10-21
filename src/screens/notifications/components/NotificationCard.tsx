import { Box, HStack, Text, VStack } from 'native-base'
import React from 'react'
import { ImageStatic } from '../../../components'
import { NotificationCardType } from './NotificationType'

const NotificationCard:React.FC<NotificationCardType> = ({item,...props}) => {
    return (
        <HStack alignItems="flex-start" mt={4} mx={4} borderRadius={12} bgColor="white">
            <ImageStatic uri={item.logo} width={8} height={8} my={4} ml={3}></ImageStatic>
            <VStack justifyContent="center" my={4} mx={3}>
                <HStack justifyContent="space-between">
                    <Text fontWeight="semibold" fontStyle="normal" fontSize="md" lineHeight="md" color="#1B1B1B" letterSpacing="lg" mb={3} width={64}>{item.title}</Text>
                    {item.unread && <Box width={2} height={2} borderRadius={48} bgColor="#951540" mr={4} mt={2}></Box>}
                </HStack>
                <Text fontStyle="normal" fontWeight="normal" fontSize="xs" lineHeight="2xs" letterSpacing="lg" color="#C8C8C8" mb={1}>{item.due}</Text>
                <Text fontStyle="normal" fontWeight="normal" lineHeight="xs" color="#626262" letterSpacing="md" width={80}>{item.description}</Text>
            </VStack>
        </HStack> 
    )
}

export default NotificationCard

