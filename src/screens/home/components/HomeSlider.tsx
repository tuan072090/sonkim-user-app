import React, {useRef, useState} from "react";
import {StyleSheet} from "react-native";
import {ImageStatic} from "../../../components";
import {ScreenSize, StaticImages} from "../../../share";
import {Box, Pressable} from "native-base";
import Carousel from 'react-native-snap-carousel';

const sliderWidth = ScreenSize.vw;
const sliderImgWidth = sliderWidth - 30

export const HomeSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const slideRef = useRef(null)

    const _itemPress = () => {

    }

    // @ts-ignore
    const _renderItem = ({item}) => {
        return (
            <Pressable alignItems="center" width={sliderWidth} height={sliderWidth / 2.198} onPress={_itemPress}>
                <ImageStatic borderRadius={26} uri={StaticImages.banner_example} width={sliderImgWidth}
                             height={sliderImgWidth / 2.198}/>
            </Pressable>
        )
    }

    return (
        <Box position="relative">
            <ImageStatic resizeMode="cover" position="absolute" top={0} left={0} width={sliderWidth+2} height={sliderWidth/2.198}  uri={StaticImages.banner_background}/>
            <Carousel
                layout={'default'}
                loop={true} //  back to first slide when finish the end slide
                autoplay={true}
                autoplayInterval={3000}
                ref={slideRef}
                data={[1, 2, 3, 4]}
                renderItem={_renderItem}
                sliderWidth={sliderWidth}
                itemWidth={sliderWidth}
                inactiveSlideScale={1}
                onSnapToItem={index => setActiveSlide(index)}
            />
        </Box>
    )
}

const styles = StyleSheet.create({
    wrap: {}
})
