import React, { useContext, useEffect } from 'react';
import { ScrollView, StatusBar } from 'native-base';
import { HomeHeader } from "./components/HomeHeader";
import { HomeSlider } from "./components/HomeSlider";
import { Categories } from "./components/Categories";
import { MembershipCardList } from "./components/MembershipCardList";
import { useNavigation } from '@react-navigation/native';
import LanguageProvider from "../../share/context/Language";
import { ScreenName } from "../../share";
import { QrCode } from "../../components";

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

                <QrCode code={"Something"} size={100} alignItems="center" logoUri="https://sonkim.s3.ap-southeast-1.amazonaws.com/lazada_d75ab18c1c.png?61505.40000000037" />

                <Categories />

                <MembershipCardList />
            </ScrollView>
        </>
    )
}

export default HomeScreen
