import React, {memo} from "react";
import {Box, Pressable, Text} from "native-base";
import Carousel from 'react-native-snap-carousel';
import {Colors, ScreenSize, StoreTypes} from "../../../share";
import {ActivityIndicator, StyleSheet} from "react-native";
import {Image, LocationIcon} from "../../../components";

const itemWidth = ScreenSize.vw / 2 - 16

interface ListStoreCardType extends React.PropsWithChildren<any>{
    stores: null | StoreTypes[]
    onStoreFocus: (index:number) => void
}

export const ListStoreCard:React.FC<ListStoreCardType> = memo(({stores, onStoreFocus}) => {

    const _onStorePress = () => {
        //  navigate to store detail
    }

    const _onSnapToItem = (index:number) => {
        onStoreFocus(index)
        console.log("snap to index", index)
    }

    // @ts-ignore
    const _renderItem = ({item}) => {
        return (
            <Pressable onPress={_onStorePress} _pressed={{opacity: 0.8}} width={itemWidth} height={itemWidth} bgColor="white" rounded="lg" p={2} ml={2} shadow={"3"}>

                <Box flex={1}>
                    <Image
                        uri={item.avatar?.url}
                        style={styles.image}
                    />
                </Box>
                <Box mt={3} flexDirection="row">
                    <Box mt={1}><LocationIcon size={4}/></Box>

                    <Text px={2} fontSize="sm" fontWeight="semibold">
                        {item.name}
                    </Text>
                </Box>
                <Box mt={3} flexDirection="row">
                    <Text px={2} fontSize="sm" fontWeight="semibold">
                        {item.contact.contact_phone}
                    </Text>
                </Box>

            </Pressable>
        );
    }


    return (
        <Box width="100%" mb={3}>

            {
                !stores ? <ActivityIndicator color={Colors.primary["500"]}/>
                : <Carousel
                        onSnapToItem={_onSnapToItem}
                        sliderWidth={ScreenSize.vw}
                        sliderHeight={300}
                        itemWidth={itemWidth}
                        data={stores}
                        // @ts-ignore
                        renderItem={_renderItem}
                        activeSlideAlignment={"start"}
                    />
            }

        </Box>
    )
})

const styles = StyleSheet.create({
    image: {
        width: itemWidth,
        height: itemWidth/2,
        resizeMode: 'cover',
        borderRadius: 8,
        overflow: "hidden"
    },
})
