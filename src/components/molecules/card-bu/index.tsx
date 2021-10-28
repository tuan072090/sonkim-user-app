import React from "react";
import { Center, Pressable, Text, VStack } from "native-base";
import { ScreenSize } from "../../../share";
import { ImageStatic } from "../..";
import { cardBuType } from "./cardBU.types";

const fullWidth = ScreenSize.vw;

const cardRegisterWidht = fullWidth / 3.5;
const cardRegisterHeight = fullWidth / 2.7;

const CardBU: React.FC<cardBuType> = ({ onPress, url, name, active = true, ...pross }) => {
    return (
        <Pressable
            borderRadius={16}
            onPress={onPress}
            {...pross}
            overflow="hidden"
            borderWidth={!active ? 2 : 3}
            borderColor={!active ? 'muted.300' : 'info.700'}
            width={cardRegisterWidht}
            height={cardRegisterHeight}
            _pressed={{ opacity: 0.5 }}
            _focus={{ opacity: 0.5 }}
            flexDirection="column"
            alignItems="center"
        >
            <VStack space={1} p={3} alignItems="center">
                <Center h='40%'>
                    <ImageStatic uri={url} width={16} height={16} borderRadius={100} />
                </Center>
                <Center h='60%' alignItems="center">
                    <Text mt={2} fontSize="md" textAlign="center" >
                        {name}
                    </Text>
                </Center>
            </VStack>
        </Pressable>
    );
};

export default CardBU;
