import React, { useContext, useState } from "react";
import {
    Box,
    Button,
    Heading,
    Input,
    ScrollView,
    StatusBar,
    Text,
} from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import { ScreenName, StaticImages, Translate } from "../../share";
import LanguageProvider from "../../share/context/Language";
import ListCardBU from "../../components/molecules/card-bu/ListCardBU";
import { useNavigation } from "@react-navigation/core";
import { ImageStatic } from "../../components";
import DialogMemberShip from "../../components/organisms/dialog-membership";

const LinkMembershipForm = () => {
    const { language } = useContext(LanguageProvider.context);
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);

    const _navigateForm = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.REGISTER_MEMBERSHIP_FORM);
    };

    const listImgBU = [
        StaticImages.health_spa,
        StaticImages.kyo_watamin,
        StaticImages.jardin,
    ];

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
            <Box flex={1} width="100%">
                <ScreenHeader
                    hasBackButton={true}
                    title={"Health Spa"}
                    bgColor="primary.500"
                />
                <Heading
                    color="white"
                    fontSize="md"
                    fontWeight="semibold"
                    mb={6}
                    textAlign="center"
                >
                    Điền thông tin để liên kết thẻ thành viên Health Spa
                </Heading>
                <Box width="100%" alignItems="center">
                    <ImageStatic
                        uri={StaticImages.health_spa}
                        width={88}
                        height={88}
                        mb={8}
                    />
                </Box>
                <Box p={5}>
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
                        p={3}
                        mb={5}
                        size="2xl"
                        rounded="xl"
                        placeholder="Nhập mã thẻ thành viên"
                    />
                    <Button
                        my={5}
                        p={3}
                        rounded="xl"
                        size="lg"
                        onPress={() => {
                            setOpen(true);
                        }}
                        bgColor="white"
                        _text={{ color: "white" }}
                        opacity={70}
                    >
                        LIÊN KẾT
                    </Button>
                </Box>
            </Box>
            <DialogMemberShip
                isOpen={open}
                onClose={() => setOpen(false)}
                logoUri={StaticImages.health_spa}
                title="Liên kết thẻ thành viên thành công"
                messenge="Chúc mừng bạn đã liên kết thành công
                thẻ thành viên Health Spa"
            ></DialogMemberShip>

            <Box width="100%" px={5} safeAreaTop={true}>
                <Text textAlign="left" color="secondary.500" mb={1}>
                    Mã thẻ thành viên
                </Text>
                <Box flexDirection="row">
                    {listImgBU.map((item) => (
                        <ImageStatic
                            mr={3}
                            key={item}
                            resizeMode="cover"
                            uri={item}
                            width={'56px'}
                            height={'56px'}
                            mb={8}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default LinkMembershipForm;
