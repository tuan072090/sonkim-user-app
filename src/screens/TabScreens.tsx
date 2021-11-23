import React, {useContext, useEffect, useState} from "react";
import {BottomTabBarButtonProps, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Colors, ScreenName, ScreenSize, Translate} from "../share";
import HomeScreen from "./home";
import NotificationsScreen from "./notifications";
import NearByScreen from "./nearby";
import {AccountIcon, CartIcon, HomeIcon, NearByIcon, NotificationIcon, PressBox, Typo} from "../components";
import CartScreen from "./cart";
import AccountScreen from "./account";
import {HStack} from "native-base";
import LanguageProvider from "../share/context/Language";
import { useRoute } from '@react-navigation/native';
import {StyleSheet, TouchableOpacity} from "react-native";

const Tab = createBottomTabNavigator();

// const TabButton:React.ReactNode = (props:BottomTabBarButtonProps) => {
//     return (
//         // @ts-ignore
//         <PressBox {...props}>
//             <HomeIcon active={true} size={19}/>
//             <Typo numberOfLines={1} pl={1} color="primary.500" type="caption">{Translate[lang].home}</Typo>
//         </PressBox>
//     )
// }

const TabScreens = () => {
    const {language: lang} = useContext(LanguageProvider.context)
    const [index, setIndex] = useState(0)

    const _tabPressHandler = (tabIndex:number) => {
        console.log("tabIndex...", tabIndex)
        setIndex(tabIndex)
    }

    return (
        <Tab.Navigator
            screenOptions={{
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
                tabBarButton: (props) => {
                    //  @ts-ignore
                    if(props.accessibilityState.selected){
                        return (
                            // @ts-ignore
                            <PressBox {...props} style={styles.tabActive}>
                                <HomeIcon active={true} size={19}/>
                                <Typo numberOfLines={1} pl={1} color="primary.500" type="caption">{Translate[lang].home}</Typo>
                            </PressBox>
                        )
                    }
                    //  @ts-ignore
                    return <PressBox {...props} style={styles.tab}><HomeIcon active={true} size={19}/></PressBox>
                },
            }}/>

            <Tab.Screen name={ScreenName.NOTIFICATION_SCREEN} component={NotificationsScreen} options={{
                tabBarButton: (props) => {
                    //  @ts-ignore
                    if(props.accessibilityState.selected){
                        return (
                            // @ts-ignore
                            <PressBox {...props} style={styles.tabActive}>
                                <NotificationIcon active={true} size={19}/>
                                <Typo numberOfLines={1} pl={1} color="primary.500" type="caption">{Translate[lang].notifications}</Typo>
                            </PressBox>
                        )
                    }
                    //  @ts-ignore
                    return <PressBox {...props} style={styles.tab}><NotificationIcon active={true} size={19}/></PressBox>
                }
            }}/>

            <Tab.Screen name={ScreenName.NEAR_BY_SCREEN} component={NearByScreen} options={{
                tabBarButton: (props) => {
                    //  @ts-ignore
                    if(props.accessibilityState.selected){
                        return (
                            // @ts-ignore
                            <PressBox {...props} style={styles.tabActive}>
                                <NearByIcon active={true} size={19}/>
                                <Typo numberOfLines={1} pl={1} color="primary.500" type="caption">{Translate[lang].nearby}</Typo>
                            </PressBox>
                        )
                    }
                    //  @ts-ignore
                    return <PressBox {...props} style={styles.tab}><NearByIcon active={true} size={19}/></PressBox>
                }
            }}/>

            <Tab.Screen name={ScreenName.CART_SCREEN} component={CartScreen} options={{
                tabBarButton: (props) => {
                    //  @ts-ignore
                    if(props.accessibilityState.selected){
                        return (
                            // @ts-ignore
                            <PressBox {...props} style={styles.tabActive}>
                                <CartIcon active={true} size={19}/>
                                <Typo numberOfLines={1} pl={1} color="primary.500" type="caption">{Translate[lang].orders}</Typo>
                            </PressBox>
                        )
                    }
                    //  @ts-ignore
                    return <PressBox {...props} style={styles.tab}><CartIcon active={true} size={19}/></PressBox>
                }
            }}/>

            <Tab.Screen name={ScreenName.ACCOUNT_SCREEN} component={AccountScreen} options={{
                tabBarButton: (props) => {
                    //  @ts-ignore
                    if(props.accessibilityState.selected){
                        return (
                            // @ts-ignore
                            <PressBox {...props} style={styles.tabActive}>
                                <AccountIcon active={true} size={19}/>
                                <Typo numberOfLines={1} pl={1} color="primary.500" type="caption">{Translate[lang].account}</Typo>
                            </PressBox>
                        )
                    }
                    //  @ts-ignore
                    return <PressBox {...props} style={styles.tab}><AccountIcon active={true} size={19}/></PressBox>
                }
            }}/>
        </Tab.Navigator>
    );
}

export default TabScreens

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    tabActive: {
        flex: 2,
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10
    }
})
