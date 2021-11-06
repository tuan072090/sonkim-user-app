import React from "react";
import {Box, Center, Text, VStack} from "native-base";
import {ScreenSize} from "../../../share";
import {ImageStatic} from "../../index";

const fullWidth = ScreenSize.vw;

const cardRegisterWidht = fullWidth / 4;
const cardRegisterHeight = fullWidth / 2.5;

const CardBUPoint: React.FC<{ point: string, uri: any }> = ({point, uri}) => {
    return (
        <Box
            borderRadius={16}
            borderWidth={2}
            borderColor={"muted.300"}
            width={cardRegisterWidht}
            height={cardRegisterHeight}
            flexDirection="column"
            alignItems="center"
        >
            <VStack space={1} p={3} alignItems="center">
                <Center h='40%'>
                    <ImageStatic
                        uri={uri}
                        width={88}
                        height={88}
                        borderRadius={100}
                    />
                </Center>
                <Center h='60%'>
                    <Text fontSize="md" bold fontWeight="semibold" textAlign="center">
                        {point}
                    </Text>
                    <Text mt={2} color="muted.500" fontSize="xs" textAlign="center">
                        điểm
                    </Text>
                </Center>
            </VStack>
        </Box>
    );
};

export default CardBUPoint;
