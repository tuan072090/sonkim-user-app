import React, {memo} from "react";
import {Box, Pressable, Text} from "native-base";
import Carousel from 'react-native-snap-carousel';
import {Colors, ScreenSize, StoreTypes} from "../../../share";
import {ActivityIndicator, StyleSheet} from "react-native";
import {Image, LocationIcon, PressBox} from "../../../components";

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
    }

    // @ts-ignore
    const _renderItem = ({item}) => {
        return (
            <PressBox onPress={_onStorePress} width={itemWidth} bgColor="white" rounded="lg" p={2} ml={2} shadow={"3"}>
                <Box flex={1}>
                    <Image
                        uri={item.avatar?.url}
                        style={styles.image}
                    />
                </Box>
                <Box mt={3} flexDirection="row">
                    <Box mt={1}><LocationIcon size={4}/></Box>

                    <Text px={2} numberOfLines={2} fontSize="sm" fontWeight="semibold">
                        {item.name}
                    </Text>
                </Box>
            </PressBox>
        );
    }

    return (
        <Box width="100%">
            {
                !stores ? <ActivityIndicator color={Colors.primary["500"]} size="large"/>
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
