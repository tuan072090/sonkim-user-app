import React, {useState} from "react";
import {Box, Button, Heading, Input, Text} from 'native-base'
import {useNavigation} from "@react-navigation/native";
import {ScreenName} from "../../../../share";

export const LoginForm = () => {
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation();

    const _submitPhone = () => {

    }

    const _navToRegister = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.REGISTER_SCREEN)
    }

    return (
        <Box p={4}>
            <Heading color="white" size="md" fontWeight="medium" mb={6} textTransform="uppercase" textAlign="center">ĐĂNG
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

            <Box alignItems="flex-end">
                <Text pt={1} pb={5} color="white" underline>Quên mật khẩu?</Text>
            </Box>
            <Button onPress={_submitPhone} my={5} p={3} rounded="xl" size="lg" bgColor="white"
                    _text={{color: "gray.500"}} opacity={70}>Đăng ký</Button>

            <Box flexDirection="row" alignItems="center" justifyContent="center">
                <Text color="white">Chưa có tài khoản?</Text>
                <Text onPress={_navToRegister} color="white" fontSize="md" px={3} underline>Đăng ký</Text>
            </Box>
        </Box>
    )
}
