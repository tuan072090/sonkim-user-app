import { Box, ScrollView } from 'native-base'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { GiftCardListType } from '../giftCard.type'
import GiftCard from './GiftCard'


const GiftCardList:React.FC<GiftCardListType> = ({giftCards,fromBottom=false,...props}) => {
    return (
        <ScrollView>
                <Box p={4} m={4}>
                {
                    !giftCards
                        ? <Box width="full" p={4}><ActivityIndicator color="primary.500"/></Box>
                        : giftCards.map((item, index) => (
                            <GiftCard giftCard={item} key={index} fromBottom={fromBottom}/>
                        ))
                }
                </Box>
            </ScrollView>
    )
}

export default GiftCardList

