import React, {useEffect} from 'react';
import {ScrollView, StatusBar} from 'native-base';
import {HomeHeader} from "./components/HomeHeader";
import {HomeSlider} from "./components/HomeSlider";
import {Categories} from "./components/Categories";
import {MembershipCards} from "./components/MembershipCards";
import { useNavigation } from '@react-navigation/native';
import {ScreenName} from "../../share";

const HomeScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
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

                <MembershipCards/>
            </ScrollView>
        </>
    )
}

export default HomeScreen
