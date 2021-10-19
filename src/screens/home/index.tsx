import React, { useContext, useEffect } from 'react';
import { ScrollView, StatusBar } from 'native-base';
import { HomeHeader } from "./components/HomeHeader";
import { HomeSlider } from "./components/HomeSlider";
import { Categories } from "./components/Categories";
import { MembershipCardList } from "./components/MembershipCardList";
import { useNavigation } from '@react-navigation/native';
import LanguageProvider from "../../share/context/Language";
import { ScreenName } from "../../share";

const HomeScreen = () => {
    const { language, setLanguage } = useContext(LanguageProvider.context)
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(function () {
            // @ts-ignore
            //  sonkim://store/:id
            // navigation.navigate(ScreenName.PHONE_INPUT_SCREEN)

            // setLanguage("en")
        }, 1000)
    }, [])

    return (
        <>
            <ScrollView bgColor="white">
                <HomeHeader />

                <HomeSlider />

                <Categories />

                <MembershipCardList />
            </ScrollView>
        </>
    )
}

export default HomeScreen
