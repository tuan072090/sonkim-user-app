import {useNavigation} from '@react-navigation/core'
import {Box, HStack, Text, VStack} from 'native-base'
import React from 'react'
import {Image, MyButton, PressBox, PriceDisplay, Typo, ValueIcon} from '../../../components'
import {Formatter, ScreenName} from '../../../share'
import {FormatVND} from '../../../share/utils/formatter'
import {GiftCardPropsType} from './giftCard.type'

const GiftCard: React.FC<GiftCardPropsType> = ({giftCard, ...props}) => {
    const navigation = useNavigation();
    const {id, title, avatar, cash, price, sale_price, point_prices, stores} = giftCard

    const _navigateGiftCardDetail = () => {
        //@ts-ignore
        navigation.navigate(ScreenName.GIFT_CARD_DETAIL_SCREEN, {id: giftCard.id})
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

                    <PriceDisplay price={price} sale_price={sale_price} point_prices={point_prices}/>

                    <MyButton bgColor="rgba(8,105,129,0.2)" onPress={_navigateGiftCardDetail}>
                        <Typo type="subtitle14" color='rgba(8,105,129,1)'>Mua thẻ quà tặng</Typo>
                    </MyButton>
                </HStack>
            </VStack>
        </PressBox>
    )
}

export default GiftCard

