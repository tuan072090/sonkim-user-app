import { Box, HStack, VStack,Text } from 'native-base'
import React from 'react'
import { CheckStoreIcon, HistoryIcon } from '../../../components'
type VoucherItemType={

}

const VoucherItem:React.FC<VoucherItemType> = () => {
    return (
        <VStack bgColor="white" borderRadius={6} shadow={4}>
            <HStack mx={3} my={2}>
                <Box bgColor="primary.500" borderRadius={6} width="20" height="20" ></Box>
                <VStack ml={3}>
                    <Text fontWeight="semibold" fontStyle="normal" fontSize="md" lineHeight="md" color="darkText" width="64" bgColor="primary.900" >Voucher giảm 20% cho dịch vụ massage vào tháng 10</Text>
                    <HStack>
                        <CheckStoreIcon size={4}></CheckStoreIcon>
                        <Text fontWeight="normal" fontStyle="normal" fontSize="xs" lineHeight="2xs" letterSpacing="lg" color="#626262" textDecoration="underline">Áp dụng cho 5 chi nhánh</Text>
                    </HStack>
                    <HStack>

                        <HistoryIcon size={4}></HistoryIcon>
                        <Text fontWeight="normal" fontStyle="normal" fontSize="xs" lineHeight="2xs" letterSpacing="lg" color="#626262" textDecoration="underline">Hạn sử dụng: 12/21/2021</Text>
                    </HStack>
                </VStack>
            </HStack>
        </VStack>
    )
}

export default VoucherItem

