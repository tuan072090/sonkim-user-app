import React, {useEffect, useRef, useState} from "react";
import {Box, Button, Heading, Input, KeyboardAvoidingView, ScrollView, Text} from 'native-base'
import {CommonActions, useNavigation, useRoute} from '@react-navigation/native';
import {Formatter, ScreenName, SonkimApiService, useLocalStorage, Validator} from "../../../../share";
import {Alert, Platform} from "react-native";
import {useAppDispatch} from "../../../../redux/store";
import {UpdateAccessToken} from "../../../../redux/reducers/auth";

export const RegisterForm = () => {
    const appDispatch = useAppDispatch()
    const navigation = useNavigation();
    const route = useRoute()
    const {params} = route
    const [phoneLocal] = useLocalStorage("phone", "")
    const formRef = useRef({phone: "", email: "", password: "", confirmPassword: ""})
    const [isProcessing, setProcessing] = useState(false)
    const [{emailValid, passwordValid, confirmPasswordValid}, setFormValid] = useState({
        emailValid: "",
        passwordValid: "",
        confirmPasswordValid: ""
    })

    useEffect(() => {
        // @ts-ignore
        if (typeof params["idToken"] !== "undefined") {
            _register()
        }
    }, [params])

    useEffect(() => {
        if (phoneLocal !== null) {
            if (phoneLocal.length === 0) {
                // @ts-ignore
                navigation.navigate(ScreenName.PHONE_INPUT_SCREEN)
            } else {
                formRef.current.phone = phoneLocal
            }
        }
    }, [phoneLocal])

    const _onInputChange = (name: "password" | "confirmPassword" | "email", value: string) => {
        formRef.current[name] = value
        const formValid = {emailValid, passwordValid, confirmPasswordValid}
        // @ts-ignore
        formValid[name + "Valid"] = ""
        setFormValid(formValid)
    }

    const _submit = async () => {
        try {
            setProcessing(true)

            const {phone, email, password, confirmPassword} = formRef.current
            //  validate
            const formValid = {emailValid, passwordValid, confirmPasswordValid}
            let isValid = true

            if (!email || !Validator.isValidEmail(email)) {
                formValid.emailValid = "Email kh??ng h???p l???";
                isValid = false
            }

            if (!password || password.length < 6) {
                formValid.passwordValid = "M???t kh???u ph???i ??t nh???t 6 k?? t???";
                isValid = false
            }

            if (confirmPassword !== password) {
                formValid.confirmPasswordValid = "M???t kh???u kh??ng kh???p";
                isValid = false
            }
            setFormValid(formValid)
            setProcessing(false)

            if (!isValid) return;

            // @ts-ignore
            navigation.navigate(ScreenName.OTP_SCREEN, {phone: phone, action: "register"})
        } catch (err) {
            setProcessing(false)
        }
    }

    const _register = async () => {
        try {
            const {phone, email, password, confirmPassword} = formRef.current

            // @ts-ignore
            const {jwt, user} = await SonkimApiService.Register({idToken: params.idToken, password, email})

            appDispatch(UpdateAccessToken(jwt))
            Alert.alert("????ng k?? th??nh c??ng, vui l??ng thi???t l???p t??i kho???n")

            //  remove register screen from stack
            navigation.dispatch((state) => {
                state.routes.pop()

                const newRoutes = [...state.routes]

                return CommonActions.reset({
                    ...state,
                    routes: newRoutes,
                    index: newRoutes.length - 1,
                });
            });

            // @ts-ignore
            navigation.navigate(ScreenName.USER_INFO)
        } catch (err) {
            Alert.alert(err.message)
        }
    }

    const _navToLogin = () => {
        //  remove register screen from stack
        // navigation.dispatch((state) => {
        //     state.routes.pop()
        //
        //     const newRoutes = [...state.routes]
        //
        //     return CommonActions.reset({
        //         ...state,
        //         routes: newRoutes,
        //         index: newRoutes.length - 1,
        //     });
        // });
        // @ts-ignore
        navigation.navigate(ScreenName.LOGIN_SCREEN)
    }

    const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;

    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={keyboardVerticalOffset}
            behavior="position">
            <ScrollView p={4}>
                <Box flex={1} px={3}>
                    <Heading color="white" size="md" fontWeight="medium" mb={6} textTransform="uppercase"
                             textAlign="center">
                        ????NG K?? T??I KHO???N M???I
                    </Heading>

                    <Text fontSize="md" color="secondary.500" textAlign="center" my={3} fontWeight="bold">
                        {phoneLocal ? Formatter.FormatPhoneNumber(phoneLocal) : ""}
                    </Text>

                    <Text color="secondary.500" mb={1} mt={2}>Email</Text>
                    <Input onChangeText={(text) => _onInputChange("email", text)}
                           color="white"
                           autoCapitalize={"none"}
                           fontSize="md"
                           clearButtonMode="while-editing"
                           placeholderTextColor="white"
                           bgColor="rgba(255,255,255,0.5)"
                           variant="filled"
                           p={3}
                           size="2xl" rounded="xl"
                           placeholder="Nh???p email"/>
                    <Text color="red.500" fontSize="sm" mt={1}>{emailValid}</Text>

                    <Text color="secondary.500" mb={1} mt={2}>M???t kh???u</Text>
                    <Input onChangeText={(text) => _onInputChange("password", text)}
                           color="white"
                           fontSize="md"
                           placeholderTextColor="white"
                           bgColor="rgba(255,255,255,0.5)"
                           variant="filled"
                           p={3}
                           size="2xl" rounded="xl"
                           placeholder="Nh???p m???t kh???u"/>
                    <Text color="red.500" fontSize="sm" mt={1}>{passwordValid}</Text>

                    <Text color="secondary.500" mb={1} mt={2}>Nh???p l???i m???t kh???u</Text>
                    <Input onChangeText={(text) => _onInputChange("confirmPassword", text)}
                           color="white"
                           fontSize="md"
                           placeholderTextColor="white"
                           bgColor="rgba(255,255,255,0.5)"
                           variant="filled"
                           p={3}
                           size="2xl" rounded="xl"
                           placeholder="Nh???p l???i m???t kh???u"/>
                    <Text color="red.500" fontSize="sm" mt={1}>{confirmPasswordValid}</Text>


                    <Button onPress={_submit} my={10} p={3} isLoading={isProcessing} rounded="xl" size="lg"
                            bgColor="white"
                            _pressed={{bgColor: "rgba(255,255,255,0.8)"}}
                            _text={{color: "gray.500"}} opacity={70}>X??c nh???n</Button>

                    <Box flexDirection="row" alignItems="center" justifyContent="center">
                        <Text color="white">???? c?? t??i kho???n?</Text>
                        <Text onPress={_navToLogin} color="white" fontSize="md" px={3} underline>????ng nh???p</Text>
                    </Box>
                </Box>
                {/*<Box style={{width: ScreenSize.vw, height: 400}}/>*/}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
