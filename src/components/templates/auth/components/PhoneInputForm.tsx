import React, { useRef, useState } from "react";
import { Box, Button, Heading, Input, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import { ScreenName, Validator, SonkimApiService } from "../../../../share";
import {Alert} from "react-native";

export const PhoneInputForm = () => {
    const navigation = useNavigation();
    const phoneValue = useRef("");
    const [{ phoneValid }, setValid] = useState({ phoneValid: true });

    const _onPhoneChange = (text: string) => {
        phoneValue.current = text;
    }

    const _submitPhone = async () => {
        // validate phone
        const isPhoneValid = Validator.isValidPhone(phoneValue.current);

        if(!isPhoneValid){
            setValid({phoneValid: isPhoneValid});
            return
        }

        const isPhoneExist = await SonkimApiService.CheckPhone(phoneValue.current)
        console.log("isPhoneExist....", isPhoneExist)
        if(isPhoneExist){
            Alert.alert("Số điện thoại đã tồn tại")
        }else {
            // @ts-ignore
            navigation.navigate(ScreenName.OTP_SCREEN)
        }
    }

    const _navToLogin = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.LOGIN_SCREEN)
    }

    return (
        <Box p={4}>
            <Heading color="white" size="md" fontWeight="medium" mb={6} textTransform="uppercase" textAlign="center">
                ĐĂNG KÝ TÀI KHOẢN MỚI
            </Heading>

            <Text color="secondary.500" mb={1}>Điện thoại</Text>

            <Input onChangeText={_onPhoneChange}
                keyboardType="phone-pad"
                color="white"
                fontSize="md"
                placeholderTextColor="white"
                bgColor="rgba(255,255,255,0.5)"
                variant="filled"
                p={3}
                size="2xl" rounded="xl"
                placeholder="Nhập số điện thoại" />
            {
                !phoneValid && <Text color="red.500" fontSize="sm" mt={1}>*Số điện thoại không hợp lệ</Text>
            }


            <Button onPress={_submitPhone} my={5} p={3} rounded="xl" size="lg" bgColor="white" _pressed={{ bgColor: "rgba(255,255,255,0.8)" }}
                _text={{ color: "gray.500" }} opacity={70}>Tiếp tục</Button>

            <Box flexDirection="row" alignItems="center" justifyContent="center">
                <Text color="white">Đã có tài khoản?</Text>
                <Text onPress={_navToLogin} color="white" fontSize="md" px={3} underline>Đăng nhập</Text>
            </Box>
        </Box>
    )
}
