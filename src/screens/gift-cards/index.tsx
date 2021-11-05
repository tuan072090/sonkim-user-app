import {Box} from 'native-base'
import React, {useContext, useEffect, useState} from 'react'
import {ActivityIndicator, Alert} from 'react-native'
import ScreenHeader from '../../components/organisms/screen-header'
import {GiftCardType, SonkimApiService, StaticImages, Translate} from '../../share'
import LanguageProvider from '../../share/context/Language'
import {ImageStatic} from '../../components'
import GiftCardList from './components/GiftCardList'

const GiftCardListScreen = () => {
    const {language} = useContext(LanguageProvider.context);
    const [giftCards, setGiftCards] = useState<GiftCardType[] | null>(null);

    useEffect(() => {
        _fetchGiftCards();
    }, [])

    const _fetchGiftCards = async () => {
        try {
            const {count, gift_cards} = await SonkimApiService.GetGiftCards();
            setGiftCards(gift_cards);
        } catch (err) {
            Alert.alert(err.message)
        }
    }

    return (
        <Box flex={1} position="relative">
            <ImageStatic resizeMode="cover" position="absolute" width="100%" height="100%"
                         uri={StaticImages.reg_membership_backgroud}/>
            <ScreenHeader hasBackButton={true} title={Translate[language].giftCard} bgColor="transparent"/>

            {
                !giftCards
                    ? <Box width="full" p={4} alignItems="center">
                        <ActivityIndicator color="primary.500"/>
                    </Box>
                    : <GiftCardList giftCards={giftCards}/>
            }
        </Box>
    )
}

export default GiftCardListScreen



