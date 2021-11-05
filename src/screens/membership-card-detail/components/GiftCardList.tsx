import React, {useEffect, useState} from "react";
import {Colors, GiftCardType, ScreenName, SonkimApiService, UserMemberShipCardType} from "../../../share";
import {useNavigation} from "@react-navigation/core";
import {Typo} from "../../../components/atoms/typo";
import {Box} from "native-base";
import {ActivityIndicator, Alert} from "react-native";
import {GiftCard, MyButton, PressBox} from "../../../components";

export const GiftCardList: React.FC<{ membershipCard: UserMemberShipCardType }> = ({membershipCard}) => {
    const [giftCards, setGiftCards] = useState<GiftCardType[] | null>(null)
    const [total, setTotal] = useState<number | null>(null)
    const navigation = useNavigation();
    const {loyalty_program} = membershipCard

    useEffect(() => {
        if (membershipCard) {
            _fetchGiftCards()
        }
    }, [membershipCard])

    const _fetchGiftCards = () => {
        //  filter by loyalty program unit
        SonkimApiService.GetGiftCards({loyalty_program: loyalty_program.id, _limit: 2}).then(data => {
            const {count, gift_cards} = data;
            setGiftCards(gift_cards)
            setTotal(count)
        }).catch(err => {
            Alert.alert("Lỗi " + err.message)
        })
    }

    const _navigateListGiftCard = (filter:boolean = true) => {
        if(!filter){
            //  @ts-ignore
            navigation.navigate(ScreenName.GIFTCARD_SCREEN)
            return
        }
        //  @ts-ignore
        navigation.navigate(ScreenName.GIFTCARD_SCREEN, {filter: {loyalty_program: loyalty_program.id}})
    }

    return (
        <Box p={4} mt={4}>
            <Typo type="subtitle16" color="primary.500">
                Danh sách thẻ quà tặng
            </Typo>
            <Box alignItems="center" mt={3}>
                {
                    !giftCards ? <ActivityIndicator color={Colors.primary["500"]}/>
                        : giftCards.length === 0 ? <>
                            <Typo type={"subtitle14"} color="red.500" textAlign="center">Chưa có ưu thẻ quà tặng nào</Typo>
                            <MyButton onPress={() => _navigateListGiftCard(false)} mt={3}
                                      bgColor="info.100"
                                      _text={{color: "primary.500"}}>Xem thương hiệu khác</MyButton>
                        </>
                        : giftCards.map((item, key) => {
                            return (
                                <Box width="100%" mb={4} key={key}>
                                    <GiftCard giftCard={item}/>
                                </Box>
                            )
                        })
                }
                {
                    total !== null && total > 2 && <PressBox onPress={()=>_navigateListGiftCard(true)} p={3} width="100%" alignItems="center">
                        <Typo type="body14" color="rose.900" textAlign="center" style={{textDecorationLine: "underline"}}>Xem tất cả {total} thẻ quà tặng</Typo>
                    </PressBox>
                }
            </Box>
        </Box>
    )
}
