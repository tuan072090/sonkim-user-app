import React from "react";
import PropTypes from "prop-types";
import { Box, HStack, Text, VStack } from "native-base";
import { ImageStatic, LocationIcon, PhoneIcon } from "../..";
import { ScreenSize, StaticImages } from "../../../share";
import { CardStoreType } from "./cardStore.types";
// import { PhoneIcon } from "../../atoms/icons/CommonIcons";

const fullWidth = ScreenSize.vw;
const cardWidth = fullWidth / 2.3;

const CardStore: React.FC<CardStoreType> = ({
    address, id, name, phone, url
}) => {
    return (
        <VStack
            mr={4}
            width={cardWidth}
            bgColor="white"
            borderRadius={16}
            shadow={3}
            p={3}
        >
            <Box borderRadius={6} mb={3} height="20">
                <ImageStatic
                    resizeMode="cover"
                    uri={url}
                    borderRadius={16}
                    width={"100%"}
                    height={82}
                ></ImageStatic>
            </Box>
            <HStack>
                <PhoneIcon size={6} ></PhoneIcon>
                <Text ml={2} fontSize="md" color="muted.500">
                    0123456789
                </Text>
            </HStack>
            <HStack>
                <LocationIcon size={6}></LocationIcon>
                <Text ml={2} fontSize="md" color="muted.500">
                    {address}
                </Text>
            </HStack>

        </VStack>
    );
};

CardStore.propTypes = {};

export default CardStore;
