import React, {useRef, useState} from "react";
import {Box, Button, Pressable, Text} from "native-base";
import Carousel from 'react-native-snap-carousel';
import {ScreenSize, StaticImages} from "../../../share";
import {ImageStatic, MyButton} from "../../index";

const OnBoarding:React.FC<{finish:()=>void}> = ({finish}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const slideRef = useRef<Carousel<any> | null>(null);

    const _finishOnboarding = () => {
        finish()
    }

    const nextSlide = () => {
        if (slideIndex > 0) {
            _finishOnboarding()
        } else {
            slideRef.current?.snapToNext()
        }
    }

    const imageSize = Math.ceil(ScreenSize.vw * 0.8)

    // @ts-ignore
    const _renderItem = ({item}) => {
        return (
            <Box flex={1} alignItems="center" justifyContent="center" position="relative">
                <Pressable onPress={_finishOnboarding} position="absolute" top={0} right={0} p={4}>
                    <Text color="gray.500">Bỏ qua</Text>
                </Pressable>

                <Box width={imageSize} height={imageSize} rounded={"lg"} bgColor="gray.200">
                    {
                        item.id === 1 ?<ImageStatic uri={StaticImages.onboarding_1}  width={imageSize} height={imageSize}/>
                        : <ImageStatic uri={StaticImages.onboarding_2}  width={imageSize} height={imageSize}/>
                    }

                </Box>


                <Box alignItems="center" mt={8} p={8}>
                    <Text fontSize="2xl">{item.title}</Text>
                    <Text fontSize="md" mt={3} color="gray.600" textAlign="center">{item.body}</Text>
                </Box>
            </Box>
        );
    };

    return (
        <Box flex={1} position="relative" alignItems="center" justifyContent="center" safeArea>
            <Carousel
                ref={slideRef}
                layout={'default'}
                loop={false}
                autoplay={false}
                data={[
                    {
                        id:1,
                        title: "Sơn Kim Loyalty app",
                        body: "A flagship application pushing the frontier of mass adoption. A super app for general public to earn",
                    },
                    {
                        id:2,
                        title: "OnBoarding title 2",
                        body: "2 - This is onboarding description content. It can be max 100 charaters",
                    }
                ]}
                renderItem={_renderItem}
                sliderWidth={ScreenSize.vw}
                itemWidth={ScreenSize.vw}
                inactiveSlideScale={1}
                onSnapToItem={setSlideIndex}
            />

            <Box p={8} position="absolute" bottom={0} left={0} right={0}>
                <MyButton onPress={nextSlide} size="lg">Tiếp tục</MyButton>
            </Box>
        </Box>
    );
};


export default OnBoarding
