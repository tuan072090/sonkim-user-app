import React from "react";
import { Pressable, Text } from "native-base";
import { ScreenSize } from "../../../share";
import { ImageStatic } from "../..";
import { cardBuType } from "./cardBU.types";

const fullWidth = ScreenSize.vw;

const cardRegisterWidht = fullWidth / 3.5;
const cardRegisterHeight = fullWidth / 2.5;

const CardBU: React.FC<cardBuType> = ({ url, name }) => {
    return (
        <Pressable
            borderRadius={16}
            overflow="hidden"
            borderWidth={2}
            borderColor="muted.300"
            py={3}
            width={cardRegisterWidht}
            height={cardRegisterHeight}
            _pressed={{ opacity: 0.5 }}
            _focus={{ opacity: 0.5 }}
            flexDirection="column"
            alignItems="center"
        >
            <ImageStatic uri={url} width={16} height={16} borderRadius={100} />
            <Text mt={2} fontSize="xl" textTransform="uppercase" textAlign="center">
                {name}
            </Text>
        </Pressable>
    );
};

export default CardBU;
