import React, { useContext, useState } from "react";
import { Box, Button, Input, ScrollView, Text } from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import { StaticImages, Translate } from "../../share";
import LanguageProvider from "../../share/context/Language";
import {Dialog, ImageStatic} from "../../components";
import {
    PointExchangericon,
    ArrowDropDownIcon,
} from "../../components/atoms/icons/CommonIcons";
import DialogPointChange from "../../components/organisms/dialog-point-exchange";
import { Pressable } from "react-native";

const TransferPointPage = () => {
    const [open, setOpen] = useState(false);
    const [isTo, setIsTo] = useState<boolean>(false);
    const [isFrom, setIsFrom] = useState<boolean>(false);
    const [tranfer, setTranfer] = useState<string>("");
    const [toPoint, setToPoint] = useState<string>("");
    const [fromPoint, setFromPoint] = useState<string>("");
    const { language } = useContext(LanguageProvider.context);


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
            <ScrollView width={"100%"}>
                <Box p={5} width={"100%"}>
                    <Text
                        color="white"
                        mb={3}
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
                                mb={2}
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
                        {toPoint ? (
                            <Box
                                alignItems="center"
                                bgColor="primary.500"
                                py="2"
                                borderRadius={12}
                                mb={1}
                            >
                                Số điểm hiện có: 300 điểm
                            </Box>
                        ) : null}
                        <Text color="muted.400" mb={1}>
                            Số điểm cần đổi
                        </Text>
                        <Input
                            color="muted.400"
                            fontSize="md"
                            variant="outline"
                            value={tranfer}
                            onChange={(event: any) => setTranfer(event.target.value)}
                            placeholderTextColor="muted.400"
                            p={3}
                            size="2xl"
                            borderRadius={12}
                            placeholder="Nhập số điểm cần đổi"
                        />
                        {tranfer && (
                            <Text color="error.500" mb={1}>
                                *Vượt quá số điểm hiện có của bạn
                            </Text>
                        )}
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
                        mb={3}
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
                                mb={2}
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
                        {fromPoint && toPoint && tranfer ? (
                            <Box
                                alignItems="center"
                                bgColor="yellow.500"
                                py="2"
                                borderRadius={12}
                                mb={1}
                            >
                                Số điểm được nhận: 416 điểm
                            </Box>
                        ) : null}
                        {fromPoint && toPoint ? (
                            <Text mb={1}>
                                1 điểm {fromPoint} = 1,6 điểm {toPoint}
                            </Text>
                        ) : null}
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
                <Dialog
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    title="Xác nhận đổi điểm"
                    messenge="Bấm xác nhận để đổi 260 điểm từ thẻ tích điểm Health Spa của bạn tới thẻ tích điểm Lazada"
                    footer={<Button.Group space={5}>
                        <Button width={'45%'} onPress={() => setOpen(false)} rounded="xl" bgColor="info.100" _text={{ color: "primary.500" }}>
                            hủy
                        </Button>
                        <Button width={'45%'} rounded="xl" >
                            Xác nhận
                        </Button>
                    </Button.Group>
                    }
                />
            </ScrollView>

            <Box
                width="100%"
                padding={5}
                flexDirection="row"
                justifyContent="flex-end"
                alignContent="center"
                px={5}
                safeAreaTop={true}
            >
                <Button
                    onPress={() => {
                        setOpen(true);
                    }}
                    w="100%"
                    rounded="xl"
                    py={3}
                    size="lg"
                    color="primary.500"
                >
                    Đổi điểm
                </Button>
            </Box>
        </Box>
    );
};
export default TransferPointPage;
