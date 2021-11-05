import React, {memo, useContext, useEffect, useState} from "react";
import {Box, Pressable, Text} from "native-base";
import {Avatar, VoucherIcons} from "../../../components";
import {useNavigation} from '@react-navigation/native';
import {ScreenName, SonkimApiService} from "../../../share";
import AppProvider from "../../../share/context";
import {ActivityIndicator, Alert} from "react-native";

export const HomeHeader:React.FC<any> = memo((props) => {
    const navigation = useNavigation()
    const [vouchers, setVouchers] = useState<number | null>(null)
    const {dispatch, user, accessToken} = useContext(AppProvider.context)

    useEffect(() => {
        if (accessToken && accessToken.length > 0) {
            _fetchProfile()
            _fetchVouchers();
        }else {
            setVouchers(0)
        }
    }, [accessToken])


    const _fetchProfile = async () => {
        try {
            const userInfo = await SonkimApiService.GetPersonalInfo()
            dispatch({
                type: AppProvider.actions.UPDATE_USER_INFO,
                data: userInfo
            })
        } catch (err) {
            Alert.alert("Không lấy được thông tin người dùng", err.message)
        }
    }

    const _fetchVouchers = async () => {
        try {
            const {count} = await SonkimApiService.GetPromotions({})
            setVouchers(count)
        } catch (err) {
            Alert.alert("Không lấy được voucher", err.message)
        }
    }

    const _navToAccount = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.USER_INFO)
    }

    const _navToVouchers = () => {
        // @ts-ignore
    }

    return (
        <Box bgColor="primary.500" px={4} py={3} flexDirection="row" alignItems="center" justifyContent="space-between"
             safeAreaTop>
            <Pressable _pressed={{opacity: 0.5}} onPress={_navToAccount} flexDirection="row">
                {
                    user
                        ? <>
                            {
                                user.avatar ? <Avatar uri={"https://ui-avatars.com/api/?background=ff2dad&color=fff&size=400&name=" + user.name} size="sm"/>
                                    : <Avatar
                                        uri={"https://ui-avatars.com/api/?background=ff2dad&color=fff&size=400&name=" + user.name}
                                        size="sm"/>
                            }

                            <Text ml={3} fontSize="lg" color="white">Chào {user.name}</Text>
                        </>
                        :
                        <Text fontSize="lg" color="white">Chào người lạ</Text>
                }
            </Pressable>

            <Pressable _pressed={{opacity: 0.5}} onPress={_navToVouchers} position="relative" flexDirection="row"
                       alignItems="center" px={4} py={2}>
                {/*overlay background*/}
                <Box position="absolute" top={0} left={0} right={0} bottom={0} bgColor="white" opacity={20}
                     rounded="2xl"/>
                {/*overlay background*/}
                <VoucherIcons fill="white" size={6}/>
                {
                    vouchers===null ? <ActivityIndicator size="small" color="white"/>
                        : <Text ml={2} fontSize="lg" fontWeight="medium" color="white">{vouchers}</Text>
                }
            </Pressable>
        </Box>
    )
})
