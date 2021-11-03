import { Box, Button, HStack, Text, VStack } from 'native-base'
import React from 'react'

const GiftCardPointInfo = ({...props}) => {
    return (
        <Box p={7}>
            <VStack bgColor="white" borderRadius={12} shadow={4}>
                <HStack justifyContent="space-between" alignItems="center" px={4} my={5}>
                        <VStack>
                            <Text fontWeight="normal" fontStyle="normal" fontSize="xs" lineHeight="2xs" letterSpacing="lg" color="rgba(98, 98, 98, 1)">Đã dùng</Text>
                            <Text fontWeight="semibold" fontStyle="normal" lineHeight="md" fontSize="md" color="rgba(98, 98, 98, 1)">30.000 đ</Text>
                        </VStack>
                        <VStack>
                            <Text fontWeight="normal" fontStyle="normal" fontSize="xs" lineHeight="2xs" letterSpacing="lg" color="rgba(9, 90, 100, 1)">Còn lại</Text>
                            <Text fontWeight="semibold" fontStyle="normal" lineHeight="md" fontSize="md" color="rgba(9, 90, 100, 1)">70.000 đ</Text>
                        </VStack>
                    </HStack>
                <Box borderWidth={1} borderColor="#C8C8C8" borderStyle="dashed" width="80" mx="auto"/>
                <Button bgColor="rgba(8, 105, 129, 0.2)" borderRadius={8} size="lg" m={4}>
                    <Text fontWeight='semibold' fontStyle='normal' fontSize='md' lineHeight='lg'
                            color='rgba(8,105,129,1)' textAlign="center" my='auto'>Nạp điểm</Text>
                </Button>
            </VStack>
        </Box>
    )
}

export default GiftCardPointInfo

