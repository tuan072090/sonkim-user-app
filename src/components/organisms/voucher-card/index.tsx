import {useNavigation} from '@react-navigation/core'
import {Box, Button, HStack, Pressable, Text, VStack} from 'native-base'
import React from 'react'
import {CheckStoreIcon, HistoryIcon, Image} from '../../../components'
import {Formatter, ScreenName} from '../../../share'
import {VoucherCardType} from './voucherCard.types'


const VoucherCard: React.FC<VoucherCardType> = ({voucher, ...props}) => {
    const navigation = useNavigation();

    const {rules} = voucher

    const dateRule = rules.find(rule => rule.__component === "validate-rules.time-rule")

    const _navigateVoucherDetail = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.VOUCHER_DETAIL, {voucherId: voucher.id});
    }

    return (
        <Pressable onPress={_navigateVoucherDetail} _pressed={{opacity: 0.5}}>
            <VStack bgColor="white" borderRadius={8} shadow={4} mt={3}>
                <HStack px={3} py={2}>
                    <Box borderRadius={6} flex={1}>
                        <Image uri={voucher.avatar.url} borderRadius={6} width={20} height={20}/>
                    </Box>

                    <VStack pl={3} py={1} flex={4}>
                        <Text fontWeight="semibold" fontSize="md" >{voucher.title}</Text>

                        <Box py={2} width="full">
                            <HStack alignItems="center" mb={1}>
                                <CheckStoreIcon size={4}/>
                                <Text ml={2} fontSize="sm">Áp dụng cho {voucher.stores.length} chi nhánh</Text>
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
                    <Text fontWeight="semibold" fontStyle="normal" fontSize="md" color="primary.500">Miễn phí</Text>

                    <Button bgColor="rgba(8,105,129,0.2)" borderRadius={10} width={40}>
                        <Text fontWeight='semibold' fontStyle='normal' fontSize='md' lineHeight='md'
                              color='rgba(8,105,129,1)' textAlign="center" my='auto'>Lấy ưu đãi</Text>
                    </Button>
                </HStack>
            </VStack>
        </Pressable>
    )
}

export default VoucherCard

