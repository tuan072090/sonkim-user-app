import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Colors, ScreenName} from "../share";
import HomeScreen from "./home";
import NotificationsScreen from "./notifications";
import NearByScreen from "./nearby";
import {AccountIcon, CartIcon, HomeIcon, NearByIcon, NotificationIcon} from "../components/atoms/icons/BottomNavIcons";
import CartScreen from "./cart";
import AccountScreen from "./account";
import {Text} from "native-base";

const Tab = createBottomTabNavigator();

const TabScreens = () => {

    return (
        <Tab.Navigator>

            <Tab.Screen name={ScreenName.HOME_SCREEN} component={HomeScreen} options={{
                unmountOnBlur: true,
                headerShown: false,
                tabBarShowLabel: true,
                tabBarLabel: ({focused, color}) => {
                    if(focused)
                        return <Text fontSize="xs" color="primary.500">Trang chủ</Text>;
                    return null
                },
                tabBarIcon: ({focused, color, size}) => (
                    <HomeIcon active={focused} size={focused ? size-2 : size}/>)
            }}/>

            <Tab.Screen name={ScreenName.NOTIFICATION_SCREEN} component={NotificationsScreen} options={{
                tabBarLabel: ({focused, color}) => {
                    if(focused)
                        return <Text fontSize="xs" color="primary.500">Thông báo</Text>;
                    return null
                },
                tabBarIcon: ({focused, color, size}) => (
                    <NotificationIcon active={focused} size={size - 2}/>)
            }}/>

            <Tab.Screen name={ScreenName.NEAR_BY_SCREEN} component={NearByScreen} options={{
                tabBarLabel: ({focused, color}) => {
                    if(focused)
                        return <Text fontSize="xs" color="primary.500">Quanh đây</Text>;
                    return null
                },
                tabBarIcon: ({focused, color, size}) => (
                    <NearByIcon active={focused} size={size}/>)

            }}/>

            <Tab.Screen name={ScreenName.CART_SCREEN} component={CartScreen} options={{
                tabBarLabel: ({focused, color}) => {
                    if(focused)
                        return <Text fontSize="xs" color="primary.500">Đơn hàng</Text>;
                    return null
                },
                tabBarIcon: ({focused, color, size}) => (
                    <CartIcon active={focused} size={size}/>)

            }}/>
            <Tab.Screen name={ScreenName.ACCOUNT_SCREEN} component={AccountScreen} options={{
                tabBarLabel: ({focused, color}) => {
                    if(focused)
                        return <Text fontSize="xs" color="primary.500">Tài khoản</Text>;
                    return null
                },
                tabBarIcon: ({focused, color, size}) => (
                    <AccountIcon active={focused} size={size}/>)

            }}/>
        </Tab.Navigator>
    );
}

export default TabScreens
