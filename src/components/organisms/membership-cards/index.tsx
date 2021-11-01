import React from "react";
import {ImageBackground, StyleSheet} from "react-native";
import {ScreenName, ScreenSize, StaticImages} from "../../../share";
import {ImageStatic} from "../../index";
import {Box, Button, Pressable, Text} from "native-base";
import {MembershipCardTypes} from "./membershipCard.types";
import {IBoxProps} from "native-base/lib/typescript/components/primitives/Box/types";
import {useNavigation} from "@react-navigation/core";
import Image from "../../atoms/image";

const MembershipCard: React.FC<MembershipCardTypes> = ({item, ...props}) => {
    const navigation = useNavigation();

    const {id, name, business_unit, levels} = item

    const cardBackground = levels[0].card_background.url

    const _navigateDetail = () => {
        console.warn("id....", id)
        // @ts-ignore
        navigation.navigate(ScreenName.BU_DETAIL_SCREEN, {businessId: id});
    };

    return (
        <Pressable
            {...props}
            _pressed={{opacity: 0.5}}
            onPress={_navigateDetail}
        >
            <ImageBackground
                source={cardBackground ? {uri: cardBackground} : StaticImages.frame1}
                resizeMode="cover"
                style={styles.image}
            >
                <Image
                    mt={2}
                    mx={3}
                    uri={business_unit.logo.url}
                    width={16}
                    height={10}
                />

                <Text px={3} color="white" fontSize="md" fontWeight="semibold">
                    Thành viên
                </Text>

                <Box p={3} flexDirection="row" justifyContent="space-between">
                    <Text color="white" fontSize="lg">
                        GS25_12345
                    </Text>
                    <Text color="primary.600" fontSize="lg">
                        120 điểm
                    </Text>
                </Box>
            </ImageBackground>
        </Pressable>
    );
};

const RegisterCard: React.FC<IBoxProps> = (props) => {
    const navigation = useNavigation();

    const _navigateRegisterCard = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.REGISTER_MEMBERSHIP_FORM);
    };

    return (
        <Box {...props}>
            <Pressable
                _pressed={{opacity: 0.5}}
                onPress={_navigateRegisterCard}>
                <ImageBackground
                    source={StaticImages.frame4}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <Box alignItems="center" width="100%">
                        <ImageStatic
                            mt={2}
                            mx={3}
                            uri={StaticImages.health_spa_nopadding}
                            width={20}
                            height={10}
                        />

                        <Box p={3} flexDirection="row" justifyContent="space-between">
                            <Button
                                bgColor="white"
                                size="lg"
                                rounded="lg"
                                _text={{color: "primary.500"}}
                            >
                                Liên kết thẻ
                            </Button>
                        </Box>
                    </Box>
                </ImageBackground>
            </Pressable>
        </Box>
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
