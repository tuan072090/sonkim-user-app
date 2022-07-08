import React, {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {UpdateGS25Account} from "../../../../redux/reducers/loyalty";
import {Alert, ImageBackground, StyleSheet} from "react-native";
import {Box, Button, Pressable} from "native-base";
import {ScreenSize, StaticImages} from "../../../../share";
import {Typo} from "../../../atoms/typo";

const GS25Card: React.FC<any> = (props) => {
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.auth)
    const {gs25Account} = useAppSelector(state => state.loyalty)

    useEffect(() => {
        if (user) {
            console.log('user',user)
            const {name, gender, birthday} = user
            _getAccount(user.user.phone)
        }
    }, [user])

    const _getAccount = async (phone: string) => {
        try {
            //UpdateGS25Account
        } catch (err) {
            Alert.alert("Get GS25 account error", err.message)
        }
    }

    const _navigateDetail = () => {
        console.warn("detail GSSHOP")
    }

    const _linkAccount = () => {
        console.warn("link GSSHOP")
    }

    return (
        <Pressable {...props} _pressed={{opacity: 0.5}} onPress={gs25Account ? _navigateDetail : _linkAccount}>
            <ImageBackground
                source={StaticImages.gs25Bg}
                resizeMode="stretch"
                style={styles.imageBg}>
                {
                    !gs25Account ? <Box py={3} px={5} flexGrow={1} justifyContent="flex-end">
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

export default GS25Card
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
