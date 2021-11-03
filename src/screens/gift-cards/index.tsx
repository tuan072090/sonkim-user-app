import { Box, ScrollView } from 'native-base'
import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native'
import ScreenHeader from '../../components/organisms/screen-header'
import { SonkimApiService, StaticImages } from '../../share'
import GiftCard from './components/GiftCard'
import {Translate} from '../../share'
import LanguageProvider from '../../share/context/Language'
import { ImageStatic } from '../../components'
import { GiftCardItemType } from './giftCard.type'

const giftCardDataSample=[
    {
        id:1,
        avatar: StaticImages.giftCard1,
        title:'Thẻ quà tặng 100.000đ cho mùa sale cuối năm 12.12',
        value: 110000,
        cost: 90000,
        price:70000
    },
    {
        id:2,
        avatar: StaticImages.giftCard2,
        title:'Phiếu quà tặng 150k đợt sale cuối năm',
        value: 150000,
        cost: 50000,
        price:30000
    },
    {
        id:3,
        avatar: StaticImages.giftCard3,
        title:'Quà tặng 20.10',
        value: 10000,
        cost: 10000,
        price:30000
    },
    {
        id:4,
        avatar: StaticImages.giftCard4,
        title:'Thẻ quà tặng 100.000đ cho mùa sale cuối năm Noel',
        value: 110000,
        cost: 90000,
        price:70000
    },
]

const GiftCardPage = () => {
    const {language}=useContext(LanguageProvider.context);
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
        <Box flex={1} position="relative">
            <ImageStatic resizeMode="cover" position="absolute" width="100%" height="100%" uri={StaticImages.reg_membership_backgroud}></ImageStatic>
            <ScreenHeader hasBackButton={true} title={Translate[language].giftCard} bgColor="transparent"></ScreenHeader>
            <ScrollView>
                <Box p={4} m={4}>
                {
                    !giftCards
                        ? <Box width="full" p={4}><ActivityIndicator color="primary.500"/></Box>
                        : giftCards.map((item, index) => (
                            <GiftCard giftCard={item} key={index}/>
                        ))
                }
                </Box>
            </ScrollView>
        </Box>
    )
}

export default GiftCardPage



