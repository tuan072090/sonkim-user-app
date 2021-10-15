import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useRef } from 'react';

import { ScreenName } from "../share";
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

                <Stack.Navigator>

                    {/* Tab screens */}
                    <Stack.Screen name={ScreenName.MAIN_SCREEN} component={TabScreens} options={{ headerShown: false }} />
                    {/* End Tab screens */}
                    <Stack.Screen name={ScreenName.REGISTER_SCREEN} component={RegisterScreen}
                        options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.PHONE_INPUT_SCREEN} component={PhoneInputScreen}
                        options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.OTP_SCREEN} component={OtpScreen} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.LOGIN_SCREEN} component={LoginScreen} options={{ headerShown: false }} />

                    <Stack.Screen name={ScreenName.USER_LIST_CARD} component={UserListCard} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.BU_DETAIL_SCREEN} component={BUDetailScreen} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.REGISTER_MEMBERSHIP} component={RegisterMembership} options={{ headerShown: false }} />
                    <Stack.Screen name={ScreenName.LINK_MEMBERSHIP} component={LinkMembership} options={{ headerShown: false }} />

                </Stack.Navigator>

            </NavigationContainer>
        </>
    )
}

export default AppNavigation
