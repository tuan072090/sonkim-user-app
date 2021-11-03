import { Box, Button, HStack, StatusBar, Text } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native';
import { SonkimApiService } from '../../../share';
import { GiftCardItemType } from '../giftCard.type';
import GiftCardList from './GiftCardList'

const GiftCardBottom = () => {
    const [giftCards,setGiftCards]=useState<GiftCardItemType[]|null>(null);
    useEffect(()=>{
        _fetchGiftCards();
    },[])
    const _fetchGiftCards=async ()=> {
        try {
            const {count,gift_cards}=await SonkimApiService.GetGiftCards();
            setGiftCards(gift_cards);
        } catch (err:any) {
            Alert.alert(err.message)
        }
    }
    return (
        <Box flex={1}>
            <StatusBar></StatusBar>
            <Box bgColor="#095A64" borderBottomLeftRadius={10} borderBottomRightRadius={10} py={3}>
                <HStack alignItems="center" justifyContent="space-around" >
                    <Button bgColor="rgba(255,255,255,0.3)" borderRadius={10} width={40}>
                        <Text fontWeight='semibold' fontStyle='normal' fontSize='md' lineHeight='md'
                                color='rgba(255, 255, 255,0.7)' textAlign="center" my='auto'>Voucher</Text>
                    </Button>
                    <Button bgColor="rgba(255,255,255,0.3)" borderRadius={10} width={40} borderStyle="solid" borderColor="#ffffff">
                        <Text fontWeight='semibold' fontStyle='normal' fontSize='md' lineHeight='md'
                                color='rgba(255, 255, 255,1)' textAlign="center" my='auto'>Giftcard</Text>
                    </Button>
                </HStack>
                {/* Tab components */}  
            </Box>
                <GiftCardList giftCards={giftCards} fromBottom={true}></GiftCardList>

        </Box>
    )
}

export default GiftCardBottom

