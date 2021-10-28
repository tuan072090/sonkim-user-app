import React from "react";
import PropTypes from "prop-types";
import { Box, Center, HStack, Pressable, Text, VStack } from "native-base";
import {
    ChevronRightIcon,
    HistoryIcon,
    ImageStatic,
} from "../../../components";
import CardBU from "../../../components/molecules/card-bu";
import { ScreenSize, StaticImages } from "../../../share";
import { ArrowIcon } from "../../../components/atoms/icons/CommonIcons";

const fullWidth = ScreenSize.vw;
const itemTimeWidth = ScreenSize.vw / 3;
const cardRegisterWidht = fullWidth / 4;
const cardRegisterHeight = fullWidth / 2.5;
const TransationBU = () => {
    return (
        <Pressable
            p={3}
            bgColor="white"
            justifyContent="space-between"
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
                    <Box
                        borderRadius={16}
                        borderWidth={2}
                        borderColor={"muted.300"}
                        py={2}
                        width={cardRegisterWidht}
                        height={cardRegisterHeight}
                        flexDirection="column"
                        alignItems="center"
                    >
                        <VStack space={3} alignItems="center">
                            <Center h='50%'>
                                <ImageStatic
                                    uri={StaticImages.health_spa}
                                    width={88}
                                    height={88}
                                    borderRadius={100}
                                />
                            </Center>
                            <Center >
                                <Text fontSize="md" bold fontWeight="semibold" textAlign="center">
                                    260
                                </Text>
                                <Text mt={2} fontSize="xs" textAlign="center">
                                    điểm
                                </Text>
                            </Center>
                        </VStack>
                    </Box>
                </Center>
                <Center alignItems="center">
                    <Box position="relative" top="40%">
                        <ArrowIcon size={6} />
                    </Box>
                </Center>
                <Center>
                    <Box
                        borderRadius={16}
                        borderWidth={2}
                        borderColor={"muted.300"}
                        py={1}
                        width={cardRegisterWidht}
                        height={cardRegisterHeight}
                        flexDirection="column"
                        alignItems="center"
                    >
                        <VStack space={3} alignItems="center" >
                            <Center h='50%'>
                                <ImageStatic
                                    uri={StaticImages.lazada}
                                    width={88}
                                    height={88}
                                    borderRadius={100}
                                />
                            </Center>
                            <Center >
                                <Text fontSize="md" bold fontWeight="semibold" textAlign="center">
                                    260
                                </Text>
                                <Text mt={2} fontSize="xs" textAlign="center">
                                    điểm
                                </Text>
                            </Center>
                        </VStack>
                    </Box>
                </Center>
            </HStack>
        </Pressable>
    );
};

TransationBU.propTypes = {};

export default TransationBU;
