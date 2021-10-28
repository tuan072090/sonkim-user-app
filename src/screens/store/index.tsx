import React from "react";
import { Box, ScrollView } from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import { StaticImages } from "../../share";
import { ImageStatic } from "../../components";
import ListCardStore from "../../components/molecules/card-store/ListCardStore";

const StorePage = () => {
    return (
        <Box flex={1} position="relative" alignItems="center">
            <ImageStatic
                resizeMode="cover"
                position="absolute"
                bottom={0}
                left={0}
                width="100%"
                height="100%"
                uri={StaticImages.link_membership_backgroud}
            />
            <Box flex={1} width="100%">
                <ScreenHeader
                    hasBackButton={true}
                    title={"Cửa hàng Healthspa"}
                    bgColor="primary.500"
                />
                <ScrollView p={5}>
                    <ListCardStore/>
                    <Box mb={50}/>
                </ScrollView>
            </Box>
        </Box>
    );
};

export default StorePage;
