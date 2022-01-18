import React, {useEffect, useRef, useState} from "react";
import {Alert, StyleSheet, Platform, ActivityIndicator} from "react-native";
import {Image, ImageStatic} from "../../../components";
import {ScreenName, ScreenSize, SonkimApiService, StaticImages} from "../../../share";
import {Box, Pressable} from "native-base";
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/core';

const sliderWidth = ScreenSize.vw;
const sliderImgWidth = sliderWidth - 30

export const HomeSlider = () => {
    const [articles, setArticles] = useState([])
    const [activeSlide, setActiveSlide] = useState(0)
    const slideRef = useRef(null)
    const navigation = useNavigation()

    useEffect(() => {
        _fetchArticle()
    }, [])

    const _fetchArticle = async () => {
        try {
            const {articles, count} = await SonkimApiService.GetArticles()
            setArticles(articles)
        } catch (err) {
            Alert.alert(err.message)
        }
    }

    const _itemPress = (data: any) => {
        //  @ts-ignore
        navigation.navigate(ScreenName.ARTICLE_SCREEN, {articleId: data.id})
    }

    // @ts-ignore
    const _renderItem = ({item}) => {
        if(!item.avatar) return null;

        return (
            <Pressable _pressed={{opacity: 0.8}} alignItems="center" width={sliderWidth} height={sliderWidth / 2.198}
                       onPress={() => _itemPress(item)}>
                <Image borderRadius={Platform.OS === "ios" ? 26 : 10} uri={item.avatar.url} width={sliderImgWidth} height={sliderImgWidth / 2.198}
                       resizeMode="stretch"/>
            </Pressable>
        )
    }

    return (
        <Box position="relative">
            <ImageStatic resizeMode="cover" position="absolute" top={0} left={0} width={sliderWidth + 2}
                         height={sliderWidth / 2.198} uri={StaticImages.banner_background}/>

            {
                articles.length === 0
                    ? <Box width={sliderWidth} height={sliderWidth / 2.198} p={3}>
                        <Box width={"100%"} height={"100%"} bgColor="gray.200" borderRadius={14}/>
                    </Box>
                    : <Carousel
                        loop={true} //  back to first slide when finish the end slide
                        autoplay={true}
                        autoplayInterval={3000}
                        ref={slideRef}
                        data={articles}
                        renderItem={_renderItem}
                        sliderWidth={sliderWidth}
                        itemWidth={sliderWidth}
                        inactiveSlideScale={1}
                        onSnapToItem={setActiveSlide}
                    />
            }

        </Box>
    )
}
