import {Box, Button, Heading, Input, KeyboardAvoidingView, Text} from 'native-base'
import React, {useEffect, useState} from 'react'
import {Alert, Platform} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {FirebaseService, Formatter, ScreenName, useCountDown} from "../../../../share";
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import MyError from "../../../../share/services/error";

type ParamType = { phone?: string, action: "register" | "resetPassword" }

export const OtpForm = () => {
    const [otp, setOtp] = useState("")
    const [isProcessing, setProcessing] = useState(false)
    const [confirmation, seConfirmation] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null)
    const [counter, setCounter] = useCountDown(60)
    const navigation = useNavigation();
    const route = useRoute()
    // @ts-ignore
    const params: ParamType = route.params || {phone: undefined, action: "register"}

    useEffect(() => {
        if (!params.phone) {
            //  @ts-ignore
            navigation.navigate(ScreenName.PHONE_INPUT_SCREEN)
        } else {
            if (!confirmation) {
                _sendConfirmCode()
            }
        }
    }, [params])

    const _sendConfirmCode = () => {
        // @ts-ignore
        setCounter(60)
        return FirebaseService.SignInWithPhone(params.phone || "").then(confirm => {
            seConfirmation(confirm)
        }).catch(err => {
            console.log("gửi mã lỗi....", err)
            Alert.alert(err.message)
        })
    }

    const _submitOTP = async () => {
        try {
            if (!confirmation) {
                throw new MyError("Vui lòng chờ gửi mã lại", 400)
            }
            setProcessing(true)

            const response = await confirmation.confirm(otp)
            console.log("credential response...", response)

            const idToken = await response?.user.getIdToken()
            console.log("idToken....", idToken)

            if (params.action === "register") {
                // @ts-ignore
                navigation.navigate(ScreenName.REGISTER_SCREEN, {idToken: idToken})
            } else if (params.action === "resetPassword") {
                // @ts-ignore
                navigation.navigate(ScreenName.RESET_PASSWORD_SCREEN, {idToken: idToken})
            } else {
                navigation.goBack()
            }
            setProcessing(false)
        } catch (err) {
            setProcessing(false)
            Alert.alert(err.message)
        }
    }

    const {phone} = params
    const otpArrNum = otp.split("")
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;

    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={keyboardVerticalOffset}
            behavior="position"
        >
            <Heading color="white" size="md" fontWeight="medium" textTransform="uppercase" textAlign="center">NHẬP MÃ
                XÁC THỰC</Heading>

            <Text color="secondary.500" mt={1} mb={6} textAlign="center">Mã xác thực đã được gửi về sđt
                {phone ? Formatter.FormatPhoneNumber(phone) : "..."}</Text>

            <Box position="relative" py={3} flexDirection="row" justifyContent="center">
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

            <Text py={5} color="white" textAlign="center">Không nhận được mã?
                {
                    counter > 0 ? <Text px={3} color="white" textDecoration="underline">Gửi lại sau {counter}</Text>
                        : <Text onPress={_sendConfirmCode} px={3} color="white" textDecoration="underline"
                                fontWeight="semibold">Gửi lại</Text>
                }

            </Text>

            <Box p={3}>
                <Button onPress={_submitOTP} my={5} isLoading={isProcessing} p={3} rounded="xl" size="lg"
                        bgColor="white" _pressed={{bgColor: "rgba(255,255,255,0.8)"}}
                        _text={{color: "gray.500"}} opacity={70}>Xác thực</Button>
            </Box>
        </KeyboardAvoidingView>
    )
}
