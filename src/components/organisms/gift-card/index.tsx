import {useNavigation} from '@react-navigation/core'
import {Box, HStack, Text, VStack} from 'native-base'
import React from 'react'
import {Image, MyButton, PressBox, Typo, ValueIcon} from '../../../components'
import {Formatter, ScreenName} from '../../../share'
import {FormatVND} from '../../../share/utils/formatter'
import {GiftCardPropsType} from './giftCard.type'

const GiftCard: React.FC<GiftCardPropsType> = ({giftCard, ...props}) => {
    const navigation = useNavigation();
    const {id, title, avatar, cash, price, sale_price, point_prices, stores} = giftCard

    const _navigateGiftCardDetail = () => {
        //@ts-ignore
        navigation.navigate(ScreenName.GIFTCARD_DETAIL, {id: giftCard.id})
    }

    const _renderPrice = () => {

        if (!price && !sale_price && (!point_prices || point_prices.length === 0)) {
            return <Typo type="subtitle16" color="primary.500">Miễn phí</Typo>
        } else {
            if (!sale_price && price) {
                return <Typo type="subtitle16" color="primary.500">{Formatter.FormatVND(price || 0)}đ</Typo>
            } else if (sale_price && price) {
                return (
                    <Box>
                        <Typo type="subtitle16" color="primary.500">{Formatter.FormatVND(sale_price || 0)}đ</Typo>
                        <Typo style={{textDecorationLine: "line-through"}} type="caption"
                              color="gray.500">{Formatter.FormatVND(price || 0)}đ</Typo>
                    </Box>
                )
            } else if (point_prices) {
                const pointPrice = point_prices[0]
                return <Typo type="subtitle16" color="primary.500">{pointPrice.price + " " + pointPrice.unit}</Typo>
            } else {
                return <Typo type="subtitle16" color="primary.500">Miễn phí</Typo>
            }
        }
    }


    return (
        <PressBox onPress={_navigateGiftCardDetail}>
            <VStack bgColor="white" borderRadius={12} shadow={4}>
                <HStack px={3} py={2}>
                    <Box borderRadius={6}>
                        <Image uri={avatar.url} borderRadius={6} width={20} height={20}/>
                    </Box>

                    <VStack pl={3} py={1} flex={1}>
                        <Text fontWeight="semibold" fontStyle="normal" lineHeight="md" fontSize="md">{title}</Text>
                        <Box width="full">
                            <HStack alignItems="center" mt={1}>
                                <ValueIcon size={4}/>
                                <Text ml={2} fontWeight="normal" lineHeight="xs" letterSpacing="lg" fontSize="sm">Trị
                                    giá: {FormatVND(cash)} đ</Text>
                            </HStack>
                        </Box>
                    </VStack>
                </HStack>
                <Box borderWidth={1} borderColor="#C8C8C8" borderStyle="dashed" width="80" mx="auto"/>
                <HStack justifyContent="space-between" alignItems="center" px={4} my={2}>
                    {
                        _renderPrice()
                    }

                    <MyButton bgColor="rgba(8,105,129,0.2)">
                        <Typo type="subtitle14" color='rgba(8,105,129,1)'>Mua thẻ quà tặng</Typo>
                    </MyButton>
                </HStack>
            </VStack>
        </PressBox>
    )
}

export default GiftCard

