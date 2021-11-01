import React, {useContext, useEffect} from 'react';
import {ScrollView} from 'native-base';
import {HomeHeader} from "./components/HomeHeader";
import {HomeSlider} from "./components/HomeSlider";
import {Categories} from "./components/Categories";
import {MembershipCardList} from "./components/MembershipCardList";
import {useNavigation, useIsFocused} from '@react-navigation/native';
import LanguageProvider from "../../share/context/Language";
import {ScreenName} from "../../share";
import AppProvider from "../../share/context";

const HomeScreen = () => {
    const {language, setLanguage} = useContext(LanguageProvider.context)
    const {dispatch, user, accessToken} = useContext(AppProvider.context)

    const navigation = useNavigation();
    const isFocused = useIsFocused()

    useEffect(() => {
        console.log("render home accessToken........",accessToken)
        console.log("render home user........", user)

        setTimeout(function () {
            // @ts-ignore
            // navigation.navigate(ScreenName.NEAR_BY_SCREEN)

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
