import {Box, Button, Center, Pressable, Switch, Text} from "native-base";
import React, {useContext} from "react";
import {ChevronRightIcon, FriendIcon, LocationIcon, NotificationOutlineIcon, TranslateIcon} from "../../components";
import AccountHeader from "./components/AccountHeader";
import AccountItem from "./components/AccountItem";
import ScreenHeader from "../../components/organisms/screen-header";
import AppProvider from "../../share/context";
import {Alert} from "react-native";

const menuData = [
    {
        startIcon: <LocationIcon size={6}/>,
        title: 'Lịch sử đổi điểm',
        endIcon: <ChevronRightIcon size={6}/>
    },
    {
        startIcon: <FriendIcon size={6}/>,
        title: 'Mời bạn',
        endIcon: <ChevronRightIcon size={6}/>
    },
    {
        startIcon: <TranslateIcon size={6}/>,
        title: 'Ngôn ngữ',
        endIcon: <ChevronRightIcon size={6}/>
    },
    {
        startIcon: <NotificationOutlineIcon size={6}/>,
        title: 'Thông báo',
        endIcon: <Switch size="md" onTrackColor="success.500" onThumbColor="white"/>,
    },
]

const AccountScreen = () => {
    const {dispatch, user} = useContext(AppProvider.context)

    const _logout = () => {
        dispatch({
            type: AppProvider.actions.LOGOUT,
            data: null
        })
        Alert.alert("Đăng xuất thành công")
    }

    return (
        <Box flex={1}>

            <ScreenHeader hasBackButton={false} title={user ? user.name : ""} bgColor="primary.500"/>

            <AccountHeader/>

            <Box p="4">
                {
                    menuData.map((item, index) => (
                        <AccountItem key={index} item={item}/>
                    ))
                }

                {
                    user && <Button onPress={_logout}
                                    bgColor="#08698133"
                                    _pressed={{bgColor: "rgba(255,255,255,0.8)"}}
                                    mt={4}
                                    height={12}
                                    borderRadius={12}>
                        <Text color="primary.500" fontSize="lg" fontWeight="semibold">Đăng xuất</Text>
                    </Button>
                }


                <Text width="100%" fontSize="sm" color="gray.400" mt={5} textAlign="center">Verion 1.0</Text>
            </Box>
        </Box>
    )
}

export default AccountScreen
