import React, {useContext, useEffect} from 'react';
import {ScrollView} from 'native-base';
import {HomeHeader} from "./components/HomeHeader";
import {HomeSlider} from "./components/HomeSlider";
import {Categories} from "./components/Categories";
import {MembershipCardList} from "./components/MembershipCardList";
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {ScreenName} from "../../share";

const HomeScreen = () => {

    const navigation = useNavigation();
    const isFocused = useIsFocused()

    useEffect(() => {
        setTimeout(function () {
            // @ts-ignore
            // navigation.navigate(ScreenName.MEMBERSHIP_CARD_DETAIL_SCREEN, {id: 1});
            // navigation.navigate(ScreenName.USE_POINT)

            // setLanguage("en")
        }, 1000)
    }, [isFocused])

    return (
        <>
            <ScrollView bgColor="white">

                <HomeHeader isFocused={isFocused}/>

                <HomeSlider/>

                <Categories/>

                <MembershipCardList/>
            </ScrollView>
        </>
    )
}

export default HomeScreen
