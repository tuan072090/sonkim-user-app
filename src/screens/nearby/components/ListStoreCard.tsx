import React from "react";
import {Box, Text} from "native-base";
import Carousel, {AdditionalParallaxProps, ParallaxImage} from 'react-native-snap-carousel';
import {ScreenSize} from "../../../share";
import {Platform, StyleSheet} from "react-native";
import {Image, LocationIcon, NearByIcon} from "../../../components";

const itemWidth = ScreenSize.vw / 2 - 16

type itemType = {
    title: string,
    body: string,
    image: string
}
const fakeData = [
    {
        title: '123, Nguyễn Đình Chính, Phú Nhuận',
        body: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        image: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
        title: '333/222 Nguyễn Thị Minh Khai, Tân Định, Q1',
        body: 'Lorem ipsum dolor sit amet',
        image: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
        title: '48 đường 27, P. Đa Cao Quận 1',
        body: 'Lorem ipsum dolor sit amet et nuncat ',
        image: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
        title: '334 Võ Thị Sáu, P.8, Quận 3',
        body: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        image: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
        title: '456 Hoàng Diệu, P.10, Quận 4',
        body: 'Lorem ipsum dolor sit amet',
        image: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
];

export const ListStoreCard = () => {

    const _renderItem = (item: { item: itemType; index: number }, parallaxProps: AdditionalParallaxProps) => {
        return (
            <Box width={itemWidth} height={itemWidth} bgColor="white" rounded="lg" p={2} ml={2} shadow={"3"}>

                <Box flex={1}>
                    <Image
                        uri={item.item.image}
                        style={styles.image}
                        {...parallaxProps}
                    />
                </Box>

                <Box mt={3} flexDirection="row">
                    <Box mt={1}><LocationIcon size={4}/></Box>

                    <Text px={2} fontSize="sm" fontWeight="semibold">
                        {item.item.title}
                    </Text>
                </Box>

            </Box>
        );
    }


    return (
        <Box width="100%" py={3}>
            <Carousel
                sliderWidth={ScreenSize.vw}
                sliderHeight={300}
                itemWidth={itemWidth}
                data={fakeData}
                // @ts-ignore
                renderItem={_renderItem}
                activeSlideAlignment={"start"}
            />
        </Box>
    )
}

const styles = StyleSheet.create({

    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
        backgroundColor: 'white',

    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: 8,
        overflow: "hidden"
    },
})
