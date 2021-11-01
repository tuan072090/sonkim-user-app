import { Box, ScrollView } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StaticImages } from '../../share'
import GiftCard from './components/GiftCard'

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
    return (
        <ScrollView>
            <Box p={4} mt={4}>
                {
                    giftCardDataSample.map((item,index)=>(
                        <GiftCard giftCard={item} key={index}/>
                    ))
                }
            </Box>
        </ScrollView>
    )
}

export default GiftCardPage

