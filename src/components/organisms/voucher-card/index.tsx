import {useNavigation} from '@react-navigation/core'
import {Box, Button, HStack, Text,VStack} from 'native-base'
import React from 'react'
import {CheckStoreIcon, HistoryIcon, Image, PressBox, Typo} from '../../../components'
import {Formatter, PromotionType, ScreenName} from '../../../share'
import {VoucherCardType} from './voucherCard.types'

const VoucherCard: React.FC<VoucherCardType> = ({voucher, ...props}) => {
    const navigation = useNavigation();

    const {id, title,avatar,stores, price, sale_price,rules} = voucher

    const dateRule = rules.find(rule => rule.__component === "validate-rules.time-rule")

    const _navigateVoucherDetail = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.VOUCHER_DETAIL, {id: id});
    }

    const _renderPrice = () => {
        const {id, title,avatar,stores, price, sale_price, point_prices, rules} = voucher

        if(!price && !sale_price && (!point_prices || point_prices.length === 0)){
            return <Typo type="subtitle16" color="primary.500">Miễn phí</Typo>
        } else {
            if(!sale_price && price){
                return <Typo type="subtitle16" color="primary.500">{Formatter.FormatVND(price||0)}đ</Typo>
            } else if(sale_price && price) {
                return (
                    <Box>
                        <Typo type="subtitle16" color="primary.500">{Formatter.FormatVND(sale_price||0)}đ</Typo>
                        <Typo style={{textDecorationLine: "line-through"}} type="caption" color="gray.500">{Formatter.FormatVND(price||0)}đ</Typo>
                    </Box>
                )
            } else if(point_prices) {
                const pointPrice = point_prices[0]
                return <Typo type="subtitle16" color="primary.500">{pointPrice.price+" "+pointPrice.unit}</Typo>
            }else {
                return <Typo type="subtitle16" color="primary.500">Miễn phí</Typo>
            }
        }
    }

    return (
        <PressBox onPress={_navigateVoucherDetail} bgColor="white" borderRadius={8} shadow={4} width="100%">
            <HStack p={2}>
                <Box borderRadius={6} flex={3}>
                    <Image uri={avatar.url} rounded="lg" width="100%" height={20}/>
                </Box>

                <VStack pl={3} py={1} flex={10}>
                    <Text fontWeight="semibold" fontSize="md" >{title}</Text>

                    <Box py={2} width="full">
                        <HStack alignItems="center" mb={1}>
                            <CheckStoreIcon size={4}/>
                            <Text ml={2} fontSize="sm">Áp dụng cho {stores.length} chi nhánh</Text>
                        </HStack>
                        <HStack alignItems="center">
                            <HistoryIcon size={4}/>
                            <Text ml={2}>
                                Hạn sử dụng: {dateRule ? Formatter.FormatDateFromDate(new Date(dateRule.valid_until), "dd/MM/YYY") : "Không có"}
                            </Text>
                        </HStack>
                    </Box>
                </VStack>
            </HStack>
            <Box borderWidth={1} borderColor="#C8C8C8" borderStyle="dashed" width="80" mx="auto"/>
            <HStack justifyContent="space-between" alignItems="center" px={4} my={2}>
                {
                    _renderPrice()
                }

                <Button onPress={_navigateVoucherDetail} bgColor="rgba(8,105,129,0.2)" borderRadius={10} width={40}>
                    <Text fontWeight='semibold' fontStyle='normal' fontSize='md' lineHeight='md'
                          color='rgba(8,105,129,1)' textAlign="center" my='auto'>Lấy ưu đãi</Text>
                </Button>
            </HStack>
        </PressBox>
    )
}

export default VoucherCard

