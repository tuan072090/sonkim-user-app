import React from "react";
import PropTypes from "prop-types";
import { Box, HStack, Text, VStack } from "native-base";
import { ImageStatic, LocationIcon, PhoneIcon } from "../..";
import { ScreenSize, StaticImages } from "../../../share";
import { CardStoreType } from "./cardStore.types";
// import { PhoneIcon } from "../../atoms/icons/CommonIcons";

const fullWidth = ScreenSize.vw;
const cardWidth = fullWidth / 2.3;
const cardHeight = fullWidth / 2.1;


const CardStore: React.FC<CardStoreType> = ({
    address = '129 Nguyễn Đình Chính, Phú Nhuận, HCM', id, name, phone, url
}) => {
    return (
        <VStack
            width={cardWidth}
            bgColor="white"
            borderRadius={16}
            height={cardHeight}
            shadow={3}
            p={2}
        >
            <Box borderRadius={6} mb={3} >
                <ImageStatic
                    resizeMode="cover"
                    uri={url ? url : StaticImages.banner_bu_detail}
                    borderRadius={16}
                    width={"100%"}
                    height={82}
                ></ImageStatic>
            </Box>
            <HStack>
                <PhoneIcon size={4} ></PhoneIcon>
                <Text ml={2} fontSize="sm" color="muted.500">
                    0123456789
                </Text>
            </HStack>
            <HStack>
                <LocationIcon size={4}></LocationIcon>
                <Text ml={2} fontSize="sm" color="muted.500" noOfLines={2}>
                    {address}
                </Text>
            </HStack>
        </VStack>
    );
};

CardStore.propTypes = {};

export default CardStore;
