import React, {useContext, useEffect} from 'react';
import {ScrollView, StatusBar} from 'native-base';
import {HomeHeader} from "./components/HomeHeader";
import {HomeSlider} from "./components/HomeSlider";
import {Categories} from "./components/Categories";
import {MembershipCardList} from "./components/MembershipCardList";
import { useNavigation } from '@react-navigation/native';
import LanguageProvider from "../../share/context/Language";

const HomeScreen = () => {
    const {language, setLanguage} = useContext(LanguageProvider.context)
    const navigation = useNavigation();

    console.log("language...", language)

    useEffect(() => {
        setLanguage("en")
        // setTimeout(function(){
        //     // @ts-ignore
        //     navigation.navigate(ScreenName.REGISTER_SCREEN)
        // },1000)
    },[])

    return (
        <>
            <StatusBar backgroundColor="primary.500" barStyle="light-content"/>

            <ScrollView bgColor="white">
                <HomeHeader/>

                <HomeSlider/>

                <Categories/>

                <MembershipCardList/>
            </ScrollView>
        </>
    )
}

export default HomeScreen
