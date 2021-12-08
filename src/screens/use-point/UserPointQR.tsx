import React, {useState} from "react";
import {Box, Button, Text} from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import {Colors, ScreenSize, Translate, useLocalStorage} from "../../share";
import {useRoute} from "@react-navigation/core";
import {Dialog, MainLayout, MyButton, PageProps, QrCode} from "../../components";
import {ActivityIndicator} from "react-native";
import {useAppSelector} from "../../redux/store";

const QrCodeSize = Math.ceil(ScreenSize.vw * 0.7);

const UsePointQR: React.FC<PageProps> = MainLayout(() => {
    const {language} = useAppSelector(state => state.settings)
    const [open, setOpen] = useState(false);
    const [loyaltyPrograms, setLoyaltyPrograms] = useLocalStorage(useLocalStorage.KEY_LOCAL_LOYALTY_PROGRAMS, [])
    const {params}: any = useRoute()

    //  @ts-ignore
    const loyaltyProgram = loyaltyPrograms ? loyaltyPrograms.find(item => item.id === params["id"]) : null

    return (
        <Box flex={1}>
            <ScreenHeader
                hasBackButton={true}
                title={Translate[language].usePoint}
                bgColor="primary.500"
            />

            {
                !loyaltyProgram ? <Box p={5} flex={1} width={"100%"} alignContent="center" bgColor="white">
                        <ActivityIndicator color={Colors.primary["500"]}/>
                    </Box>
                    : <Box p={5} flex={1} width={"100%"} alignContent="center" bgColor="white">
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
                                size={QrCodeSize}
                                alignItems="center"
                                logoUri={loyaltyProgram.avatar.url}
                            />
                        </Box>
                    </Box>
            }

            <Box p={5} alignContent="flex-end" bgColor="white">
                <MyButton width={'100%'} onPress={() => setOpen(true)}>
                    open dialog
                </MyButton>
                <Text py={5} underline fontSize="md" color="red.400" textAlign="center">
                    Xem lịch sử quét mã
                </Text>
            </Box>

            <Dialog
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Tích điểm thành công"
                messenge="Bạn đã được cộng thêm 10 điềm vào thẻ thành viên Health Spa"
                footer={
                    <Button onPress={() => setOpen(false)} width={'100%'} rounded="xl">
                        XÁC NHẬN
                    </Button>
                }
            />
        </Box>
    );
})

UsePointQR.defaultProps = {authRequire: true}

export default UsePointQR;
