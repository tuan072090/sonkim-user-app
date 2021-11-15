import React, {useContext} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Colors, ScreenName, ScreenSize, Translate} from "../share";
import HomeScreen from "./home";
import NotificationsScreen from "./notifications";
import NearByScreen from "./nearby";
import {AccountIcon, CartIcon, HomeIcon, NearByIcon, NotificationIcon, Typo} from "../components";
import CartScreen from "./cart";
import AccountScreen from "./account";
import {HStack, Text} from "native-base";
import LanguageProvider from "../share/context/Language";
import languages from "../share/languages";

const Tab = createBottomTabNavigator();
const tabBarWidth = ScreenSize.vw-24

const TabScreens = () => {
    const {language: lang} = useContext(LanguageProvider.context)

    return (
        <Tab.Navigator screenOptions={{
            unmountOnBlur: true,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 15,
                marginHorizontal: 12,
                paddingBottom: 0,
                paddingHorizontal: 12,
                height: 60,
                backgroundColor: Colors.tabBarBackground,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center'
            },
        }}>
            <Tab.Screen name={ScreenName.HOME_SCREEN} component={HomeScreen} options={{
                // tabBarButton: (props) => {
                //     return (
                //         <HStack alignItems="center" p={2} borderRadius={10} bgColor="white" height={50}>
                //             <HomeIcon active={true} size={19}/>
                //             <Typo numberOfLines={1} pl={1} color="primary.500" type="caption">{Translate[lang].home}</Typo>
                //         </HStack>
                //     )
                // },
                tabBarIcon: ({focused, color, size}) => {
                    if(focused){
                        return (
                            <HStack alignItems="center" p={2} borderRadius={10} bgColor="white" >
                                <HomeIcon active={true} size={19}/>
                                <Typo numberOfLines={1} pl={1} color="primary.500" type="caption">{Translate[lang].home}</Typo>
                            </HStack>
                        )
                    }
                    return(<HomeIcon active={true} size={19}/>)
                }
            }}/>

            <Tab.Screen name={ScreenName.NOTIFICATION_SCREEN} component={NotificationsScreen} options={{
                tabBarIcon: ({focused, color, size}) => {
                    if(focused){
                        return (
                            <HStack alignItems="center" p={2} borderRadius={10} bgColor="white" >
                                <NotificationIcon active={true} size={19}/>
                                <Typo numberOfLines={1} pl={1} color="primary.500" type="caption">{Translate[lang].notifications}</Typo>
                            </HStack>
                        )
                    }
                    return (<NotificationIcon active={true} size={19}/>)
                }
            }}/>

            <Tab.Screen name={ScreenName.NEAR_BY_SCREEN} component={NearByScreen} options={{
                tabBarIcon: ({focused, color, size}) => {
                    if(focused){
                        return (
                            <HStack alignItems="center" p={2} borderRadius={10} bgColor="white" >
                                <NearByIcon active={true} size={19}/>
                                <Typo numberOfLines={1} pl={1} color="primary.500" type="caption">{Translate[lang].nearby}</Typo>
                            </HStack>
                        )
                    }
                    return (<NearByIcon active={true} size={19}/>)
                }

            }}/>

            <Tab.Screen name={ScreenName.CART_SCREEN} component={CartScreen} options={{
                tabBarIcon: ({focused, color, size}) => {
                    if(focused){
                        return (
                            <HStack alignItems="center" p={2} borderRadius={10} bgColor="white" >
                                <CartIcon active={true} size={19}/>
                                <Typo numberOfLines={1} pl={1} color="primary.500" type="caption">{Translate[lang].orders}</Typo>
                            </HStack>
                        )
                    }
                    return (<CartIcon active={true} size={19}/>)
                }
            }}/>
            <Tab.Screen name={ScreenName.ACCOUNT_SCREEN} component={AccountScreen} options={{
                tabBarIcon: ({focused, color, size}) => {
                    if(focused){
                        return (
                            <HStack alignItems="center" p={2} borderRadius={10} bgColor="white" >
                                <AccountIcon active={true} size={19}/>
                                <Typo numberOfLines={1} pl={1} color="primary.500" type="caption">{Translate[lang].account}</Typo>
                            </HStack>
                        )
                    }
                    return (<AccountIcon active={true} size={19}/>)
                }

            }}/>
        </Tab.Navigator>
    );
}

export default TabScreens
