import {Box, FlatList} from 'native-base'
import React, {useEffect, useState} from 'react'
import {Alert} from 'react-native'
import ScreenHeader from '../../components/organisms/screen-header'
import {GiftCardType, LoyaltyProgramTypes, SonkimApiService, StaticImages, Translate} from '../../share'
import {FullScreenLoader, GiftCard, ImageStatic, ListLoyaltyFilter, Typo} from '../../components'
import {useRoute} from "@react-navigation/core";
import {useAppSelector} from "../../redux/store";

const GiftCardListScreen = () => {
    const {language} = useAppSelector(state => state.settings)
    const [giftCards, setGiftCards] = useState<GiftCardType[] | null>(null);
    const [total, setTotal] = useState<number | null>(null)
    const [filter, setFilter] = useState<any>({_limit: 20})
    const {params}: any = useRoute()

    useEffect(() => {
        if (params && params["filter"]) {
            setFilter({...filter, ...params["filter"]})
        }
    }, [params])

    useEffect(() => {
        _fetchGiftCards()
    }, [filter])

    const _fetchGiftCards = async () => {
        try {
            const {count, gift_cards} = await SonkimApiService.GetGiftCards(filter);
            setGiftCards(gift_cards);
            setTotal(count)

        } catch (err) {
            Alert.alert(err.message)
        }
    }

    const _onLoyaltyFilterChange = (loyaltyProgram: LoyaltyProgramTypes | null) => {
        const newFilter = {...filter}
        if (!loyaltyProgram) {
            delete newFilter["loyalty_program"]
        } else {
            newFilter["loyalty_program"] = loyaltyProgram.id
        }
        setFilter(newFilter)
    }
    //  @ts-ignore
    const _renderItem = ({item, index}) => {
        return (
            <Box p={4} key={index}><GiftCard giftCard={item}/></Box>
        )
    }

    if (!giftCards) return <FullScreenLoader/>

    return (
        <Box flex={1} position="relative">
            <ImageStatic resizeMode="cover" position="absolute" width="100%" height="100%"
                         uri={StaticImages.reg_membership_backgroud}/>
            <ScreenHeader hasBackButton={true} title={Translate[language].giftCards} bgColor="transparent"/>
            <Box bgColor="primary.500"><ListLoyaltyFilter onChange={_onLoyaltyFilterChange}/></Box>

            <FlatList
                data={giftCards}
                renderItem={_renderItem}
                ListHeaderComponent={<Typo type="body14" color="white" textAlign="center"
                                           mt={5}>Có {total !== null ? total : "..."} kết quả</Typo>}
                ListFooterComponent={<Box width="100%" height={16}/>}
            />
        </Box>
    )
}

export default GiftCardListScreen



