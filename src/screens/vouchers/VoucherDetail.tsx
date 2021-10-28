import {Box, Button, Center, HStack, ScrollView, Text, VStack} from 'native-base'
import React, {useEffect} from 'react'
import {ImageStatic} from '../../components'
import ScreenHeader from '../../components/organisms/screen-header'
import {StaticImages} from '../../share'
import {useRoute} from '@react-navigation/native';
import {Alert} from "react-native";

const VoucherDetail = () => {
    const route = useRoute();
    const {params}: any = route

    useEffect(() => {
        if (typeof params["voucherId"] !== "undefined") {
            Alert.alert("voucher ID: " + params["voucherId"])
        }
    }, [params])

    return (
        <Box flex={1} width="100%">
            <ScreenHeader hasBackButton={true} title="Thẻ khuyến mãi Healthy Spa" bgColor="primary.500"/>
            <ScrollView>

                <Box m={4}>
                    <Box bgColor="white" rounded="xl" py={4} px={3} my={3}>
                        <VStack>
                            <Center>
                                <Text textAlign="center" color="#095A64" fontWeight="bold" fontStyle="normal"
                                      fontSize="md" lineHeight="md" letterSpacing="lg" textTransform="uppercase">Khuyến
                                    mãi giảm 20% cho dịch vụ massage vào tháng 10</Text>
                                <ImageStatic uri={StaticImages.voucher1} borderRadius={4} width={56} height={56}
                                             my={4}/>
                            </Center>
                            <Box bgColor="rgba(240, 240, 240, 0.5)" mx={3} p={4} rounded="lg">
                                <HStack>
                                    <VStack>
                                        <Text fontWeight="normal" fontStyle="normal" fontSize="sm" lineHeight="xs"
                                              letterSpacing="lg" color="#626262">Hạn sử dụng:</Text>
                                        <Text fontWeight="normal" mt={2} fontStyle="normal" fontSize="sm"
                                              lineHeight="xs" letterSpacing="lg" color="#626262">Chi nhánh:</Text>
                                        <Text fontWeight="normal" mt={2} fontStyle="normal" fontSize="sm"
                                              lineHeight="xs" letterSpacing="lg" color="#626262">Thương hiệu:</Text>
                                    </VStack>
                                    <VStack>
                                        <Text ml={2} fontWeight="semibold" fontStyle="normal" fontSize="sm"
                                              lineHeight="xs" color="#1b1b1b">21/12/2021</Text>
                                        <Text ml={2} fontWeight="semibold" mt={1} fontStyle="normal" fontSize="sm"
                                              lineHeight="xs" color="#1b1b1b">
                                            Áp dụng cho <Text underline color="red.700">10 chi nhánh</Text>
                                        </Text>
                                        <Text ml={2} fontWeight="semibold" mt={2} fontStyle="normal" fontSize="sm"
                                              lineHeight="xs" color="#1b1b1b">HEALTH SPA</Text>
                                    </VStack>
                                </HStack>
                            </Box>
                        </VStack>
                    </Box>
                    <Box py={1} px={3} mb={20}>
                        <Text color="primary.500" fontWeight="bold" fontStyle="normal" fontSize="sm" lineHeight="xs"
                              letterSpacing="lg">Điều khoản áp dụng:</Text>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.</Text>
                        <HStack alignItems="center" justifyContent="space-around" my={4}>
                            <ImageStatic uri={StaticImages.voucher_detail1} rounded="md" width={24}
                                         height={24}/>
                            <ImageStatic uri={StaticImages.voucher_detail2} rounded="md" width={24}
                                         height={24}/>
                            <ImageStatic uri={StaticImages.voucher_detail3} rounded="md" width={24}
                                         height={24}/>
                        </HStack>
                    </Box>
                </Box>
            </ScrollView>
            <HStack bgColor="white" height={20} alignItems="center" justifyContent="space-around" position="absolute"
                    bottom={0} width="100%">
                <Text color="primary.500" fontWeight="semibold" fontStyle="normal" fontSize="md" lineHeight="lg">Miễn
                    phí</Text>
                <Button bgColor="primary.500" rounded="xl" size="lg" color="white" px={4}>
                    Đổi voucher
                </Button>
            </HStack>
        </Box>
    )
}

export default VoucherDetail

