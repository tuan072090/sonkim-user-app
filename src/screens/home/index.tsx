import React from 'react';
import {ScrollView, StatusBar} from 'native-base';
import {HomeHeader} from "./components/HomeHeader";
import {HomeSlider} from "./components/HomeSlider";
import {Categories} from "./components/Categories";
import {MembershipCards} from "./components/MembershipCards";

const HomeScreen = () => {

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
