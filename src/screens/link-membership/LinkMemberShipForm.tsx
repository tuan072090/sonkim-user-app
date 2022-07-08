import React, {useEffect, useState} from "react";
import {Box, Button, Heading, Input, ScrollView, Text} from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import {LoyaltyProgramTypes, SonkimApiService, StaticImages, useLocalStorage} from "../../share";
import {useNavigation, useRoute} from "@react-navigation/core";
import {Dialog, FullScreenLoader, Image, ImageStatic, MyButton, PressBox, Typo} from "../../components";
import {Alert} from "react-native";

const LinkMembershipForm = () => {
    const [loyaltyProgram, setLoyaltyProgram] = useState<null | LoyaltyProgramTypes>(null)
    const [loyaltyProgramsLocal] = useLocalStorage(useLocalStorage.KEY_LOCAL_LOYALTY_PROGRAMS, [])
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const {params}: any = useRoute()

    useEffect(() => {
        if (params.id) {
            SonkimApiService.GetLoyaltyProgramDetail(params.id).then(data => {
                setLoyaltyProgram(data)
            }).catch(err => {
                Alert.alert("Lỗi: " + err.message)
            })
        }
    }, [params])

    if (!loyaltyProgram) {
        return (
            <FullScreenLoader/>
        )
    }

    const BUName = loyaltyProgram.business_unit.name

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

                <Box width="100%" px={4}>
                    <Typo type="body16" color="gray.100" mb={6} textAlign="center" numberOfLines={2}>
                        Điền thông tin để liên kết thẻ thành viên {BUName}
                    </Typo>
                </Box>

                <Box width="100%" alignItems="center">
                    <Image
                        uri={loyaltyProgram.avatar.url}
                        width={88}
                        height={88}
                        mb={5}
                    />
                </Box>
                <Box p={5}>
                    <Typo type="body14" color="secondary.500" mb={1}>
                        Mã thẻ thành viên
                    </Typo>
                    <Input
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
                    <MyButton my={5} onPress={() => {setOpen(true)}} _text={{color: "gray.500"}} bgColor="white" opacity={70}>
                        LIÊN KẾT
                    </MyButton>
                </Box>
            </Box>
            <Dialog
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Liên kết thẻ thành viên thành công"
                messenge={`Chúc mừng bạn đã liên kết thành công
                thẻ thành viên ${BUName}`}
            />

            {
                loyaltyProgramsLocal && <Box width="100%" safeAreaBottom={true}>
                    <Text textAlign="left" color="secondary.500"  px={5}  mb={1}>
                        Mã thẻ thành viên
                    </Text>

                    <ScrollView horizontal={true}>
                        <Box flexDirection="row" pl={5} pb={2}>
                            {loyaltyProgramsLocal.map((item: LoyaltyProgramTypes, index: number) => (
                                <PressBox
                                    borderWidth={1}
                                    borderColor="white"
                                    borderRadius={10}
                                    bgColor="white"
                                    mr={3}
                                    key={index}>
                                    <Image
                                        borderRadius={10}
                                        resizeMode="cover"
                                        uri={item.avatar.url}
                                        width={"56px"}
                                        height={"56px"}
                                    />
                                </PressBox>

                            ))}
                        </Box>
                    </ScrollView>
                </Box>
            }

        </Box>
    );
};

export default LinkMembershipForm;
