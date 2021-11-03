import { useRoute } from '@react-navigation/core'
import { Box, Button, Center, HStack, ScrollView, Text, VStack } from 'native-base';
import React, { useEffect } from 'react'
import { Alert } from 'react-native'
import { ImageStatic, QrCode } from '../../components';
import ScreenHeader from '../../components/organisms/screen-header';
import { ScreenSize, StaticImages } from '../../share';
import { FormatVND } from '../../share/utils/formatter';
import GiftCardPointInfo from './components/GiftCardPointInfo';

const qrWWidth = ScreenSize.vw - 72;
const GiftCardDetail = ({fromBottom=true,...props}) => {
    const route=useRoute();
    const {params}:any=route;

    // useEffect(()=>{
    //     if (params){
    //         Alert.alert("giftCardId:"+ params["giftCardId"]);
    //     }
    // },[params])

    return (
        <Box flex={1} width="100%">
            <ScreenHeader hasBackButton={true} title="Thẻ quà tặng Healthy Spa" bgColor="primary.500"/>
            <ScrollView>
                <Box m={4}>
                    <Box bgColor="white" rounded="xl" py={4} px={3} my={3}>
                        <VStack>
                            <Center>
                                <Text textAlign="center" color="#095A64" fontWeight="bold" fontStyle="normal" 
                                      fontSize="md" lineHeight="md" letterSpacing="lg" textTransform="uppercase">Thẻ quà tặng 100.000đ cho mùa sale cuối năm 12.12</Text>
                                {fromBottom?<Box>
                                    <QrCode
                        code={"Something"}
                        size={qrWWidth}
                        alignItems="center"
                        logoUri="https://sonkim.s3.ap-southeast-1.amazonaws.com/lazada_d75ab18c1c.png?61505.40000000037"
                    />
                            <Text fontWeight="semibold" fontStyle="normal" fontSize="md" lineHeight="xs" textAlign="center">GIFTCODE123456789</Text>
                                </Box>
                   
                    :<ImageStatic uri={StaticImages.giftCard1} borderRadius={4} width={56} height={56}
                                             my={4}/> }
                            </Center>
                            {fromBottom?<HStack alignItems="center" justifyContent="space-around" my={5}>
                                            <Button bgColor="rgba(255, 255, 255, 1)" borderRadius={10} width={40} border={1} borderStyle="solid" borderColor="rgba(98, 98, 98, 1)">
                                                <Text fontWeight='semibold' fontStyle='normal' fontSize='sm' lineHeight='xs'
                                                        color='rgba(255, 255, 255,0.7)' textAlign="center" my='auto' letterSpacing="xl">Barcode</Text>
                                            </Button>
                                            <Button bgColor="rgba(255, 255, 255, 1)" borderRadius={10} width={40} border={1} borderStyle="solid" borderColor="rgba(98, 98, 98, 1)">
                                                <Text fontWeight='semibold' fontStyle='normal' fontSize='sm' lineHeight='xs'
                                                        color='rgba(255, 255, 255,1)' textAlign="center" my='auto' letterSpacing="xl">QR code</Text>
                                            </Button>
                                        </HStack>:null}
                            <Box bgColor="rgba(240, 240, 240, 0.5)" mx={3} p={4} rounded="lg">
                                <HStack>
                                    <VStack>
                                        <Text fontWeight="normal" fontStyle="normal" fontSize="sm" lineHeight="xs"
                                              letterSpacing="lg" color="#626262">Thương hiệu:</Text>
                                        <Text fontWeight="normal" mt={2} fontStyle="normal" fontSize="sm"
                                              lineHeight="xs" letterSpacing="lg" color="#626262">Trị giá:</Text>
                                    </VStack>
                                    <VStack>
                                        <Text ml={2} fontWeight="semibold" fontStyle="normal" fontSize="sm"
                                              lineHeight="xs" color="#1b1b1b">HEALTH SPA</Text>
                                        <Text ml={2} fontWeight="semibold" mt={2} fontStyle="normal" fontSize="sm"
                                              lineHeight="xs" color="primary.500">
                                            100.000 đ
                                        </Text>
                                    </VStack>
                                </HStack>
                            </Box>
                        </VStack>
                    </Box>
                    <Box py={1} px={3} mb={20}>
                        <Text color="primary.500" fontWeight="bold" fontStyle="normal" fontSize="sm" lineHeight="xs"
                              letterSpacing="lg">Điều khoản áp dụng:</Text>
                        <Text>Lorem Ipsum is simply dummy text of  the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. </Text>
                    </Box>
                </Box>
            </ScrollView>
            {
                fromBottom?<GiftCardPointInfo/>:<HStack bgColor="white" py={3} alignItems="center" justifyContent="space-around" position="absolute"
                bottom={0} width="100%">
            <VStack>
                <Text color="primary.500" fontWeight="semibold" fontStyle="normal" fontSize="md" lineHeight="lg">70.000 đ</Text>
                <Text fontWeight="normal" fontStyle="normal" fontSize="sm" color="#C8C8C8" textDecorationLine="line-through">90.000 đ</Text>
            </VStack>
            <Button bgColor="primary.500" rounded="xl" size="lg" color="white" px={4}>
                Mua thẻ quà tặng
            </Button>
        </HStack>
            }
            
        </Box>
    )
}

export default GiftCardDetail

