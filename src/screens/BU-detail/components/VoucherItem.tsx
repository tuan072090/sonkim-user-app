import { useNavigation } from '@react-navigation/core'
import { Box, HStack, VStack,Text, Center, Button, Pressable } from 'native-base'
import React from 'react'
import { CheckStoreIcon, HistoryIcon, ImageStatic } from '../../../components'
import { StaticImages } from '../../../share'
import { FormatVND } from '../../../share/utils/formatter'
type VoucherItemType={
    item: ItemType,
}

type ItemType={
    imageUri: any,
    title:string,
    applied:number,
    due:string,
    status:string,
    point?:number,
    price?:number,
}

const VoucherItem:React.FC<VoucherItemType> = ({item,...props}) => {
    const navigation=useNavigation();

    const statusLabel=item.status==='free'?'Miễn phí':item.status==='point'?`${item.point} điểm`:item.price?`${FormatVND(item.price)}`:null;
    const voucherCTA=item.status==='free'?'Lấy voucher':item.status==='point'?'Đổi voucher':'Mua voucher';

    return (
        <VStack bgColor="white" borderRadius={8} shadow={4} mt={3}>
            <HStack mx={3} my={2}>
                <Box bgColor="primary.500" borderRadius={6} width="20" height="20" my={1} >
                    <ImageStatic uri={item.imageUri} borderRadius={4} width={20} height={20} ></ImageStatic>
                </Box>
                <VStack ml={3}>
                    <Text fontWeight="semibold" fontStyle="normal" fontSize="md" lineHeight="md" color="darkText" width="64" bgColor="primary.900" >{item.title}</Text>
                    <Box my={1}>
                        <HStack>
                            <CheckStoreIcon size={4}></CheckStoreIcon>
                            <Text py={1} fontWeight="normal" fontStyle="normal" fontSize="xs" lineHeight="2xs" letterSpacing="lg" color="#626262" textDecoration="underline">Áp dụng cho {item.applied} chi nhánh</Text>
                        </HStack>
                        <HStack>
                            <HistoryIcon size={4}></HistoryIcon>
                            <Text py={1} fontWeight="normal" fontStyle="normal" fontSize="xs" lineHeight="2xs" letterSpacing="lg" color="#626262">Hạn sử dụng: {item.due}</Text>
                        </HStack>   
                    </Box>
                </VStack>
            </HStack>
            <Box borderWidth={1} borderColor="#C8C8C8" borderStyle="dashed" width="80" mx="auto"></Box>
            <HStack justifyContent="space-around" alignItems="center" mx={3} my={2}>
                <Text fontWeight="semibold" fontStyle="normal" fontSize="md" lineHeight="md" color="#086981">{statusLabel}</Text>
                <Pressable bgColor="rgba(8,105,129,0.2)" borderRadius={10} height={10} width={40} >
                    <Text fontWeight='semibold' fontStyle='normal' fontSize='md' lineHeight='md' color='rgba(8,105,129,1)' textAlign="center" my='auto'>{voucherCTA}</Text>
                </Pressable>
            </HStack>
        </VStack>
    )
}

export default VoucherItem

