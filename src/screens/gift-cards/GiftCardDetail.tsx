import {useNavigation, useRoute} from '@react-navigation/core'
import {Box, Button, Center, HStack, ScrollView, Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react'
import {
    FullScreenLoader,
    HTMLContent,
    Image,
    ImageStatic,
    MyButton,
    PriceDisplay,
    QrCode,
    Typo
} from '../../components';
import ScreenHeader from '../../components/organisms/screen-header';
import {
    BusinessUnitType,
    Formatter,
    GiftCardType,
    PromotionType,
    ScreenSize,
    SonkimApiService,
    StaticImages
} from '../../share';
import GiftCardPointInfo from '../order-giftcard-detail/components/GiftCardPointInfo';
import {Alert} from "react-native";

const GiftCardDetail = ({ ...props}) => {
    const [giftCard, setGiftCard] = useState<GiftCardType|null>(null)
    const [businessUnit, setBusinessUnit] = useState<BusinessUnitType|null>(null)
    const route = useRoute();
    const {params}: any = route

    useEffect(() => {
        if(params.id){
            SonkimApiService.GetGiftCardDetail(params.id).then(data => {

                console.log("gift card detail" ,data)
                setGiftCard(data)
            }).catch(err => {
                Alert.alert(err.message)
            })
        }
    }, [params])

    if(!giftCard) return <FullScreenLoader/>

    const {id, title,body, price, sale_price, point_prices, avatar,cash, loyalty_program, stores} = giftCard

    return (
        <Box flex={1} width="100%">
            <ScreenHeader hasBackButton={true} title={"Thẻ quà tặng"} bgColor="primary.500"/>
            <ScrollView>

                <Box m={4}>
                    <Box bgColor="white" rounded="xl" py={4} px={3} my={3}>
                        <VStack>
                            <Center>
                                <Typo type="title" textAlign="center" color="primary.500" textTransform="uppercase">{title}</Typo>
                                <Image uri={avatar.url} borderRadius={4} width={56} height={56} my={4}/>
                            </Center>

                            <Box bgColor="rgba(240, 240, 240, 0.5)" p={4} rounded="lg">

                                <HStack alignItems="center" mt={2}>
                                    <Typo flex={1} type="body14" color="gray.600">Thương hiệu:</Typo>
                                    <Typo flex={2} type="subtitle14">
                                        {loyalty_program.name}
                                    </Typo>
                                </HStack>

                                <HStack alignItems="center" mt={2}>
                                    <Typo flex={1} type="body14" color="gray.600">Trị giá:</Typo>
                                    <Typo flex={2} type="subtitle14">{Formatter.FormatVND(cash)}đ</Typo>
                                </HStack>


                            </Box>
                        </VStack>
                    </Box>
                    <Box py={1} px={3} mb={20}>
                        <Typo type="subtitle16" color="primary.500">Điều khoản áp dụng:</Typo>

                        <HTMLContent>
                            {body}
                        </HTMLContent>
                    </Box>
                </Box>
            </ScrollView>

            <HStack shadow={9} bgColor="white" pt={3} alignItems="center" justifyContent="space-around" position="absolute"
                    bottom={0} width="100%" safeAreaBottom={true}>

                <PriceDisplay price={price} sale_price={sale_price} point_prices={point_prices}/>

                <MyButton>
                    Mua thẻ quà tặng
                </MyButton>
            </HStack>
        </Box>
    )
}

export default GiftCardDetail

