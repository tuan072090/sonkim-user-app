import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useRef } from 'react';

import { Colors, ScreenName, ScreenTitle } from "../share";
import UserListCard from './user-list-card';
import BUDetailScreen from "./BU-detail";
import TabScreens from "./TabScreens";
import { PhoneInputScreen } from "./auth/PhoneInputScreen";
import { LoginScreen } from "./auth/LoginScreen";
import { OtpScreen } from "./auth/OtpScreen";
import { RegisterScreen } from "./auth/RegisterScreen";
import RegisterMembership from './register-membership';
import LinkMembership from './link-membership';
import { StatusBar } from "native-base";
import analytics from '@react-native-firebase/analytics';
import RegisterMembershipForm from './register-membership/RegisterMembershipForm';
import LinkMembershipForm from './link-membership/LinkMemberShipForm';
import UsePoint from './use-point';
import UsePointQR from './use-point/UserPointQR';
import { ResetPasswordScreen } from "./auth/ResetPasswordScreen";
import TransferPointPage from './transfer-point';
import StorePage from './store';
import VouchersScreen from "./vouchers";
import AccountInfo from './account/AccountInfo';
import VoucherDetail from './vouchers/VoucherDetail';
import TransactionHistory from './transaction-history';
import {ArticleScreen} from "./article";

const Stack = createNativeStackNavigator();


const AppNavigation = () => {
    const routeNameRef = useRef("");
    // @ts-ignore
    const navigationRef = React.useRef<NavigationContainerRef | null>(null);

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
            <StatusBar backgroundColor="#086981" barStyle="light-content" />
            <NavigationContainer
                ref={navigationRef}
                onReady={onReadyNav}
                onStateChange={handleScreenTracking}>
                <Stack.Navigator screenOptions={{ headerTintColor: Colors.primary["500"], headerBackTitle: "Trở về" }}>
                    {/* Tab screens */}
                    <Stack.Screen name={ScreenName.MAIN_SCREEN} component={TabScreens} options={{ headerShown: false }} />
                    {/* End Tab screens */}
                    <Stack.Screen name={ScreenName.REGISTER_SCREEN} component={RegisterScreen}
                        options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.PHONE_INPUT_SCREEN} component={PhoneInputScreen}
                        options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.OTP_SCREEN} component={OtpScreen} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.LOGIN_SCREEN} component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.RESET_PASSWORD_SCREEN} component={ResetPasswordScreen} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.USER_LIST_CARD} component={UserListCard} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.USER_INFO} component={AccountInfo} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.BU_DETAIL_SCREEN} component={BUDetailScreen} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.REGISTER_MEMBERSHIP} component={RegisterMembership} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.LINK_MEMBERSHIP} component={LinkMembership} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.REGISTER_MEMBERSHIP_FORM} component={RegisterMembershipForm} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.LINK_MEMBERSHIP_FORM} component={LinkMembershipForm} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.USEPOINT} component={UsePoint} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.USEPOINTQR} component={UsePointQR} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.STORE} component={StorePage} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.VOUCHERS_SCREEN} component={VouchersScreen} options={{title: ScreenTitle[ScreenName.VOUCHERS_SCREEN]}}/>
                    <Stack.Screen name={ScreenName.VOUCHER_DETAIL} component={VoucherDetail} options={{headerShown:false}}/>
                    <Stack.Screen name={ScreenName.TRANSFER_POINT} component={TransferPointPage} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.TRANSACTION_HISTORY} component={TransactionHistory} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.ARTICLE_SCREEN} component={ArticleScreen}  options={{ headerShown: false }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppNavigation
