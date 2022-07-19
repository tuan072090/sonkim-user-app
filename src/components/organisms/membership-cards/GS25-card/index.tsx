import React, {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {UpdateGS25Account} from "../../../../redux/reducers/loyalty";
import {Alert, ImageBackground, StyleSheet} from "react-native";
import {Box, Button, Pressable} from "native-base";
import {ScreenName, ScreenSize, StaticImages} from "../../../../share";
import {Typo} from "../../../atoms/typo";
import {useNavigation} from "@react-navigation/native";
import {BuMapping} from "../../../../share/configs/commonConfigs";
import {Gs25GetAccount, Gs25Login} from "../../../../share/services/sonkim-api/BU-APIs/gs25";

const GS25Card: React.FC<any> = (props) => {
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.auth)
    const {gs25Account} = useAppSelector(state => state.loyalty)
    const navigation = useNavigation()

    useEffect(() => {
        if (user) {
            _getAccount(user.user.phone)
        }
    }, [user])

    const _getAccount = async (phone: string) => {
        try {
            const data = await Gs25GetAccount(phone)
            dispatch(UpdateGS25Account(data))
        } catch (err) {
            Alert.alert("GS25 get account error ", `#${err.status} - ${err.message}`)
        }
    }

    const _navigateDetail = () => {
        //  @ts-ignore
        navigation.navigate(ScreenName.MEMBERSHIP_DETAIL_SCREEN, {id: BuMapping["gs25"], bu: 'gs25'}, undefined, undefined);
    }

    const _linkAccount = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.MEMBERSHIP_REGISTER_SCREEN, {id: BuMapping["gs25"], bu:'gs25'}, undefined, undefined);
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
                        : <Box py={3} px={4} flexDirection="row" flexGrow={1}  alignItems="flex-end" justifyContent="space-between">
                            <Typo color="white" type="subtitle16" textTransform="uppercase">
                                {gs25Account.name || user.name || "GS25 member"}
                            </Typo>
                            <Typo color="white" type="subtitle16">
                                {gs25Account.totalPoint} ĐIỂM
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
