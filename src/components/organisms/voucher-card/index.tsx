import {useNavigation} from '@react-navigation/core'
import {Box, HStack, Pressable, Text, VStack} from 'native-base'
import React from 'react'
import {CheckStoreIcon, HistoryIcon, ImageStatic} from '../../../components'
import { ScreenName } from '../../../share'
import {FormatVND} from '../../../share/utils/formatter'
import {VoucherCardType} from './voucherCard.types'


const VoucherCard: React.FC<VoucherCardType> = ({voucher, ...props}) => {
    const navigation = useNavigation();

    const statusLabel = voucher.status === 'free' ? 'Miễn phí' : voucher.status === 'point' ? `${voucher.point} điểm` : voucher.price ? `${FormatVND(voucher.price)}` : null;
    const voucherCTA = voucher.status === 'free' ? 'Lấy voucher' : voucher.status === 'point' ? 'Đổi voucher' : 'Mua voucher';

    const _navigateVoucherDetail=()=>{
        // @ts-ignore
        navigation.navigate(ScreenName.VOUCHER_DETAIL);
    }

    return (
        <Pressable onPress={_navigateVoucherDetail}>
            <VStack bgColor="white" borderRadius={8} shadow={4} mt={3}>
                <HStack mx={3} my={2}>
                    <Box bgColor="primary.500" borderRadius={6} width="20" height="20" my={1}>
                        <ImageStatic uri={voucher.imageUri} borderRadius={4} width={20} height={20}/>
                    </Box>
                    <VStack ml={3}>
                        <Text fontWeight="semibold" fontStyle="normal" fontSize="md" lineHeight="md" color="darkText"
                            width="64" bgColor="primary.900">{voucher.title}</Text>
                        <Box my={1}>
                            <HStack>
                                <CheckStoreIcon size={4}/>
                                <Text py={1} fontWeight="normal" fontStyle="normal" fontSize="xs" lineHeight="2xs"
                                    letterSpacing="lg" color="#626262" textDecoration="underline">Áp dụng
                                    cho {voucher.applied} chi nhánh</Text>
                            </HStack>
                            <HStack>
                                <HistoryIcon size={4}/>
                                <Text py={1} fontWeight="normal" fontStyle="normal" fontSize="xs" lineHeight="2xs"
                                    letterSpacing="lg" color="#626262">Hạn sử dụng: {voucher.due}</Text>
                            </HStack>
                        </Box>
                    </VStack>
                </HStack>
                <Box borderWidth={1} borderColor="#C8C8C8" borderStyle="dashed" width="80" mx="auto"/>
                <HStack justifyContent="space-around" alignItems="center" mx={3} my={2}>
                    <Text fontWeight="semibold" fontStyle="normal" fontSize="md" lineHeight="md"
                        color="#086981">{statusLabel}</Text>
                    <Pressable bgColor="rgba(8,105,129,0.2)" borderRadius={10} height={10} width={40}>
                        <Text fontWeight='semibold' fontStyle='normal' fontSize='md' lineHeight='md'
                            color='rgba(8,105,129,1)' textAlign="center" my='auto'>{voucherCTA}</Text>
                    </Pressable>
                </HStack>
            </VStack>
        </Pressable>
    )
}

export default VoucherCard

