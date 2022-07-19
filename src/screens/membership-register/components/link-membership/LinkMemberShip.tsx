import React, {useState} from "react";
import {Box, Button, Heading, Input, Text} from "native-base";
import {Colors, LoyaltyProgramTypes, ScreenName, StaticImages} from "../../../../share";
import ScreenHeader from "../../../../components/organisms/screen-header";
import {useNavigation} from "@react-navigation/core";
import {Dialog, Image, ImageStatic, MyButton} from "../../../../components";

type LinkMemberShipTypes = {
    loyaltyProgram: LoyaltyProgramTypes,
}
export const LinkMemberShip: React.FC<LinkMemberShipTypes> = ({loyaltyProgram}) => {

    const navigation = useNavigation();
    const [open, setOpen] = useState(false);

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
                    title={loyaltyProgram.name}
                    bgColor="primary.500"
                />
                <Heading
                    color="white"
                    fontSize="md"
                    fontWeight="semibold"
                    mb={6}
                    textAlign="center"
                >
                    Điền thông tin để liên kết thẻ thành viên
                </Heading>
                <Box width="100%" alignItems="center">
                    <Image
                        uri={loyaltyProgram.avatar.url}
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
                    <MyButton
                        onPress={() => {setOpen(true)}}
                        bgColor={"white"}
                        _text={{ color: "primary.500" }}>LIÊN KẾT</MyButton>
                </Box>
            </Box>
            <Dialog
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Liên kết thẻ thành viên thành công"
                messenge={`Chúc mừng bạn đã liên kết thành công
                thẻ thành viên ${loyaltyProgram.name}`}
            />

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
                            width={"56px"}
                            height={"56px"}
                            mb={8}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
