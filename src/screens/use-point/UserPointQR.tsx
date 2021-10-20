import React, { useContext, useState } from "react";
import { Box, Button, Text } from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import { ScreenName, ScreenSize, StaticImages, Translate } from "../../share";
import LanguageProvider from "../../share/context/Language";

import { useNavigation } from "@react-navigation/core";
import { QrCode } from "../../components";
import DialogMemberShip from "../../components/organisms/dialog-membership";

const qrWWidth = ScreenSize.vw - 72;
const UsePointQR = () => {
    const { language } = useContext(LanguageProvider.context);
    const navigation = useNavigation();
    const [choise, setChoise] = useState("");
    const [open, setOpen] = useState(false);

    const _navigateForm = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.LINK_MEMBERSHIP_FORM);
    };

    return (
        <Box flex={1}>
            <ScreenHeader
                hasBackButton={true}
                title={Translate[language].usePoint}
                bgColor="primary.500"
            />
            <Box p={5} flex={1} width={"100%"} alignContent="center" bgColor="white">
                <Text fontSize="lg" fontWeight="semibold" textAlign="center">
                    Mã thẻ:{" "}
                    <Text fontSize="lg" fontWeight="semibold" color="primary.500">
                        X123X123
                    </Text>
                </Text>
                <Text fontSize="md" color="muted.400" textAlign="center">
                    Vui lòng đưa mã cho nhân viên để sử dụng hoặc tích điểm
                </Text>
                <Box mt={20} alignContent="center">
                    <QrCode
                        code={"Something"}
                        size={qrWWidth}
                        alignItems="center"
                        logoUri="https://sonkim.s3.ap-southeast-1.amazonaws.com/lazada_d75ab18c1c.png?61505.40000000037"
                    />
                </Box>
            </Box>
            <DialogMemberShip
                isOpen={open}
                onClose={() => setOpen(false)}
                logoUri={StaticImages.health_spa}
                title="Tích điểm thành công"
                messenge="Bạn đã được cộng thêm 10 điềm vào thẻ thành viên Health Spa"
                footer={
                    <Button onPress={() => setOpen(false)} width={'100%'} rounded="xl" >
                        XÁC NHẬN
                    </Button>
                }
            ></DialogMemberShip>
            <Box p={5} alignContent="flex-end" bgColor="white">
                <Button width={'100%'} rounded="xl" onPress={() => setOpen(true)} >
                    open dialog
                </Button>
                <Text pb={5} underline fontSize="md" color="red.400" textAlign="center">
                    Xem lịch sử quét mã
                </Text>
            </Box>
        </Box>
    );
};

export default UsePointQR;
