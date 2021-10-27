import React, {memo, useContext, useEffect} from "react";
import {Box, Pressable, Text} from "native-base";
import {Avatar, VoucherIcons} from "../../../components";
import {useNavigation} from '@react-navigation/native';
import {ScreenName, SonkimApiService} from "../../../share";
import AppProvider from "../../../share/context";

export const HomeHeader = memo(() => {
    const navigation = useNavigation()
    const {dispatch, user, accessToken} = useContext(AppProvider.context)

    useEffect(() => {
        console.log("accessToken....", accessToken)
        if(accessToken && accessToken.length > 0){
            _fetchProfile()
        }

    }, [])


    const _fetchProfile = async () => {
        try {
            const userInfo = await SonkimApiService.GetPersonalInfo()
            console.log("userInfo....", userInfo)
            dispatch({
                type: AppProvider.actions.UPDATE_USER_INFO,
                data: userInfo
            })
        } catch (err) {
            // Alert.alert(err.message)
        }
    }

    const _navToAccount = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.USER_INFO)
    }

    const _navToVouchers = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.VOUCHERS_SCREEN)
    }

    return (
        <Box bgColor="primary.500" px={4} py={3} flexDirection="row" alignItems="center" justifyContent="space-between"
             safeAreaTop>
            <Pressable _pressed={{opacity: 0.5}} onPress={_navToAccount} flexDirection="row">
                {
                    user
                        ? <>
                            {
                                user.avatar ? <Avatar uri={user.avatar} size="sm"/>
                                    : <Avatar
                                        uri={"https://ui-avatars.com/api/?background=ff2dad&color=fff&size=400&name=" + user.name}
                                        size="sm"/>
                            }

                            <Text ml={3} fontSize="lg" color="white">Chào {user.name}</Text>
                        </>
                        :
                        <Text ml={3} fontSize="lg" color="white">Chào người lạ</Text>
                }
            </Pressable>

            <Pressable _pressed={{opacity: 0.5}} onPress={_navToVouchers} position="relative" flexDirection="row"
                       alignItems="center" px={4} py={2}>
                {/*overlay background*/}
                <Box position="absolute" top={0} left={0} right={0} bottom={0} bgColor="white" opacity={20}
                     rounded="2xl"/>
                {/*overlay background*/}
                <VoucherIcons fill="white" size={6}/>
                <Text ml={2} fontSize="lg" fontWeight="medium" color="white">3</Text>
            </Pressable>
        </Box>
    )
})
