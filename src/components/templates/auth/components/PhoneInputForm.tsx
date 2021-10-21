import React, {useEffect, useState} from "react";
import {Box, Button, Heading, Input, Text} from 'native-base'
import {useNavigation} from '@react-navigation/native';
import {ScreenName, SonkimApiService, useLocalStorage, Validator} from "../../../../share";

export const PhoneInputForm = () => {
    const navigation = useNavigation();
    const [phoneLocal, savePhoneLocal] = useLocalStorage("phone", "")
    const [{phoneValid}, setValid] = useState({phoneValid: true});
    const [phoneValue, setPhone] = useState("")
    const [isProcessing, setProcessing] = useState(false)

    useEffect(() => {
        if (phoneLocal !== null) {
            setPhone(phoneLocal)
        }
    }, [phoneLocal])

    const _onPhoneChange = (text: string) => {
        setPhone(text)
    }

    const _submitPhone = async () => {
        // validate phone
        const isPhoneValid = Validator.isValidPhone(phoneValue);

        if (!isPhoneValid) {
            setValid({phoneValid: isPhoneValid});
            return
        }

        // @ts-ignore
        await savePhoneLocal(phoneValue)

        setProcessing(true)

        const isPhoneExist = await SonkimApiService.CheckPhone(phoneValue)
        if (isPhoneExist) {
            _navToLogin()
        } else {
            // @ts-ignore
            navigation.navigate(ScreenName.REGISTER_SCREEN, {phone: phoneValue})
        }
        setProcessing(false)
    }

    const _navToLogin = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.LOGIN_SCREEN, {phone: phoneValue})
    }

    return (
        <Box p={4}>
            <Heading color="white" size="md" fontWeight="medium" mb={6} textTransform="uppercase" textAlign="center">
                ĐĂNG KÝ TÀI KHOẢN
            </Heading>

            <Text color="secondary.500" mb={1}>Điện thoại</Text>

            <Input onChangeText={_onPhoneChange}
                   value={phoneValue}
                   keyboardType="phone-pad"
                   color="white"
                   fontSize="md"
                   placeholderTextColor="white"
                   bgColor="rgba(255,255,255,0.5)"
                   variant="filled"
                   p={3}
                   size="2xl" rounded="xl"
                   placeholder="Nhập số điện thoại"/>
            {
                !phoneValid && <Text color="red.500" fontSize="sm" mt={1}>*Số điện thoại không hợp lệ</Text>
            }


            <Button isLoading={isProcessing} my={5} p={3} rounded="xl" size="lg" bgColor="white"
                    onPress={_submitPhone}
                    _pressed={{bgColor: "rgba(255,255,255,0.8)"}}
                    _text={{color: "gray.500"}} opacity={70}>Tiếp tục</Button>

        </Box>
    )
}
