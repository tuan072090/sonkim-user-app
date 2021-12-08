import React, {useEffect, useState} from "react";
import {Box, Heading, Input, KeyboardAvoidingView, Pressable, ScrollView, Text} from 'native-base'
import {CommonActions, useNavigation} from "@react-navigation/native";
import {ScreenName, ScreenSize, SonkimApiService, useLocalStorage, Validator} from "../../../../share";
import {Alert, Platform} from "react-native";
import MyError from "../../../../share/services/error";
import {MyButton} from "../../../index";
import {useAppDispatch} from "../../../../redux/store";
import {UpdateAccessToken} from "../../../../redux/reducers/auth";

export const LoginForm = () => {
    const appDispatch = useAppDispatch()
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false)
    const [phoneLocal, savePhoneLocal] = useLocalStorage("phone", "")

    useEffect(() => {
        if (phoneLocal !== null) {
            setPhone(phoneLocal)
        }
    }, [phoneLocal])

    const _submitPhone = async () => {
        try {
            //  validate
            if (!Validator.isValidPhone(phone) || !password || password.length < 6) {
                throw new MyError("Điện thoại hoặc mật khẩu không hợp lệ", 400)
            }
            setLoading(true)
            const {jwt, user} = await SonkimApiService.Login({phone, password})
            appDispatch(UpdateAccessToken(jwt))

            Alert.alert("Đăng nhập thành công")
            setLoading(false)

            //  remove login screen from stack
            navigation.dispatch((state) => {

                state.routes.pop()

                const newRoutes = [...state.routes]
                return CommonActions.reset({
                    ...state,
                    routes: newRoutes,
                    index: newRoutes.length - 1,
                });
            });

        } catch (err) {
            setLoading(false)
            Alert.alert(err.message)
        }
    }

    const _navToRegister = () => {
        savePhoneLocal(phone)
        // @ts-ignore
        navigation.navigate(ScreenName.REGISTER_SCREEN, {phone: phone})
    }

    const _navToResetPass = () => {
        savePhoneLocal(phone)
        // @ts-ignore
        navigation.navigate(ScreenName.RESET_PASSWORD_SCREEN, {phone: phone})
    }

    const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;

    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={keyboardVerticalOffset}
            behavior="position">
            <ScrollView>
                <Box p={4}>
                    <Heading color="white" size="md" fontWeight="medium" mb={6} textTransform="uppercase"
                             textAlign="center">ĐĂNG
                        Nhập</Heading>

                    <Text color="secondary.500" mb={1}>Điện thoại</Text>

                    <Input
                        value={phone}
                        onChangeText={text => setPhone(text)}
                        keyboardType="phone-pad"
                        color="white"
                        fontSize="md"
                        placeholderTextColor="white"
                        bgColor="rgba(255,255,255,0.5)"
                        variant="filled"
                        clearButtonMode="while-editing"
                        p={3}
                        size="2xl" rounded="xl"
                        placeholder="Nhập số điện thoại"
                    />

                    <Text color="secondary.500" mt={4} mb={1}>Mật khẩu</Text>

                    <Input
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}
                        color="white"
                        fontSize="md"
                        placeholderTextColor="white"
                        bgColor="rgba(255,255,255,0.5)"
                        variant="filled"
                        p={3}
                        size="2xl" rounded="xl"
                        placeholder="Nhập mật khẩu"
                    />

                    <Pressable onPress={_navToResetPass} alignItems="flex-end">
                        <Text pt={1} pb={5} color="white" underline>Quên mật khẩu?</Text>
                    </Pressable>
                    <MyButton isLoading={loading} onPress={_submitPhone} my={5} p={3} rounded="xl" size="lg"
                              bgColor="white"
                              _text={{color: "gray.500"}} opacity={70}>Đăng nhập</MyButton>

                    <Box flexDirection="row" alignItems="center" justifyContent="center">
                        <Text color="white">Chưa có tài khoản?</Text>
                        <Text onPress={_navToRegister} color="white" fontSize="md" px={3} underline>Đăng ký</Text>
                    </Box>
                </Box>
                <Box style={{width: ScreenSize.vw, height: 40}}/>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
