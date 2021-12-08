import {useNavigation} from '@react-navigation/core';
import {Box, Button, HStack, Heading} from 'native-base'
import React, {useContext, useEffect} from 'react'
import {ScreenName, SonkimApiService, Translate} from '../../../share';
import AppProvider from "../../../share/context";
import {Alert} from "react-native";
import {MyButton} from "../../../components";
import {useAppSelector} from "../../../redux/store";

const AccountHeader = () => {
    const {user, dispatch, accessToken} = useContext(AppProvider.context)
    const navigation = useNavigation();
    const {language} = useAppSelector(state => state.settings)

    useEffect(() => {
        if (accessToken && accessToken.length > 0) {
            _fetchProfile()
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

    const _navigateUserListCard = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.USER_LIST_CARD)
    }

    const _navigateUserInfo = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.USER_INFO)
    }

    const _navigateLogin = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.LOGIN_SCREEN)
    }

    return (
        <Box bg="primary.500" width="100%" p={4} safeAreaTop={true}>
            {
                user
                    ? <Box>

                        <Heading color="white" textAlign="center" mb={5}>{user.name}</Heading>

                        <HStack space={4}>
                            <MyButton flex={1} size="md" borderWidth="1" borderColor="white" _text={{color: "white",}}
                                    bgColor="rgba(255,255,255,0.5)"
                                    onPress={_navigateUserListCard}>
                                {Translate[language].userListCard}
                            </MyButton>

                            <MyButton flex={1} size="md" borderWidth="1" borderColor="white" _text={{color: "white",}}
                                    bgColor="rgba(255,255,255,0.5)"
                                    onPress={_navigateUserInfo}>
                                {Translate[language].userInfo}
                            </MyButton>
                        </HStack>
                    </Box>
                    : <Box px={4}>
                        <Button rounded="lg" borderWidth="1" borderColor="white" _text={{color: "white",}}
                                bgColor="rgba(255,255,255,0.5)"
                                onPress={_navigateLogin}>
                            {Translate[language].login}
                        </Button>
                    </Box>
            }

        </Box>

    )
}

export default AccountHeader
