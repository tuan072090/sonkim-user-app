import React from "react";
import {Box, HStack, Text, useNativeBase, VStack} from "native-base";
import {OrderGiftCardCardTypes} from "./orderGiftCard.types";
import PressBox from "../../atoms/press-box";
import {CheckStoreIcon, HistoryIcon, Image, Typo} from "../../index";
import {Formatter, ScreenName} from "../../../share";
import {useNavigation} from '@react-navigation/core'

const OrderGiftCardCard: React.FC<OrderGiftCardCardTypes> = ({order}) => {
    const {gift_card} = order
    const navigation = useNavigation()

    const _navigateToDetail = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.ORDER_GIFT_CARD_DETAIL_SCREEN, {id: order.id});
    }

    return (
        <PressBox onPress={_navigateToDetail} p={3} bgColor="white" borderRadius={10} flexDirection="row">
            <Box borderRadius={6} flex={3}>
                <Image uri={gift_card.avatar.url} rounded="lg" width="100%" height={20}/>
            </Box>

            <VStack pl={3}  flex={10}>
                <Typo type="subtitle16">{gift_card.title}</Typo>

                <Box width="full">
                    <HStack alignItems="center" mb={1}>
                        <CheckStoreIcon size={4}/>
                        <Text ml={2} fontSize="sm">Áp dụng cho 1 chi nhánh</Text>
                    </HStack>
                    <HStack alignItems="center">
                        <HistoryIcon size={4}/>
                        <Text ml={2}>
                            Hạn sử dụng: {Formatter.FormatDateFromDate(new Date(order.expired_at), "dd/MM/YYY")}
                        </Text>
                    </HStack>
                </Box>
            </VStack>
        </PressBox>
    )
}

export default OrderGiftCardCard
