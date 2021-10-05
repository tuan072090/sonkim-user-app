import React from 'react';
import {StatusBar} from 'native-base';
import {HomeHeader} from "./components/HomeHeader";
import {HomeSlider} from "./components/HomeSlider";

const HomeScreen = () => {

    return (
        <>
            <StatusBar backgroundColor="primary.500" barStyle="light-content"/>

            <HomeHeader/>

            <HomeSlider/>
        </>
    )
}

export default HomeScreen
