import { Box, ScrollView } from 'native-base'
import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ScreenHeader from '../../components/organisms/screen-header'
import { StaticImages } from '../../share'
import GiftCard from './components/GiftCard'
import {Translate} from '../../share'
import LanguageProvider from '../../share/context/Language'
import { ImageStatic } from '../../components'

const giftCardDataSample=[
    {
        avatar: StaticImages.giftCard1,
        title:'Thẻ quà tặng 100.000đ cho mùa sale cuối năm 12.12',
        value: 110000,
        cost: 90000,
        price:70000
    },
    {
        avatar: StaticImages.giftCard2,
        title:'Phiếu quà tặng 150k đợt sale cuối năm',
        value: 150000,
        cost: 50000,
        price:30000
    },
    {
        avatar: StaticImages.giftCard3,
        title:'Quà tặng 20.10',
        value: 10000,
        cost: 10000,
        price:30000
    },
    {
        avatar: StaticImages.giftCard4,
        title:'Thẻ quà tặng 100.000đ cho mùa sale cuối năm Noel',
        value: 110000,
        cost: 90000,
        price:70000
    },
]

const GiftCardPage = () => {
    const {language}=useContext(LanguageProvider.context);
    return (
        <Box flex={1} position="relative" alignItems="center">
            <ImageStatic resizeMode="cover" position="absolute" ></ImageStatic>
            <ScreenHeader hasBackButton={true} title={Translate[language].giftCard} bgColor="primary.500"></ScreenHeader>
            <ScrollView>
                <Box p={4} mt={4}>
                    {
                        giftCardDataSample.map((item,index)=>(
                            <GiftCard giftCard={item} key={index}/>
                        ))
                    }
                </Box>
            </ScrollView>
        </Box>
    )
}

export default GiftCardPage

