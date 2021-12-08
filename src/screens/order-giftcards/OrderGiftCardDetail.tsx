import React, {useEffect, useState} from "react";
import {Box, Center, HStack, ScrollView, VStack} from "native-base";
import {Formatter, ScreenSize, SonkimApiService, Translate} from "../../share";
import {useRoute} from "@react-navigation/native";
import {Alert} from "react-native";
import {BarcodeCpn, FullScreenLoader, HTMLContent, MyButton, QrCode, Typo} from "../../components";
import GiftCardPointInfo from "./components/GiftCardPointInfo";
import ScreenHeader from "../../components/organisms/screen-header";
import {useAppSelector} from "../../redux/store";

const QrCodeSize = Math.ceil(ScreenSize.vw * 0.5)
const BarCodeWidth = ScreenSize.vw - 80

export const OrderGiftCardDetail = () => {
    const [order, setOrder] = useState<any | null>(null)
    const [display, setDisplay] = useState<"qrCode" | "barCode">("qrCode")
    const route = useRoute();
    const {params}: any = route;
    const {language} = useAppSelector(state => state.settings)

    useEffect(() => {
        if (params.id) {
            _fetchGiftCard()
        }
    }, [params])

    const _fetchGiftCard = () => {
        SonkimApiService.GetOrderGiftCardDetail(params.id).then(data => {
            setOrder(data)
        }).catch(err => {
            Alert.alert("Lỗi " + err.message)
        })
    }

    if (!order) return <FullScreenLoader/>

    const {id, code, created_at, gift_card, expired_at} = order

    return (
        <Box flex={1} width="100%">
            <ScreenHeader
                hasBackButton={true}
                title={Translate[language].orderGiftCards}
                bgColor="primary.500"
            />
            <ScrollView>
                <Box m={4}>
                    <Box bgColor="white" rounded="xl" py={4} px={3} my={3}>
                        <VStack>
                            <Center>
                                <Typo type="title" textAlign="center" color="primary.500">{gift_card.title}</Typo>
                                <Center my={5} width="100%" height={QrCodeSize + 40} alignItems="center">
                                    {
                                        display === "qrCode"
                                            ? <QrCode code={code} size={QrCodeSize} alignItems="center"/>
                                            : <BarcodeCpn code={code} width={BarCodeWidth} height={BarCodeWidth / 3}/>
                                    }

                                    <Typo mt={5} type="title" letterSpacing={5} textAlign="center">{code}</Typo>
                                </Center>
                            </Center>
                            <HStack space={3} alignItems="center" justifyContent="space-around" my={5} px={3}>
                                <MyButton onPress={() => setDisplay("qrCode")} flex={1}
                                          variant={display === "qrCode" ? "solid" : "outline"}
                                          borderColor="primary.500">
                                    QR code
                                </MyButton>
                                <MyButton onPress={() => setDisplay("barCode")} flex={1}
                                          variant={display === "barCode" ? "solid" : "outline"}
                                          borderColor="primary.500">
                                    Barcode
                                </MyButton>
                            </HStack>
                            <Box bgColor="rgba(240, 240, 240, 0.5)" mx={3} p={4} rounded="lg">
                                <HStack alignItems="center" space={3}>
                                    <Typo flex={1} type="body14" color="gray.500">Thương hiệu:</Typo>
                                    <Typo flex={2} type="subtitle14"
                                          textTransform="uppercase">{gift_card.loyalty_program.name}</Typo>
                                </HStack>
                                <HStack alignItems="center" space={3} mt={2}>
                                    <Typo flex={1} type="body14" color="gray.500">Hạn sử dụng:</Typo>
                                    <Typo flex={2}
                                          type="subtitle14">{Formatter.FormatDateFromDate(new Date(expired_at), "dd/MM/YYY")}</Typo>
                                </HStack>
                                <HStack alignItems="center" space={3} mt={2}>
                                    <Typo flex={1} type="body14" color="gray.500">Trị giá:</Typo>
                                    <Typo flex={2} type="subtitle14">{Formatter.FormatVND(gift_card.cash)}đ</Typo>
                                </HStack>
                            </Box>
                        </VStack>
                    </Box>
                    <Box py={1} px={3}>
                        <Typo type="subtitle16" color="primary.500">Điều khoản áp dụng:</Typo>

                        <HTMLContent>{gift_card.body}</HTMLContent>
                    </Box>
                </Box>
                <Box py={7} px={4}>
                    <GiftCardPointInfo order={order}/>
                </Box>
            </ScrollView>

        </Box>
    )
}
