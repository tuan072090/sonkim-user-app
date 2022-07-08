import React, {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {UpdateWataminAccount} from "../../../../redux/reducers/loyalty";
import {Alert, ImageBackground, StyleSheet} from "react-native";
import {Box, Button, Image, Pressable} from "native-base";
import {ScreenSize, StaticImages} from "../../../../share";
import {Typo} from "../../../atoms/typo";

const WataminCard: React.FC<any> = (props) => {
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.auth)
    const {wataminAccount} = useAppSelector(state => state.loyalty)

    useEffect(() => {
        if (user) {
            console.log('user',user)
            const {name, gender, birthday} = user
            _getAccount(user.user.phone)
        }
    }, [user])

    const _getAccount = async (phone: string) => {
        try {
            //UpdateJardinAccount
        } catch (err) {
            Alert.alert("Get Watamin account error", err.message)
        }
    }

    const _navigateDetail = () => {
        console.warn("detail Watamin")
    }

    const _linkAccount = () => {
        console.warn("link Watamin")
    }

    return (
        <Pressable {...props} _pressed={{opacity: 0.5}} onPress={wataminAccount ? _navigateDetail : _linkAccount}>
            <ImageBackground
                source={StaticImages.skmBg}
                resizeMode="stretch"
                style={styles.imageBg}>
                <Image
                    mt={2}
                    mx={3}
                    source={StaticImages.kyo_watamin}
                    width={20}
                    height={10}
                />
                {
                    !wataminAccount ? <Box py={3} px={5} flexGrow={1} justifyContent="flex-end">
                            <Button
                                onPress={_linkAccount}
                                _pressed={{bgColor: "primary.100"}}
                                bgColor="white"
                                size="lg"
                                rounded="lg"
                                _text={{color: "primary.500"}}>
                                Liên kết thẻ
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

export default WataminCard
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
