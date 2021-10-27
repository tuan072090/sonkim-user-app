import React, { useContext, useState } from "react";
import { Box, Button, Input, Text } from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import { StaticImages, Translate } from "../../share";
import LanguageProvider from "../../share/context/Language";
import { ImageStatic } from "../../components";
import {
    PointExchangericon,
    ArrowDropDownIcon,
} from "../../components/atoms/icons/CommonIcons";
import DialogPointChange from "../../components/organisms/dialog-point-exchange";
import { Pressable } from "react-native";

const TransferPointPage = () => {
    const [isTo, setIsTo] = useState<boolean>(false);
    const [isFrom, setIsFrom] = useState<boolean>(false);

    const [toPoint, setToPoint] = useState<string>("");
    const [fromPoint, setFromPoint] = useState<string>("");
    const { language } = useContext(LanguageProvider.context);

    const _isChoiseToPoint = () => {
        setIsTo(true);
        console.log("_isChoiseToPoint", isTo);
    };

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
            <ScreenHeader
                hasBackButton={true}
                title={Translate[language].tranferPoint}
                bgColor="primary.500"
            />

            <Box p={5} width={"100%"}>
                <Text
                    color="white"
                    mb={6}
                    fontSize="md"
                    fontWeight="semibold"
                    textAlign="center"
                >
                    Chọn thẻ và nhập số điểm cần đổi
                </Text>
                <Box bg="white" p={5} borderRadius={16}>
                    <Text color="muted.400" mb={1}>
                        Thương hiệu
                    </Text>
                    <Pressable onPress={() => setIsTo(true)}>
                        <Input
                            color="muted.400"
                            fontSize="md"
                            variant="outline"
                            placeholderTextColor="muted.400"
                            type="submit"
                            p={3}
                            isReadOnly
                            mb={5}
                            size="2xl"
                            value={toPoint}
                            borderRadius={12}
                            placeholder="Chọn thương hiệu"
                            InputRightElement={
                                <Box mr={5}>
                                    <ArrowDropDownIcon size={4} />
                                </Box>
                            }
                        />
                    </Pressable>

                    <Text color="muted.400" mb={1}>
                        Số điểm cần đổi
                    </Text>
                    <Input
                        type='number'
                        color="muted.400"
                        fontSize="md"
                        variant="outline"
                        placeholderTextColor="muted.400"
                        p={3}
                        mb={5}
                        size="2xl"
                        borderRadius={12}
                        placeholder="Nhập số điểm cần đổi"
                    />
                </Box>
            </Box>
            <Box width={"100%"} py={5} alignItems="center">
                <Box
                    position="relative"
                    borderWidth={0.5}
                    borderColor="white"
                    borderStyle="dashed"
                    width="100%"
                >
                    <Box
                        bg="white"
                        position="absolute"
                        top={-15}
                        right={"5%"}
                        p={"4px"}
                        borderRadius={8}
                        width="32px"
                        alignItems="center"
                    >
                        <PointExchangericon size={5} />
                    </Box>
                </Box>
            </Box>
            <Box position="relative" p={5} width={"100%"}>
                <Text
                    color="white"
                    mb={6}
                    fontSize="md"
                    fontWeight="semibold"
                    textAlign="center"
                >
                    Chọn thương hiệu cần nhận điểm
                </Text>
                <Box bg="white" p={5} borderRadius={16}>
                    <Text color="muted.400" mb={1}>
                        Thương hiệu
                    </Text>
                    <Pressable onPress={() => setIsFrom(true)}>
                        <Input
                            color="muted.400"
                            fontSize="md"
                            type="submit"
                            variant="outline"
                            placeholderTextColor="muted.400"
                            p={3}
                            mb={5}
                            size="2xl"
                            isReadOnly
                            value={fromPoint}
                            borderRadius={12}
                            placeholder="Chọn thương hiệu"
                            InputRightElement={
                                <Box mr={5}>
                                    <ArrowDropDownIcon size={4} />
                                </Box>
                            }
                        />
                    </Pressable>
                </Box>
            </Box>
            <DialogPointChange
                choiseBu={setToPoint}
                onClose={() => setIsTo(false)}
                isOpen={isTo}
            />
            <DialogPointChange
                choiseBu={setFromPoint}
                onClose={() => setIsFrom(false)}
                isOpen={isFrom}
            />
            <Box
                width="100%"
                padding={5}
                flexDirection="row"
                justifyContent="flex-end"
                alignContent="center"
                px={5}
                safeAreaTop={true}
            >
                <Button w="100%" rounded="xl" py={3} size="lg" color="primary.500">
                    Đổi điểm
                </Button>
            </Box>
        </Box>
    );
};
export default TransferPointPage;
