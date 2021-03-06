import {NavigationContainer, NavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useRef} from 'react';

import {Colors, ScreenName, ScreenTitle} from "../share";
import UserListCard from './membership-card-list';
import TabScreens from "./TabScreens";
import {PhoneInputScreen} from "./auth/PhoneInputScreen";
import {LoginScreen} from "./auth/LoginScreen";
import {OtpScreen} from "./auth/OtpScreen";
import {RegisterScreen} from "./auth/RegisterScreen";
import LinkMembership from './link-membership';
import {StatusBar} from "native-base";
import analytics from '@react-native-firebase/analytics';
import LinkMembershipForm from './link-membership/LinkMemberShipForm';
import UsePoint from './use-point';
import UsePointQR from './use-point/UserPointQR';
import {ResetPasswordScreen} from "./auth/ResetPasswordScreen";
import TransferPointPage from './transfer-point';
import StoreScreen from './stores';
import VouchersScreen from "./vouchers";
import AccountInfo from './account/AccountInfo';
import VoucherDetail from './vouchers/VoucherDetail';
import TransactionSwapHistory from './transfer-point-history';
import {ArticleScreen} from "./article";
import GiftCardListScreen from './gift-cards';
import GiftCardDetail from './gift-cards/GiftCardDetail';
import MembershipRegisterScreen from "./membership-register";
import MemberShipCardDetailScreen from "./membership-card-detail";
import {MembershipRegisterSelect} from "./membership-register/MembershipRegisterSelect";
import {FloatMessage, NotificationFloatMessage} from "../components";
import OrderVouchersScreen from "./order-vouchers";
import OrderGiftCardsScreen from "./order-giftcards";
import {OrderVoucherDetail} from "./order-vouchers/OrderVoucherDetail";
import {OrderGiftCardDetail} from "./order-giftcards/OrderGiftCardDetail";
import messaging from "@react-native-firebase/messaging";
import {useAppDispatch} from "../redux/store";
import {UpdateInAppNotification} from '../redux/reducers/notification';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const routeNameRef = useRef("");
    // @ts-ignore
    const navigationRef = React.useRef<NavigationContainerRef | null>(null);
    const appDispatch = useAppDispatch()

    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            appDispatch(UpdateInAppNotification(remoteMessage))
        });

        return unsubscribe;
    }, []);

    const handleScreenTracking = () => {

        if (navigationRef.current) {

            const previousRouteName = routeNameRef.current;
            const currentRouteName = navigationRef.current.getCurrentRoute().name;

            if (previousRouteName !== currentRouteName) {
                //  add tracking
                analytics().logScreenView({
                    screen_name: currentRouteName,
                    screen_class: currentRouteName,
                });
            }

            // Save the current route name for later comparison
            routeNameRef.current = currentRouteName;
        }
    };

    const onReadyNav = function () {
        if (!navigationRef || !navigationRef.current) return false;
        else {
            return (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
        }
    }

    return (
        <>
            <StatusBar backgroundColor="#086981" barStyle="light-content"/>

            <FloatMessage/>

            <NotificationFloatMessage/>

            <NavigationContainer
                ref={navigationRef}
                onReady={onReadyNav}
                onStateChange={handleScreenTracking}>
                <Stack.Navigator screenOptions={{headerTintColor: Colors.primary["500"], headerBackTitle: "Tr??? v???"}}>
                    {/* Tab screens */}
                    <Stack.Screen name={ScreenName.MAIN_SCREEN} component={TabScreens} options={{headerShown: false}}/>
                    {/* End Tab screens */}
                    <Stack.Screen name={ScreenName.REGISTER_SCREEN} component={RegisterScreen}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.PHONE_INPUT_SCREEN} component={PhoneInputScreen}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.OTP_SCREEN} component={OtpScreen} options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.LOGIN_SCREEN} component={LoginScreen}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.RESET_PASSWORD_SCREEN} component={ResetPasswordScreen}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.USER_LIST_CARD} component={UserListCard}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.USER_INFO} component={AccountInfo} options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.MEMBERSHIP_REGISTER_SCREEN} component={MembershipRegisterScreen}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.MEMBERSHIP_REGISTER_SELECT_SCREEN}
                                  component={MembershipRegisterSelect} options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.MEMBERSHIP_DETAIL_SCREEN} component={MemberShipCardDetailScreen}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.LINK_MEMBERSHIP} component={LinkMembership}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.LINK_MEMBERSHIP_FORM} component={LinkMembershipForm}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.USE_POINT} component={UsePoint} options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.USE_POINT_QR} component={UsePointQR} options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.STORES_SCREEN} component={StoreScreen}
                                  options={{headerShown: false}}/>

                    <Stack.Screen name={ScreenName.VOUCHERS_SCREEN} component={VouchersScreen}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.ORDER_VOUCHERS_SCREEN} component={OrderVouchersScreen}
                                  options={{title: ScreenTitle[ScreenName.ORDER_VOUCHERS_SCREEN], headerShown: false}}/>

                    <Stack.Screen name={ScreenName.ORDER_VOUCHER_DETAIL} component={OrderVoucherDetail}
                                  options={{title: ScreenTitle[ScreenName.ORDER_VOUCHER_DETAIL], headerShown: false}}/>

                    <Stack.Screen name={ScreenName.ORDER_GIFT_CARDS_SCREEN} component={OrderGiftCardsScreen}
                                  options={{
                                      title: ScreenTitle[ScreenName.ORDER_GIFT_CARDS_SCREEN],
                                      headerShown: false
                                  }}/>
                    <Stack.Screen name={ScreenName.ORDER_GIFT_CARD_DETAIL_SCREEN} component={OrderGiftCardDetail}
                                  options={{
                                      title: ScreenTitle[ScreenName.ORDER_GIFT_CARD_DETAIL_SCREEN],
                                      headerShown: false
                                  }}/>

                    <Stack.Screen name={ScreenName.VOUCHER_DETAIL} component={VoucherDetail}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.TRANSFER_POINT} component={TransferPointPage}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.TRANSACTION_SWAP_POINT_HISTORY} component={TransactionSwapHistory}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.ARTICLE_SCREEN} component={ArticleScreen}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.GIFT_CARD_LIST_SCREEN} component={GiftCardListScreen}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name={ScreenName.GIFT_CARD_DETAIL_SCREEN} component={GiftCardDetail}
                                  options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppNavigation
