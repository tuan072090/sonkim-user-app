import React, {useEffect} from 'react';
import {ScrollView} from 'native-base';
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

    useEffect(() => {
        setTimeout(function () {
            // @ts-ignore
            // navigation.navigate(ScreenName.MEMBERSHIP_DETAIL_SCREEN, {id: 1});
            // navigation.navigate(ScreenName.ORDER_GIFT_CARDS_SCREEN)
            // setLanguage("en")
        }, 500)
    }, [])

    return (
        <>
            <ScrollView bgColor="white" ref={ref}>

                <HomeHeader isFocused={isFocused}/>

                <HomeSlider/>

                <Categories/>

                <MembershipCardList/>

            </ScrollView>
        </>
    )
}

export default HomeScreen
