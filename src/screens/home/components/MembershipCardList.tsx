import React, {useEffect} from "react";
import {Box, Text} from "native-base";
import {LoyaltyCard, MembershipCard, SKMCard} from "../../../components";
import {Colors, SonkimApiService, useLocalStorage} from "../../../share";
import {ActivityIndicator, Alert} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import GSShopCard from "../../../components/organisms/membership-cards/GSSHOP-card";
import GS25Card from "../../../components/organisms/membership-cards/GS25-card";
import JardinCard from "../../../components/organisms/membership-cards/JARDIN-card";
import WataminCard from "../../../components/organisms/membership-cards/WATAMI-card";

export const MembershipCardList = () => {

    return (
        <Box p={4} mt={4}>
            <Text fontSize="xl" color="primary.500">
                Thẻ thành viên
            </Text>
            <Text fontSize="md" color="gray.500" mb={1}>
                Danh sách thẻ thành viên của Sơn Kim
            </Text>

            <SKMCard type="jockey" mb={3}/>

            <SKMCard type="vera" mb={3}/>

            <GSShopCard mb={3}/>

            <GS25Card mb={3}/>

            <JardinCard mb={3}/>

            <WataminCard mb={3}/>
        </Box>
    );
};
