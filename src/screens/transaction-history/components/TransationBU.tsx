import React from "react";
import { Box, Center, HStack, Pressable, Text, VStack } from "native-base";
import { HistoryIcon } from "../../../components";
import { StaticImages } from "../../../share";
import { ArrowIcon } from "../../../components/atoms/icons/CommonIcons";
import CardBUPoint from "../../../components/templates/list-loyalty-program/CardBUPoint";

const TransationBU = () => {
    return (
        <Pressable
            _pressed={{ opacity: 0.5 }}
            _focus={{ opacity: 0.5 }}
            p={3}
            bgColor="white"
            borderRadius={12}
            mb="3"
            shadow={1}
        >
            <HStack space={3} w="100%" alignItems="flex-start">
                <Center>
                    <Box>
                        <HistoryIcon size={4} fill={"muted.500"} />
                        <Text fontSize="xs" color="muted.500">
                            23/11/2021
                        </Text>
                        <Text fontSize="xs" color="muted.500">
                            12:00
                        </Text>
                    </Box>
                </Center>
                <Center>
                    <CardBUPoint
                        point={"260"}
                        uri={StaticImages.health_spa}
                    ></CardBUPoint>
                </Center>
                <Center alignItems="center">
                    <Box position="relative" top="40%">
                        <ArrowIcon size={6} />
                    </Box>
                </Center>
                <Center>
                    <CardBUPoint point={"260"} uri={StaticImages.lazada}></CardBUPoint>
                </Center>
            </HStack>
        </Pressable>
    );
};

TransationBU.propTypes = {};

export default TransationBU;
