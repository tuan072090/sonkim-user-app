import React, {useState} from "react";
import {Box, Button, Heading, Input, Pressable, ScrollView, Text} from 'native-base'
import {useNavigation} from '@react-navigation/native';
import {ScreenName} from "../../../../share";
import {DatePicker} from "../../../organisms/datepicker";
import {Picker} from "../../../index";

export const RegisterForm = () => {
    const navigation = useNavigation();


    const _onBirthdayChange = (date:Date) => {
        console.log("birthday change....", date)
    }

    const _onGenderChange = (gender:string) => {
        console.log("gender change...", gender)
    }

    const _submit = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.OTP_SCREEN)
    }

    const _navToLogin = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.LOGIN_SCREEN)
    }

    return (
        <ScrollView p={4}>
            <Box flex={1} px={3}>
                <Heading color="white" size="md" fontWeight="medium" mb={6} textTransform="uppercase"
                         textAlign="center">
                    THIẾT LẬP TÀI KHOẢN
                </Heading>

                <Text color="secondary.500" mb={1}>Họ tên</Text>
                <Input color="white"
                       fontSize="md"
                       placeholderTextColor="white"
                       bgColor="rgba(255,255,255,0.5)"
                       variant="filled"
                       p={3}
                       size="2xl" rounded="xl"
                       placeholder="Nhập họ tên"/>

                <Text color="secondary.500" mb={1} mt={4}>Ngày sinh</Text>

                <DatePicker onChange={_onBirthdayChange} value={new Date(2020, 10, 10)}  bgColor="rgba(255,255,255,0.5)" p={3} height={12} rounded="xl"/>

                <Text color="secondary.500" mb={1} mt={4}>Giới tính</Text>
                <Picker
                    onChange={_onGenderChange}
                    items={[{value:"1", label: "Nam"}, {value:"2", label: "Nữ"}, {value:"3", label: "Khác"}]}
                    pr={2} bgColor="rgba(255,255,255,0.5)" rounded="xl"/>


                <Text color="secondary.500" mb={1} mt={4}>Email</Text>
                <Input color="white"
                       fontSize="md"
                       placeholderTextColor="white"
                       bgColor="rgba(255,255,255,0.5)"
                       variant="filled"
                       p={3}
                       size="2xl" rounded="xl"
                       placeholder="Nhập email"/>


                <Button onPress={_submit} my={10} p={3} rounded="xl" size="lg" bgColor="white"
                        _pressed={{bgColor: "rgba(255,255,255,0.8)"}}
                        _text={{color: "gray.500"}} opacity={70}>Xác nhận</Button>

                <Box flexDirection="row" alignItems="center" justifyContent="center">
                    <Text color="white">Đã có tài khoản?</Text>
                    <Text onPress={_navToLogin} color="white" fontSize="md" px={3} underline>Đăng nhập</Text>
                </Box>
            </Box>
        </ScrollView>
    )
}
