import {Box, Heading, Text, Input, Button, KeyboardAvoidingView} from 'native-base'
import React, {useState} from 'react'
import {Platform} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {ScreenName} from "../../../../share";
import auth from '@react-native-firebase/auth';

export const OtpForm = () => {
    const [otp, setOtp] = useState("")
    const navigation = useNavigation();

    const _submitOTP = async () => {
        const confirmation = await auth().signInWithPhoneNumber("+84966499006");

        console.log("confirmation....", confirmation)

        //  @ts-ignore
        navigation.navigate(ScreenName.REGISTER_SCREEN)
    }

    const otpArrNum = otp.split("")

    return (
        <KeyboardAvoidingView
            h={{
                base: "400px",
                lg: "auto",
            }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Heading color="white" size="md" fontWeight="medium" textTransform="uppercase" textAlign="center">NHẬP MÃ
                XÁC THỰC</Heading>

            <Text color="secondary.500" mt={1} mb={6} textAlign="center">Mã xác thực đã được gửi về sđt
                0123456789</Text>

            <Box position="relative" py={3}  flexDirection="row" justifyContent="center">
                {
                    [1, 2, 3, 4, 5, 6].map((item, key) => {
                        return (
                            <Box justifyContent="center"
                                 alignItems="center"
                                 mx={1}
                                 width={12}
                                 height={12}
                                 borderWidth={1}
                                 borderRadius={10}
                                 borderColor="white"
                                 bgColor="rgba(255, 255, 255, 0.5)"
                                 key={key}
                            >
                                <Text color="white" fontSize="2xl" fontWeight="bold">{otpArrNum[key] || ""}</Text>
                            </Box>
                        )
                    })
                }
                {/*  hidden input  */}
                <Box width="100%" height={16} top={1} position="absolute">
                    <Input
                        autoFocus={true}
                        onChangeText={(text) => setOtp(text)}
                        maxLength={6}
                        fontSize="xl"
                        width="100%"
                        height="100%"
                        letterSpacing={4}
                        borderWidth={0}
                        bgColor="transparent"
                        color="transparent"
                        caretHidden={true}
                    />
                </Box>
            </Box>

            <Text color="red.500" textAlign="center" fontSize="md">Mã xác thực không đúng</Text>

            <Text py={5} color="white" textAlign="center">Không nhận được mã? <Text px={3} color="white" textDecoration="underline" fontWeight="semibold">Gửi lại</Text></Text>

            <Box p={3}>
                <Button onPress={_submitOTP} my={5} p={3} rounded="xl" size="lg" bgColor="white" _pressed={{ bgColor: "rgba(255,255,255,0.8)" }}
                        _text={{ color: "gray.500" }} opacity={70}>Xác thực</Button>
            </Box>
        </KeyboardAvoidingView>
    )
}
