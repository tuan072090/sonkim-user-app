import { Box, HStack, VStack,Text } from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'
type VoucherItemType={

}

const VoucherItem:React.FC<VoucherItemType> = () => {
    return (
        <VStack>
            <HStack alignItems="center">
                <Box bgColor="primary" rounded="lg" width="20" height="20"></Box>
                <VStack>
                    <Text fontWeight="semibold" fontStyle="normal" fontSize="md" lineHeight="md" color="darkText">Voucher giảm 20% cho dịch vụ massage vào tháng 10</Text>
                </VStack>
            </HStack>
        </VStack>
    )
}

export default VoucherItem

const styles = StyleSheet.create({})
