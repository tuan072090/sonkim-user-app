import {useRoute} from '@react-navigation/core'
import {Box, Center, HStack, ScrollView, VStack} from 'native-base';
import React, {useEffect, useState} from 'react'
import {Dialog, FullScreenLoader, HTMLContent, Image, MyButton, PriceDisplay, Typo} from '../../components';
import ScreenHeader from '../../components/organisms/screen-header';
import {BusinessUnitType, Formatter, GiftCardType, ScreenName, SonkimApiService} from '../../share';
import {Alert} from "react-native";

// @ts-ignore
const GiftCardDetail = ({navigation}) => {
    const [giftCard, setGiftCard] = useState<GiftCardType | null>(null)
    const [loading, setLoading] = useState(false)
    const [order, setOrder] = useState<any|null>(null)
    const route = useRoute();
    const {params}: any = route

    useEffect(() => {
        if (params.id) {
            SonkimApiService.GetGiftCardDetail(params.id).then(data => {
                console.log("gift card detail", data.id)
                setGiftCard(data)
            }).catch(err => {
                Alert.alert(err.message)
            })
        }
    }, [params])

    const _buyGiftcard = () => {
        if(giftCard){
            setLoading(true)
            SonkimApiService.BuyGiftCard(giftCard.id).then(data => {
                setOrder(data)
                setLoading(false)
            }).catch(err => {
                setLoading(false)

                Alert.alert(err.message)
            })
        }
    }

    const _navToOrderDetail = () => {
        //  @ts-ignore
        if(order) navigation.navigate(ScreenName.ORDER_GIFT_CARD_DETAIL_SCREEN, {id: order.id})
    }

    if (!giftCard) return <FullScreenLoader/>

    const {id, title, body, price, sale_price, point_prices, avatar, cash, loyalty_program, stores} = giftCard

    return (
        <Box flex={1} width="100%">
            <ScreenHeader hasBackButton={true} title={"Thẻ quà tặng"} bgColor="primary.500"/>
            <ScrollView>

                <Box m={4}>
                    <Box bgColor="white" rounded="xl" py={4} px={3} my={3}>
                        <VStack>
                            <Center>
                                <Typo type="title" textAlign="center" color="primary.500"
                                      textTransform="uppercase">{title}</Typo>
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

            <HStack shadow={9} bgColor="white" pt={3} alignItems="center" justifyContent="space-around"
                    position="absolute"
                    bottom={0} width="100%" safeAreaBottom={true}>

                <PriceDisplay price={price} sale_price={sale_price} point_prices={point_prices}/>

                <MyButton onPress={_buyGiftcard} isLoading={loading}>
                    Mua thẻ quà tặng
                </MyButton>
            </HStack>

            <Dialog
                imgUri={giftCard.avatar.url}
                title="Mua thẻ quà tặng thành công"
                messenge="Bấm để xem chi tiết"
                isOpen={!!order}
                onClose={() => {setOrder(null)}}
                footer={(<Box px={4} width="100%"><MyButton onPress={_navToOrderDetail} width="100%">Chi tiết</MyButton></Box>)}
            />
        </Box>
    )
}

export default GiftCardDetail

