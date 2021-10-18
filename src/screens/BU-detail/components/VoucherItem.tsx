import { Box, HStack, VStack,Text, Center, Button, Pressable } from 'native-base'
import React from 'react'
import { CheckStoreIcon, HistoryIcon } from '../../../components'
type VoucherItemType={

}

const VoucherItem:React.FC<VoucherItemType> = () => {
    return (
        <VStack bgColor="white" borderRadius={8} shadow={4}>
            <HStack mx={3} my={2}>
                <Box bgColor="primary.500" borderRadius={6} width="20" height="20" my={1} ></Box>
                <VStack ml={3}>
                    <Text fontWeight="semibold" fontStyle="normal" fontSize="md" lineHeight="md" color="darkText" width="64" bgColor="primary.900" >Voucher giảm 20% cho dịch vụ massage vào tháng 10</Text>
                    <Box my={1}>
                        <HStack>
                            <CheckStoreIcon size={4}></CheckStoreIcon>
                            <Text py={1} fontWeight="normal" fontStyle="normal" fontSize="xs" lineHeight="2xs" letterSpacing="lg" color="#626262" textDecoration="underline">Áp dụng cho 5 chi nhánh</Text>
                        </HStack>
                        <HStack>
                            <HistoryIcon size={4}></HistoryIcon>
                            <Text py={1} fontWeight="normal" fontStyle="normal" fontSize="xs" lineHeight="2xs" letterSpacing="lg" color="#626262">Hạn sử dụng: 12/21/2021</Text>
                        </HStack>   
                    </Box>
                </VStack>
            </HStack>
            <Box borderWidth={1} borderColor="#C8C8C8" borderStyle="dashed" width="80" mx="auto"></Box>
            <HStack justifyContent="space-around" alignItems="center" mx={3} my={2}>
                <Text fontWeight="semibold" fontStyle="normal" fontSize="md" lineHeight="md" color="#086981">Miễn phí</Text>
                <Pressable bgColor="rgba(8,105,129,0.2)" borderRadius={10} height={10} width={40} >
                    <Text fontWeight='semibold' fontStyle='normal' fontSize='md' lineHeight='md' color='rgba(8,105,129,1)' textAlign="center" my='auto'>Lấy voucher</Text>
                </Pressable>
            </HStack>
        </VStack>
    )
}

export default VoucherItem

