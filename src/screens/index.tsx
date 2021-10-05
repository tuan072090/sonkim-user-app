import {NavigationContainer, NavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useRef} from 'react';
import HomeScreen from "./home";
import CartScreen from "./cart";
import NotificationsScreen from "./notifications";

import {Colors, ScreenName} from "../share";
import NearByScreen from "./nearby";
import AccountScreen from "./account";
import BUDetailScreen from "./BU-detail";
import TabScreens from "./TabScreens";

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
        <NavigationContainer
            ref={navigationRef}
            onReady={onReadyNav}
            onStateChange={handleScreenTracking}>

            <Stack.Navigator>
                {/* Tab screens */}
                <Stack.Screen name={ScreenName.MAIN_SCREEN} component={TabScreens} options={{headerShown: false}}/>

                {/* End Tab screens */}

                <Stack.Screen name={ScreenName.BU_DETAIL_SCREEN} component={BUDetailScreen}/>
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default AppNavigation
