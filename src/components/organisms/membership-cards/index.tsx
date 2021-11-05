import React from "react";
import {ImageBackground, StyleSheet} from "react-native";
import {ScreenName, ScreenSize, StaticImages} from "../../../share";
import {Box, Pressable, Text} from "native-base";
import {MembershipCardTypes} from "./membershipCard.types";
import {useNavigation} from "@react-navigation/core";
import Image from "../../atoms/image";

const MembershipCard: React.FC<MembershipCardTypes> = ({item, ...props}) => {
    const navigation = useNavigation();
    const {id, label,point, loyalty_program, membership_info} = item

    const cardBackground = loyalty_program.levels[0].card_background?.url

    const _navigateDetail = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.MEMBERSHIP_CARD_DETAIL_SCREEN, {id: id});
    };

    const nameOnCard = membership_info? membership_info.name : "User"
    return (
        <Pressable{...props} _pressed={{opacity: 0.5}} onPress={_navigateDetail}>
            <ImageBackground
                source={cardBackground ? {uri: cardBackground} : StaticImages.frame1}
                resizeMode="cover"
                style={styles.image}>
                <Image
                    mt={2}
                    mx={3}
                    uri={loyalty_program.avatar.url}
                    width={16}
                    height={10}
                />

                <Text px={4} color="white" fontSize="md" fontWeight="semibold">
                    Hạng {label}
                </Text>

                <Box py={3} px={4} flexDirection="row" justifyContent="space-between">
                    <Text color="white" fontSize="lg" textTransform="uppercase">
                        {nameOnCard}
                    </Text>
                    <Text color="white" fontSize="lg">
                        {point} điểm
                    </Text>
                </Box>
            </ImageBackground>
        </Pressable>
    );
};

export default MembershipCard;

const cardHeight = ScreenSize.vw / 2.68; //  tỉ lệ 2.68
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: cardHeight,
        borderRadius: 20,
        overflow: "hidden",
        justifyContent: "space-between",
    },
});
