import {Box, ScrollView} from 'native-base'
import React from 'react'
import {GiftCardType} from "../../../share";
import {GiftCard} from "../../../components";

const GiftCardList: React.FC<{ giftCards: GiftCardType[] }> = ({giftCards, ...props}) => {
    return (
        <ScrollView>
            {
                giftCards.map((item, index) => (
                    <Box key={index} px={4} mb={4}>
                        <GiftCard giftCard={item}/>
                    </Box>
                ))
            }
        </ScrollView>
    )
}

export default GiftCardList

