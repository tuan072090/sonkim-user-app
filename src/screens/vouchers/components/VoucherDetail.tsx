import { Box, Center, Text, VStack } from 'native-base'
import React from 'react'
import { ImageStatic } from '../../../components'
import ScreenHeader from '../../../components/organisms/screen-header'
import { StaticImages } from '../../../share'

const VoucherDetail = () => {
    return (
        <Box flex={1} width="100%">
            <ScreenHeader hasBackButton={true} title="Thẻ khuyến mãi Healthy Spa" bgColor="primary.500"></ScreenHeader>
            <Box m={4}>
                <Box bgColor="white" rounded="xl" py={4} px={3}>
                    <VStack>
                        <Center>
                            <Text color="#095A64" fontWeight="bold" fontStyle="normal" fontSize="md" lineHeight="md" letterSpacing="lg" textTransform="uppercase">Khuyến mãi giảm 20% cho dịch vụ massage vào tháng 10</Text>
                            <ImageStatic uri={StaticImages.voucher1} borderRadius={4} width={56} height={56} my={1}/>
                        </Center>
                        <Box bgColor="#f0f0f0" mx={3} p={4} rounded="md">
                            <VStack justifyContent="center" alignItems="center">
                                <Box>
                                    <Text fontWeight="normal" fontStyle="normal" fontSize="sm" lineHeight="xs" letterSpacing="lg" color="#626262">Hạn sử dụng:</Text>
                                    <Text ml={2} fontWeight="semibold" fontStyle="normal" fontSize="sm" lineHeight="xs" color="#1b1b1b">21/12/2021</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="normal" fontStyle="normal" fontSize="sm" lineHeight="xs" letterSpacing="lg" color="#626262">Chi nhánh:</Text>
                                    <Text ml={2} fontWeight="semibold" fontStyle="normal" fontSize="sm" lineHeight="xs" color="#1b1b1b">Áp dụng cho 10 chi nhánh</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="normal" fontStyle="normal" fontSize="sm" lineHeight="xs" letterSpacing="lg" color="#626262">Thương hiệu:</Text>
                                    <Text ml={2} fontWeight="semibold" fontStyle="normal" fontSize="sm" lineHeight="xs" color="#1b1b1b">HEALTH SPA</Text>
                                </Box>
                            </VStack>
                        </Box>
                    </VStack>
                </Box>
                <Box>
                    <Text color="primary.500" fontWeight="semibold" fontStyle="normal" fontSize="sm" lineHeight="xs">Điều khoản áp dụng</Text>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default VoucherDetail

