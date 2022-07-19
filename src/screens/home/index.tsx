import React, {useEffect} from 'react';
import {ScrollView, Box} from 'native-base';
import {HomeHeader} from "./components/HomeHeader";
import {HomeSlider} from "./components/HomeSlider";
import {Categories} from "./components/Categories";
import {MembershipCardList} from "./components/MembershipCardList";
import {useIsFocused, useNavigation, useScrollToTop} from '@react-navigation/native';

const HomeScreen = () => {
    const ref = React.useRef(null);
    useScrollToTop(ref);

    const navigation = useNavigation();
    const isFocused = useIsFocused()

    return (
        <>
            <ScrollView bgColor="white" ref={ref}>

                <HomeHeader isFocused={isFocused}/>

                <HomeSlider/>

                <Categories/>

                <MembershipCardList/>

                <Box width={"100%"} height={100}/>
            </ScrollView>
        </>
    )
}

export default HomeScreen
