import React from "react";
import {Box, Center, Text, VStack} from "native-base";
import {ScreenSize} from "../../../share";
import {ImageStatic} from "../../index";
import Image from "../../atoms/image";

const fullWidth = ScreenSize.vw;

const cardRegisterWidth = fullWidth / 4;
const imgSize = cardRegisterWidth-10

const CardBUPoint: React.FC<{ point: string, uri: any }> = ({point, uri}) => {
    return (
        <Box
            borderRadius={16}
            borderWidth={2}
            py={2}
            borderColor={"muted.300"}
            width={cardRegisterWidth}
            alignItems="center">
            <Image
                uri={uri}
                width={imgSize}
                height={imgSize}
            />
            <Box >
                <Text fontSize="md" bold fontWeight="semibold" textAlign="center">
                    {point}
                </Text>
                <Text mt={2} color="muted.500" fontSize="xs" textAlign="center">
                    điểm
                </Text>
            </Box>
        </Box>
    );
};

export default CardBUPoint;
