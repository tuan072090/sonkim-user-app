import React from "react";
import {View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Colors, ScreenName} from "../share";
import HomeScreen from "./home";
import NotificationsScreen from "./notifications";
import NearByScreen from "./nearby";
import {AccountIcon, CartIcon, HomeIcon, NearByIcon, NotificationIcon} from "../components/atoms/icons";
import CartScreen from "./cart";
import AccountScreen from "./account";

const Tab = createBottomTabNavigator();

const BottomTab = () => {

    return (
        <Tab.Navigator
            // @ts-ignore
            tabBarOptions={{
                activeTintColor: Colors.primary,
                inactiveTintColor: "#9e9e9e",
                showLabel: false
            }}>

            <Tab.Screen name={ScreenName.HOME_SCREEN} component={HomeScreen} options={{
                unmountOnBlur: true,
                tabBarIcon: ({focused, color, size}) => (
                    <HomeIcon active={focused} size={size}/>)
            }}/>

            <Tab.Screen name={ScreenName.NOTIFICATION_SCREEN} component={NotificationsScreen} options={{
                tabBarIcon: ({focused, color, size}) => (
                    <NotificationIcon active={focused} size={size-2}/>)
            }}/>

            <Tab.Screen name={ScreenName.NEAR_BY_SCREEN} component={NearByScreen} options={{
                tabBarIcon: ({focused, color, size}) => (
                    <NearByIcon active={focused} size={size}/>)

            }}/>

            <Tab.Screen name={ScreenName.CART_SCREEN} component={CartScreen} options={{
                tabBarIcon: ({focused, color, size}) => (
                    <CartIcon active={focused} size={size}/>)

            }}/>
            <Tab.Screen name={ScreenName.ACCOUNT_SCREEN} component={AccountScreen} options={{
                tabBarIcon: ({focused, color, size}) => (
                    <AccountIcon active={focused} size={size}/>)

            }}/>
        </Tab.Navigator>
    );
}

// @ts-ignore
const TabBarIcon = ({icon, focused, color, size}) => {
    return (
        <View>
            <HomeIcon active={false} size={size}/>
        </View>
    );
}

export default BottomTab
