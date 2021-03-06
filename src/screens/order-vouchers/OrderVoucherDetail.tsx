import React, {useEffect, useState} from "react";
import {Box, Center, HStack, ScrollView, Text, VStack} from "native-base";
import {Formatter, OrderVoucherType, ScreenSize, SonkimApiService, Translate} from "../../share";
import {useRoute} from "@react-navigation/native";
import {Alert} from "react-native";
import {FullScreenLoader, HTMLContent, QrCode, Typo} from "../../components";
import ScreenHeader from "../../components/organisms/screen-header";
import {useAppSelector} from "../../redux/store";

const QrCodeSize = Math.ceil(ScreenSize.vw * 0.5);

export const OrderVoucherDetail = () => {
    const [order, setOrder] = useState<OrderVoucherType | null>(null)
    const route = useRoute();
    const {params}: any = route
    const {language} = useAppSelector(state => state.settings)

    useEffect(() => {
        if (params.id) {
            SonkimApiService.GetOrderPromotionDetail(params.id).then(data => {
                console.log("promotion detail", data)
                setOrder(data)
            }).catch(err => {
                Alert.alert(err.message)
            })
        }
    }, [params])


    if (!order) return <FullScreenLoader/>

    const {id, created_at, code, promotion, point_history, expired_at} = order

    return (
        <Box flex={1} bgColor="white">
            <ScreenHeader
                hasBackButton={true}
                title={Translate('orderVouchers')}
                bgColor="primary.500"
            />
            <ScrollView>
                <Box m={4}>
                    <VStack>
                        <Center>
                            <Typo type="title" textAlign="center" mb={5} color="primary.500"
                                  textTransform="uppercase">{promotion.title}</Typo>

                            <QrCode
                                code={code}
                                size={QrCodeSize}
                                alignItems="center"
                                logoUri={promotion.avatar.url}
                            />

                            <Typo type="title" textAlign="center" mt={5} textTransform="uppercase"
                                  letterSpacing={4}>{code}</Typo>
                        </Center>

                        <Box bgColor="rgba(240, 240, 240, 0.5)" mt={5} p={4} rounded="lg">
                            <HStack alignItems="center">
                                <Typo flex={1} type="body14" color="gray.600">H???n s??? d???ng:</Typo>
                                <Typo flex={2}
                                      type="subtitle14">{Formatter.FormatDateFromDate(new Date(expired_at))}</Typo>
                            </HStack>

                            <HStack alignItems="center" mt={2}>
                                <Typo flex={1} type="body14" color="gray.600">Chi nh??nh:</Typo>
                                <Typo flex={2} type="subtitle14">
                                    ??p d???ng cho <Text underline color="red.700">{promotion.stores.length} chi
                                    nh??nh</Text>
                                </Typo>
                            </HStack>

                            <HStack alignItems="center" mt={2}>
                                <Typo flex={1} type="body14" color="gray.600">Th????ng hi???u:</Typo>
                                <Typo flex={2} type="subtitle14"
                                      textTransform="uppercase">{promotion.loyalty_program.name}</Typo>
                            </HStack>

                        </Box>
                    </VStack>
                    <Box py={1} mt={5} mb={20}>
                        <Typo type="subtitle16" color="primary.500">??i???u kho???n ??p d???ng:</Typo>

                        <HTMLContent>
                            {promotion.description}
                        </HTMLContent>
                    </Box>
                </Box>
            </ScrollView>

        </Box>
    )
}
