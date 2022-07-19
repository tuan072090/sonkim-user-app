import React, {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {UpdateJardinAccount} from "../../../../redux/reducers/loyalty";
import {Alert, ImageBackground, StyleSheet} from "react-native";
import {Box, Button, Image, Pressable} from "native-base";
import {ScreenName, ScreenSize, StaticImages} from "../../../../share";
import {Typo} from "../../../atoms/typo";
import {GetJardinMemberByPhone} from "../../../../share/services/sonkim-api/BU-APIs/jardin";
import {useNavigation} from "@react-navigation/native";
import {BuMapping} from "../../../../share/configs/commonConfigs";

const JardinCard: React.FC<any> = (props) => {
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.auth)
    const {jardinAccount} = useAppSelector(state => state.loyalty)
    const navigation = useNavigation()

    useEffect(() => {
        if (user) {
            _getAccount(user.user.phone)
        }
    }, [user])

    const _getAccount = async (phone: string) => {
        try {
            const memberData = await GetJardinMemberByPhone(phone)
            dispatch(UpdateJardinAccount(memberData))
        } catch (err) {
            Alert.alert("Get Jardin account error", err.message)
        }
    }

    const _navigateDetail = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.MEMBERSHIP_DETAIL_SCREEN, {id: BuMapping["jardin"], bu: 'jardin'});
    }

    const _linkAccount = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.MEMBERSHIP_REGISTER_SCREEN, {id: BuMapping["jardin"], bu: 'jardin'}, undefined, undefined);
    }

    return (
        <Pressable {...props} _pressed={{opacity: 0.5}} onPress={jardinAccount ? _navigateDetail : _linkAccount}>
            <ImageBackground
                source={StaticImages.skmBg}
                resizeMode="stretch"
                style={styles.imageBg}>
                <Image
                    mt={2}
                    mx={3}
                    source={StaticImages.jardin_nopadding}
                    width={20}
                    height={10}
                />
                {
                    !jardinAccount ? <Box py={3} px={5} flexGrow={1} justifyContent="flex-end">
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
                        : <Box py={3} px={4} flexDirection="row" w="100%" flexGrow={1} alignItems="flex-end"
                               justifyContent="space-between">
                            <Typo color="white" type="subtitle16" textTransform="uppercase">
                                {jardinAccount.name + " " + (jardinAccount.surname || "")}
                            </Typo>
                            <Typo color="white" type="subtitle16">
                                {jardinAccount.walletBalances.length > 0 ? jardinAccount.walletBalances[0].balance : 0} ĐIỂM
                            </Typo>
                        </Box>
                }
            </ImageBackground>
        </Pressable>
    )
}

export default JardinCard
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
