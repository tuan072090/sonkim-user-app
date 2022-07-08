import React, {useEffect, useState} from 'react'
import {Alert, ImageBackground, StyleSheet} from "react-native";
import {ScreenSize, StaticImages, SonkimApiService} from "../../../../share";
import {Box, Pressable, Image, Button} from "native-base";
import {Typo} from "../../../atoms/typo";
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {UpdateGSShopAccount, UpdateSkmAccount} from "../../../../redux/reducers/loyalty";
import {GetGsShopMember} from "../../../../share/services/sonkim-api/BU-APIs/gsshop";

/**
 * Card đã đăng ký và chưa đk
 */
const GSShopCard: React.FC<any> = (props) => {
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.auth)
    const {gsshopAccount} = useAppSelector(state => state.loyalty)

    useEffect(() => {
        if (user) {
            _getAccount(user.user.phone)
        }
    }, [user])

    const _getAccount = async (phone: string) => {
        try {
            const gsshopAccount = await GetGsShopMember(phone)
            console.log('gsshopAccount...', gsshopAccount)
            dispatch(UpdateGSShopAccount(gsshopAccount))
        } catch (err) {
            Alert.alert("Get GSShop account error", err.message)
        }
    }

    const _navigateDetail = () => {
        console.warn("detail GSSHOP")
    }

    const _linkAccount = () => {
        console.warn("link GSSHOP")
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
                        : <Box py={3} px={4} flexDirection="row" flexGrow={1} justifyContent="flex-end">
                            <Typo color="white" type="subtitle16" textTransform="uppercase">
                                {"card name"}
                            </Typo>
                            <Typo color="white" type="subtitle16">
                                {123} điểm
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
