import React, {useContext, useEffect, useRef, useState} from "react";
import {Button, Heading, Input, KeyboardAvoidingView, Pressable, ScrollView, Text} from 'native-base'
import {useNavigation, useRoute} from '@react-navigation/native';
import {Formatter, ScreenName, SonkimApiService, useLocalStorage} from "../../../../share";
import {Alert, Platform} from "react-native";
import MyError from "../../../../share/services/error";
import AppProvider from "../../../../share/context";

export const ResetPasswordForm = () => {
    const {dispatch} = useContext(AppProvider.context)
    const navigation = useNavigation();
    const route = useRoute()
    const {params} = route

    const [phoneLocal] = useLocalStorage("phone", "")
    const [isProcessing, setProcessing] = useState(false)
    const formRef = useRef({password: "", confirmPassword: ""})

    useEffect(() => {
        // @ts-ignore
        if (typeof params["idToken"] !== "undefined") {
            _changePassword()
        }
    }, [params])

    useEffect(() => {
        if (phoneLocal !== null) {
            if (phoneLocal.length === 0) {
                // @ts-ignore
                navigation.navigate(ScreenName.PHONE_INPUT_SCREEN)
            }
        }
    }, [phoneLocal])

    const _onInputChange = (name: "password" | "confirmPassword", value: string) => {
        formRef.current[name] = value
    }

    const _submit = () => {
        try {
            setProcessing(true)

            const {password, confirmPassword} = formRef.current

            let isValid = true
            //  validate
            if (!password || password.length < 6) {
                isValid = false
            }

            if (confirmPassword !== password) {
                isValid = false
            }
            setProcessing(false)

            if (!isValid) throw new MyError(400, "Dữ liệu không hợp lệ");

            // @ts-ignore
            navigation.navigate(ScreenName.OTP_SCREEN, {phone: phoneLocal, action: "resetPassword"})

        } catch (err) {
            Alert.alert(err.message)
        }
    }

    const _changePassword = async () => {
        try {
            const {password, confirmPassword} = formRef.current
            // @ts-ignore
            const {jwt, user} = SonkimApiService.ResetPassword({idToken: params.idToken, password, passwordConfirmation: confirmPassword})

            dispatch({
                type: AppProvider.actions.UPDATE_ACCESS_TOKEN,
                data: jwt
            })
            Alert.alert("Lấy lại mật khẩu thành công")
            navigation.goBack()
        } catch (err) {
            Alert.alert(err.message)
        }
    }

    const _goBack = () => {
        // @ts-ignore
        navigation.goBack()
    }
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;

    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={keyboardVerticalOffset}
            behavior="position"
        >
            <ScrollView p={4}>
                <Heading color="white" size="md" fontWeight="medium" mb={6} textTransform="uppercase"
                         textAlign="center">LẤY
                    LẠI MẬT KHẨU</Heading>
                <Text fontSize="md" color="secondary.500" textAlign="center" my={3} fontWeight="bold">
                    {phoneLocal ? Formatter.FormatPhoneNumber(phoneLocal) : ""}
                </Text>

                <Text color="secondary.500" mb={1}>Mật khẩu mới</Text>
                <Input onChangeText={(text) => _onInputChange("password", text)}
                       color="white"
                       fontSize="md"
                       clearButtonMode="while-editing"
                       placeholderTextColor="white"
                       bgColor="rgba(255,255,255,0.5)"
                       variant="filled"
                       p={3}
                       size="2xl" rounded="xl"
                       placeholder="Nhập mật khẩu"/>

                <Text color="secondary.500" mt={4} mb={1}>Nhập lại mật khẩu</Text>
                <Input onChangeText={(text) => _onInputChange("confirmPassword", text)}
                       color="white"
                       fontSize="md"
                       clearButtonMode="while-editing"
                       placeholderTextColor="white"
                       bgColor="rgba(255,255,255,0.5)"
                       variant="filled"
                       p={3}
                       size="2xl" rounded="xl"
                       placeholder="Nhập lại mật khẩu"
                />


                <Button onPress={_submit} my={5} p={3} isLoading={isProcessing} rounded="xl" size="lg" bgColor="white"
                        _text={{color: "gray.500"}} opacity={70}>Xác nhận</Button>

                <Pressable onPress={_goBack} flexDirection="row" alignItems="center" justifyContent="center">
                    <Text color="white" fontSize="md" px={3} underline>Huỷ bỏ</Text>
                </Pressable>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
