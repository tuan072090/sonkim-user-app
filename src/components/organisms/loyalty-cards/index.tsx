import React from "react";
import {ImageBackground, StyleSheet} from "react-native";
import {ScreenName, ScreenSize, StaticImages} from "../../../share";
import {Box, Button} from "native-base";
import {LoyaltyCardTypes} from "./loyaltyCard.types";
import {useNavigation} from "@react-navigation/core";

/**
 *  Loyalty card is a card that only show information of loyalty program but not user
 */
const LoyaltyCard: React.FC<LoyaltyCardTypes> = ({item, ...props}) => {
    const navigation = useNavigation();
    const {id, avatar, business_unit, levels} = item

    const _navigateToDetail = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.MEMBERSHIP_REGISTER_SCREEN, {id: id});
    };

    const cardBackground = levels[0]?.card_background?.url

    return (
        <Box {...props}>
            <ImageBackground
                source={cardBackground ? {uri: cardBackground} : StaticImages.frame4}
                resizeMode="stretch"
                style={styles.image}
            >
                <Box alignItems="center" width="full" height="full" justifyContent="flex-end">

                    <Box p={3} flexDirection="row">
                        <Button
                            onPress={_navigateToDetail}
                            _pressed={{bgColor: "primary.100"}}
                            bgColor="white"
                            size="lg"
                            rounded="lg"
                            _text={{color: "primary.500"}}>
                            Liên kết thẻ
                        </Button>
                    </Box>
                </Box>
            </ImageBackground>
        </Box>
    );
};

export default LoyaltyCard;

const cardHeight = ScreenSize.vw / 2.68; //  tỉ lệ 2.68
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: cardHeight,
        borderRadius: 20,
        overflow: "hidden",
    },
});
