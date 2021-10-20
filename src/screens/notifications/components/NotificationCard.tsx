import { Box, HStack, Text, VStack } from 'native-base'
import React from 'react'
import { ImageStatic } from '../../../components'
import { StaticImages } from '../../../share'
type NotificationCardType={

}

const NotificationCard:React.FC<NotificationCardType> = () => {
    return (
        <HStack alignItems="flex-start" m={4} mb={2} borderRadius={8} bgColor="white">
            <ImageStatic uri={StaticImages.lazada} width={8} height={8} my={4} ml={3}></ImageStatic>
            <VStack justifyContent="center" my={4} mx={3}>
                <HStack justifyContent="space-between">
                    <Text fontWeight="semibold" fontStyle="normal" fontSize="md" lineHeight="md" color="#1B1B1B" letterSpacing="lg" mb={3}>Đăng ký thành công thẻ Lazada</Text>
                    <Box width={2} height={2} borderRadius={48} bgColor="#951540" mr={4} mt={2}></Box>
                </HStack>
                <Text fontStyle="normal" fontWeight="normal" fontSize="xs" lineHeight="2xs" letterSpacing="lg" color="#C8C8C8" mb={1}>12/12/2021 - 12:00</Text>
                <Text fontStyle="normal" fontWeight="normal" lineHeight="xs" color="#626262" letterSpacing="md" width={80}>Chúc mừng bạn đã đăng ký thành công thẻ thành viên của Lazada</Text>
            </VStack>
        </HStack> 

    )
}

export default NotificationCard

