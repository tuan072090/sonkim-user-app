import {useNavigation} from '@react-navigation/core'
import {Box, Button, HStack, Text, VStack} from 'native-base'
import React from 'react'
import {CheckStoreIcon, HistoryIcon, Image, PressBox, PriceDisplay} from '../../../components'
import {Formatter, ScreenName} from '../../../share'
import {VoucherCardType} from './voucherCard.types'

const VoucherCard: React.FC<VoucherCardType> = ({voucher, ...props}) => {
    const navigation = useNavigation();

    const {id, title, avatar, stores, price, sale_price, point_prices, rules} = voucher

    const dateRule = rules.find(rule => rule.__component === "validate-rules.time-rule")

    const _navigateVoucherDetail = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.VOUCHER_DETAIL, {id: id});
    }

    return (
        <PressBox onPress={_navigateVoucherDetail} bgColor="white" borderRadius={8} shadow={4} width="100%">
            <HStack p={2}>
                <Box borderRadius={6} flex={3}>
                    <Image uri={avatar.url} rounded="lg" width="100%" height={20}/>
                </Box>

                <VStack pl={3} py={1} flex={10}>
                    <Text fontWeight="semibold" fontSize="md">{title}</Text>

                    <Box py={2} width="full">
                        <HStack alignItems="center" mb={1}>
                            <CheckStoreIcon size={4}/>
                            <Text ml={2} fontSize="sm">Áp dụng cho {stores.length} chi nhánh</Text>
                        </HStack>
                        <HStack alignItems="center">
                            <HistoryIcon size={4}/>
                            <Text ml={2}>
                                Hạn sử
                                dụng: {dateRule ? Formatter.FormatDateFromDate(new Date(dateRule.valid_until), "dd/MM/YYY") : "Không có"}
                            </Text>
                        </HStack>
                    </Box>
                </VStack>
            </HStack>
            <Box borderWidth={1} borderColor="#C8C8C8" borderStyle="dashed" width="80" mx="auto"/>
            <HStack justifyContent="space-between" alignItems="center" px={4} my={2}>

                <PriceDisplay price={price} sale_price={sale_price} point_prices={point_prices}/>

                <Button onPress={_navigateVoucherDetail} bgColor="rgba(8,105,129,0.2)" borderRadius={10} width={40}>
                    <Text fontWeight='semibold' fontStyle='normal' fontSize='md' lineHeight='md'
                          color='rgba(8,105,129,1)' textAlign="center" my='auto'>Lấy ưu đãi</Text>
                </Button>
            </HStack>
        </PressBox>
    )
}

export default VoucherCard

