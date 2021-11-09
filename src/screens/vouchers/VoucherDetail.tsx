import {Box, Button, Center, HStack, ScrollView, Text, VStack} from 'native-base'
import React, {useEffect, useState} from 'react'
import {Dialog, FullScreenLoader, HTMLContent, Image, ImageStatic, MyButton, PriceDisplay, Typo} from '../../components'
import ScreenHeader from '../../components/organisms/screen-header'
import {Formatter, PromotionType, ScreenName, SonkimApiService, StaticImages} from '../../share'
import {useRoute, useNavigation} from '@react-navigation/native';
import {Alert} from "react-native";

const VoucherDetail = () => {
    const [loading, setLoading] = useState(false)
    const [promotion, setPromotion] = useState<PromotionType|null>(null)
    const [order, setOrder] = useState<any|null>(null)
    const route = useRoute();
    const navigation = useNavigation();
    const {params}: any = route

    useEffect(() => {
       if(params.id){
           SonkimApiService.GetPromotionDetail(params.id).then(data => {
               console.log("promotion detail" ,data)
               setPromotion(data)
           }).catch(err => {
               Alert.alert(err.message)
           })
       }
    }, [params])

    const _buyVoucher = () => {
        if(promotion){
            setLoading(true)
            SonkimApiService.BuyPromotion(promotion.id).then(data => {
                setOrder(data)
                setLoading(false)
            }).catch(err => {
                setLoading(false)

                Alert.alert(err.message)
            })
        }
    }

    const _navToOrderDetail = () => {
        // navigation.navigate(ScreenName)
    }

    if(!promotion) return <FullScreenLoader/>

    const {id, title,description, price, sale_price, point_prices, avatar, loyalty_program, stores, rules} = promotion
    const dateRule = rules.find(rule => rule.__component === "validate-rules.time-rule")

    return (
        <Box flex={1} width="100%">
            <ScreenHeader hasBackButton={true} title={title} bgColor="primary.500"/>
            <ScrollView>

                <Box m={4}>
                    <Box bgColor="white" rounded="xl" py={4} px={3} my={3}>
                        <VStack>
                            <Center>
                                <Typo type="title" textAlign="center" color="primary.500" textTransform="uppercase">{title}</Typo>
                                <Image uri={avatar.url} borderRadius={4} width={56} height={56} my={4}/>
                            </Center>

                            <Box bgColor="rgba(240, 240, 240, 0.5)" p={4} rounded="lg">
                                <HStack alignItems="center">
                                    <Typo flex={1} type="body14" color="gray.600">Hạn sử dụng:</Typo>
                                    <Typo flex={2} type="subtitle14">{
                                        !dateRule ? "Không có"
                                        : Formatter.FormatDateFromDate(new Date(dateRule.valid_until), "dd/MM/YYY")
                                    }</Typo>
                                </HStack>

                                <HStack alignItems="center" mt={2}>
                                    <Typo flex={1} type="body14" color="gray.600">Chi nhánh:</Typo>
                                    <Typo flex={2} type="subtitle14">
                                        Áp dụng cho <Text underline color="red.700">{stores.length} chi nhánh</Text>
                                    </Typo>
                                </HStack>

                                <HStack alignItems="center" mt={2}>
                                    <Typo flex={1} type="body14" color="gray.600">Thương hiệu:</Typo>
                                    <Typo flex={2} type="subtitle14">{loyalty_program.name}</Typo>
                                </HStack>


                            </Box>
                        </VStack>
                    </Box>
                    <Box py={1} mb={20}>
                        <Typo type="subtitle16" color="primary.500">Điều khoản áp dụng:</Typo>

                        <HTMLContent>
                            {description}
                        </HTMLContent>
                    </Box>
                </Box>
            </ScrollView>

            <HStack bgColor="white" pt={3} alignItems="center" justifyContent="space-around" position="absolute"
                    bottom={0} width="100%" safeAreaBottom={true}>

                <PriceDisplay price={price} sale_price={sale_price} point_prices={point_prices}/>

                <MyButton onPress={_buyVoucher} isLoading={loading}>
                    Đổi voucher
                </MyButton>
            </HStack>

            <Dialog
                imgUri={promotion.avatar.url}
                title="Mua voucher thành công"
                messenge="Bấm để xem chi tiết"
                isOpen={!!order}
                onClose={() => {setOrder(null)}}
                footer={(<Box px={4} width="100%"><MyButton onPress={_navToOrderDetail} width="100%">Chi tiết</MyButton></Box>)}
            />
        </Box>
    )
}

export default VoucherDetail

