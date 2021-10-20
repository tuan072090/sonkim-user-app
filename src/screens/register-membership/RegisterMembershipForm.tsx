import React, { useContext, useState } from "react";
import { Box, Button, Heading, Input, ScrollView, Text } from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import { ScreenName, StaticImages, Translate } from "../../share";
import LanguageProvider from "../../share/context/Language";
import ListCardBU from "../../components/molecules/card-bu/ListCardBU";
import { useNavigation } from "@react-navigation/core";
import { ImageStatic } from "../../components";
import DialogMemberShip from "../../components/organisms/dialog-membership";

const RegisterMembershipForm = () => {
    const { language } = useContext(LanguageProvider.context);
    const navigation = useNavigation();


    const [open, setOpen] = useState(false);

    const _navigateForm = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.REGISTER_MEMBERSHIP_FORM);
    };

    return (
        <Box flex={1} position="relative" alignItems="center">
            <ScreenHeader
                hasBackButton={true}
                title={"Health Spa"}
                bgColor="primary.500"
            />
            <ScrollView width={"100%"}>
                <ImageStatic
                    resizeMode="cover"
                    position="relative"
                    top={0}
                    left={0}
                    width="100%"
                    height={"26%"}
                    uri={StaticImages.reg_membership_backgroud}
                />
                <Box p={5} top={0} left={0} width={"100%"} position="absolute">
                    <Heading
                        color="white"
                        fontSize="md"
                        fontWeight="semibold"
                        mb={6}
                        textAlign="center"
                    >
                        Điền thông tin đăng ký làm thẻ thành viên Health Spa
                    </Heading>
                    <Text color="secondary.500" mb={1}>
                        Mã thẻ thành viên
                    </Text>
                    <Input
                        keyboardType="phone-pad"
                        color="white"
                        fontSize="md"
                        placeholderTextColor="white"
                        bgColor="rgba(255,255,255,0.5)"
                        variant="filled"
                        p={3} mb={1}
                        size="2xl"
                        rounded="xl"
                        placeholder="Nhập mã thẻ thành viên"
                    />
                    <Text color="secondary.500" mb={1}>
                        Số điện thoại
                    </Text>
                    <Input
                        keyboardType="phone-pad"
                        color="white"
                        fontSize="md"
                        placeholderTextColor="white"
                        bgColor="rgba(255,255,255,0.5)"
                        variant="filled"
                        p={3} mb={1}
                        size="2xl"
                        rounded="xl"
                        placeholder="Nhập số điện thoại"
                    />
                </Box>
                <Box p={5}>
                    <Text fontSize="lg" fontWeight="medium" color="primary.800">
                        BU information
                    </Text>
                    <Text mt={3}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry: Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </Text>
                    <Text mt={3}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry: Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </Text>
                    <Text mt={3}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry: Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </Text>
                    <Text mt={3}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry: Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </Text>
                    <Text mt={3}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry: Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </Text>
                </Box>
                <Box mt={50}></Box>
            </ScrollView>
            <DialogMemberShip
                isOpen={open}
                onClose={() => setOpen(false)}
                logoUri={StaticImages.health_spa}
                title="Tạo thẻ thành viên thành công"
                messenge="Chúc mừng bạn đã tạo thành công
                thẻ thành viên Health Spa"
            ></DialogMemberShip>
            <Box
                width="100%"
                bgColor="white"
                padding={3}
                flexDirection="row"
                justifyContent="center"
                alignContent="center"
                px={2}
                safeAreaTop={true}
            >
                <Button
                    w="100%"
                    onPress={() => { setOpen(true) }}
                    rounded="xl"
                    py={3}
                    size="lg"
                    color='primary.500'
                // colorScheme="primary"
                >
                    Đăng ký thẻ
                </Button>
            </Box>
        </Box>
    );
};

export default RegisterMembershipForm;
