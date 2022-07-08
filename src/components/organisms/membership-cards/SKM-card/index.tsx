import React, {useEffect, useState} from 'react'
import {Alert, ImageBackground, StyleSheet} from "react-native";
import {ScreenSize, StaticImages, SonkimApiService, ScreenName} from "../../../../share";
import {Box, Pressable, Image, Button} from "native-base";
import {Typo} from "../../../atoms/typo";
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {UpdateSkmAccount} from "../../../../redux/reducers/loyalty";
import {useNavigation} from "@react-navigation/native";

/**
 * Card đã đăng ký và chưa đk
 */
interface SKMCardProps extends React.PropsWithChildren<any> {
    type: "vera" | 'jockey'
}

const SKMCard: React.FC<SKMCardProps> = ({type, ...props}) => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation()
    const {user} = useAppSelector(state => state.auth)
    const {skmAccount} = useAppSelector(state => state.loyalty)

    //  fix cừng tạm
    const loyaltyProgramId = type === 'jockey' ? 10 : 9

    useEffect(() => {
        if (user) {
            _getAccount(user.user.phone)
        }
    }, [user])

    const _getAccount = (phone: string) => {
        SonkimApiService.FindSkmAccount(phone).then(res => {
            dispatch(UpdateSkmAccount(res.account))
        }).catch(err => {
            Alert.alert("Get SKM account error", err.message)
        })
    }

    const _navigateDetail = () => {
        console.warn("detail SKM")
    }

    const _linkAccount = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.MEMBERSHIP_REGISTER_SCREEN, {id: loyaltyProgramId}, undefined, undefined);
    }

    return (
        <Pressable {...props} _pressed={{opacity: 0.5}} onPress={skmAccount ? _navigateDetail : _linkAccount}>
            <ImageBackground
                source={StaticImages.skmBg}
                resizeMode="stretch"
                style={styles.imageBg}>
                {
                    type === 'vera' && <Image
                        mt={2}
                        mx={3}
                        source={StaticImages.vera}
                        width={20}
                        height={10}
                    />
                }
                {
                    type === 'jockey' && <Image
                        mt={2}
                        mx={3}
                        source={StaticImages.jockey}
                        width={20}
                        height={10}
                    />
                }
                {
                    !skmAccount ? <Box py={3} px={5}>
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
                        : <Box py={3} px={4} flexDirection="row" justifyContent="space-between">
                            <Typo color="white" type="subtitle16" textTransform="uppercase">
                                {"card name"}
                            </Typo>
                            <Typo color="white" type="subtitle16">
                                {123} ĐIỂM
                            </Typo>
                        </Box>
                }
            </ImageBackground>
        </Pressable>
    )
}

export default SKMCard
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
