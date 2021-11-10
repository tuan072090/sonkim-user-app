import {Box, Button, ScrollView, Text} from "native-base";
import React, {useContext} from "react";
import {
    ChevronRightIcon,
    FriendIcon,
    LocationIcon,
    MySwitch,
    NotificationOutlineIcon,
    TranslateIcon
} from "../../components";
import AccountHeader from "./components/AccountHeader";
import AccountItem from "./components/AccountItem";
import AppProvider from "../../share/context";
import {Alert} from "react-native";
import {useNavigation} from "@react-navigation/core";
import {APP_VERSION, ScreenName, Translate} from "../../share";
import LanguageProvider from "../../share/context/Language";

const AccountScreen = () => {
    const {dispatch, user} = useContext(AppProvider.context)
    const {language, setLanguage} = useContext(LanguageProvider.context)

    const navigation = useNavigation();

    const _logout = () => {
        dispatch({
            type: AppProvider.actions.LOGOUT,
            data: null
        })
        Alert.alert("Đăng xuất thành công")
    }

    const _toggleAllowNotification = (value: boolean) => {
        console.log("isAllowNotification...", value)
    }

    const _toggleLanguage = () => {
        const newLang = language === "vi" ? "en" : "vi"
        setLanguage(newLang)
    }

    const _navigateToHistory = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.TRANSACTION_SWAP_POINT_HISTORY)
    }

    const _navigateToNotification = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.NOTIFICATION_SCREEN)
    }

    return (
        <Box flex={1}>
            <ScrollView>
                <AccountHeader/>

                <Box p="4">
                    <Box mb={4}>
                        <AccountItem title={Translate[language].transferPoint} onPress={_navigateToHistory}
                                     startIcon={(<LocationIcon size={6}/>)} endIcon={(<ChevronRightIcon size={6}/>)}/>
                    </Box>

                    <Box mb={4}>
                        <AccountItem title={Translate[language].inviteFriend} startIcon={(<FriendIcon size={6}/>)}
                                     endIcon={(<ChevronRightIcon size={6}/>)}/>
                    </Box>
                    <Box mb={4}>
                        <AccountItem title={Translate[language].currentLanguage}
                                     startIcon={(<TranslateIcon size={6}/>)}
                                     endIcon={(<MySwitch onChangeValue={_toggleLanguage} isChecked={language==="en"}/>)}/>
                    </Box>

                    <Box mb={4}>
                        <AccountItem title={Translate[language].notifications} onPress={_navigateToNotification}
                                     startIcon={(<NotificationOutlineIcon size={6}/>)}
                                     endIcon={(<MySwitch onChangeValue={_toggleAllowNotification}/>)}/>
                    </Box>
                    {
                        user && <Button onPress={_logout}
                                        bgColor="#08698133"
                                        _pressed={{bgColor: "rgba(255,255,255,0.8)"}}
                                        mt={4}
                                        height={12}
                                        borderRadius={12}>
                            <Text color="primary.500" fontSize="lg" fontWeight="semibold">{Translate[language].logout}</Text>
                        </Button>
                    }


                    <Text width="100%" fontSize="sm" color="gray.400" mt={5}
                          textAlign="center">Verion {APP_VERSION}</Text>
                </Box>
            </ScrollView>
        </Box>
    )
}

export default AccountScreen
