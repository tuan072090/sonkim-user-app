import React, {memo, useContext, useEffect} from "react";
import {Box, Pressable, Text, useNativeBase} from "native-base";
import {Avatar, VoucherIcons} from "../../../components";
import {useNavigation} from '@react-navigation/native';
import {ScreenName, SonkimApiService} from "../../../share";
import AppProvider from "../../../share/context";
import {Alert} from "react-native";

export const HomeHeader = memo(() => {
    const navigation = useNavigation()
    const {dispatch, user} = useContext(AppProvider.context)

    useEffect(() => {
        _fetchProfile()
    },[])

    const _fetchProfile = async () => {
        try{
            const profile = await SonkimApiService.GetUserProfile()
            dispatch({
                type: AppProvider.actions.UPDATE_USER_INFO,
                data: profile
            })
        } catch (err){
            // Alert.alert(err.message)
        }
    }

    const _navToAccount = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.ACCOUNT_SETTING_SCREEN)
    }

    return (
        <Box bgColor="primary.500" px={4} py={3} flexDirection="row" alignItems="center" justifyContent="space-between"
             safeAreaTop>
            <Pressable onPress={_navToAccount} flexDirection="row">
                {
                    user
                        ?<>
                            <Avatar uri={"https://ui-avatars.com/api/?background=ff2dad&color=fff&size=400&name=" + user.name} size="sm"/>
                            <Text ml={3} fontSize="lg" color="white">Chào {user.name}</Text>
                        </>
                        :
                        <>
                            <Avatar uri={"https://ui-avatars.com/api/?background=ff2dad&color=fff&size=400&name=user"} size="sm"/>
                            <Text ml={3} fontSize="lg" color="white">Chào bạn</Text>
                        </>
                }

            </Pressable>

            <Box position="relative" flexDirection="row" alignItems="center" px={4} py={2}>
                <Box position="absolute" top={0} left={0} right={0} bottom={0} bgColor="white" opacity={20}
                     rounded="2xl"/>
                <VoucherIcons fill="white" size={6}/>
                <Text ml={2} fontSize="lg" fontWeight="medium" color="white">3</Text>
            </Box>
        </Box>
    )
})
