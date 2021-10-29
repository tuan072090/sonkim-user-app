import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors, ScreenName, Translate } from "../share";
import HomeScreen from "./home";
import NotificationsScreen from "./notifications";
import NearByScreen from "./nearby";
import { AccountIcon, CartIcon, HomeIcon, NearByIcon, NotificationIcon } from "../components";
import CartScreen from "./cart";
import AccountScreen from "./account";
import { Text } from "native-base";
import LanguageProvider from "../share/context/Language";

const Tab = createBottomTabNavigator();

const TabScreens = () => {
    const { language: lang } = useContext(LanguageProvider.context)

    return (
        <Tab.Navigator>
            <Tab.Screen name={ScreenName.HOME_SCREEN} component={HomeScreen} options={{
                unmountOnBlur: true,
                headerShown: false,
                tabBarShowLabel: true,
                tabBarLabel: ({ focused, color }) => {
                    if (focused)
                        return <Text fontSize="xs" color="primary.500">{Translate[lang].home}</Text>;
                    return null
                },
                tabBarIcon: ({ focused, color, size }) => (
                    <HomeIcon active={focused} size={focused ? size - 2 : size} />)
            }} />

            <Tab.Screen name={ScreenName.NOTIFICATION_SCREEN} component={NotificationsScreen} options={{
                unmountOnBlur: true,
                headerShown: false,
                tabBarLabel: ({ focused, color }) => {
                    if (focused)
                        return <Text fontSize="xs" color="primary.500">{Translate[lang].notifications}</Text>;
                    return null
                },
                tabBarIcon: ({ focused, color, size }) => (
                    <NotificationIcon active={focused} size={size - 2} />)
            }} />

            <Tab.Screen name={ScreenName.NEAR_BY_SCREEN} component={NearByScreen} options={{
                unmountOnBlur: true,
                headerShown: false,
                tabBarLabel: ({ focused, color }) => {
                    if (focused)
                        return <Text fontSize="xs" color="primary.500">{Translate[lang].nearby}</Text>;
                    return null
                },
                tabBarIcon: ({ focused, color, size }) => (
                    <NearByIcon active={focused} size={size} />)

            }} />

            <Tab.Screen name={ScreenName.CART_SCREEN} component={CartScreen} options={{
                unmountOnBlur: true,
                headerShown: false,
                tabBarLabel: ({ focused, color }) => {
                    if (focused)
                        return <Text fontSize="xs" color="primary.500">{Translate[lang].orders}</Text>;
                    return null
                },
                tabBarIcon: ({ focused, color, size }) => (
                    <CartIcon active={focused} size={size} />)

            }} />
            <Tab.Screen name={ScreenName.ACCOUNT_SCREEN} component={AccountScreen} options={{
                unmountOnBlur: true,
                headerShown: false,
                tabBarLabel: ({ focused, color }) => {
                    if (focused)
                        return <Text fontSize="xs" color="primary.500">{Translate[lang].account}</Text>;
                    return null
                },
                tabBarIcon: ({ focused, color, size }) => (
                    <AccountIcon active={focused} size={size} />)

            }} />
        </Tab.Navigator>
    );
}

export default TabScreens
