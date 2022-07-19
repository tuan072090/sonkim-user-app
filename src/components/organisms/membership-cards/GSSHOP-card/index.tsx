import React, {useEffect, useState} from 'react'
import {Alert, ImageBackground, StyleSheet} from "react-native";
import {ScreenSize, StaticImages, SonkimApiService, ScreenName} from "../../../../share";
import {Box, Pressable, Image, Button} from "native-base";
import {Typo} from "../../../atoms/typo";
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {UpdateGSShopAccount, UpdateSkmAccount} from "../../../../redux/reducers/loyalty";
import {GetGsShopMember} from "../../../../share/services/sonkim-api/BU-APIs/gsshop";
import {useNavigation} from "@react-navigation/native";
import {BuMapping} from "../../../../share/configs/commonConfigs";

/**
 * Card đã đăng ký và chưa đk
 */
const GSShopCard: React.FC<any> = (props) => {
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.auth)
    const {gsshopAccount} = useAppSelector(state => state.loyalty)
    const navigation = useNavigation()

    useEffect(() => {
        if (user) {
            _getAccount(user.user.phone)
        }
    }, [user])

    const _getAccount = async (phone: string) => {
        try {
            const gsshopAccount = await GetGsShopMember(phone)
            dispatch(UpdateGSShopAccount(gsshopAccount))
        } catch (err) {
            Alert.alert("Get GSShop account error", err.message)
        }
    }

    const _navigateDetail = () => {
        //  @ts-ignore
        navigation.navigate(ScreenName.MEMBERSHIP_DETAIL_SCREEN, {id: BuMapping["gsshop"], bu: 'gsshop'}, undefined, undefined);    }

    const _linkAccount = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.MEMBERSHIP_REGISTER_SCREEN, {id: BuMapping['gsshop'], bu: 'gsshop'}, undefined, undefined);
    }

    return (
        <Pressable {...props} _pressed={{opacity: 0.5}} onPress={gsshopAccount ? _navigateDetail : _linkAccount}>
            <ImageBackground
                source={StaticImages.gsShopBg}
                resizeMode="stretch"
                style={styles.imageBg}>
                {
                    !gsshopAccount ? <Box py={3} px={5} flexGrow={1} justifyContent="flex-end">
                            <Button
                                onPress={_linkAccount}
                                _pressed={{bgColor: "primary.100"}}
                                bgColor="white"
                                size="lg"
                                rounded="lg"
                                _text={{color: "primary.500"}}>
                                Đăng ký thẻ
                            </Button>
                        </Box>
                        : <Box py={3} px={4} flexDirection="row" flexGrow={1} alignItems="flex-end" justifyContent="space-between">
                            <Typo color="white" type="subtitle16" textTransform="uppercase">
                                {gsshopAccount.name || user.name}
                            </Typo>
                            <Typo color="white" type="subtitle16">
                                {gsshopAccount.total_point} ĐIỂM
                            </Typo>
                        </Box>
                }
            </ImageBackground>
        </Pressable>
    )
}

export default GSShopCard
const cardHeight = ScreenSize.vw / 2.68; //  tỉ lệ 2.68
const styles = StyleSheet.create({
    imageBg: {
        width: "100%",
        height: cardHeight,
        borderRadius: 20,
        overflow: "hidden",
        justifyContent: "space-between",
    },
});
