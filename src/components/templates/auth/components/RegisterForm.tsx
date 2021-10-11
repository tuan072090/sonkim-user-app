import React, {useState} from "react";
import {Box, Button, ChevronDownIcon, Heading, Input, Pressable, ScrollView, Select, Text} from 'native-base'
import {useNavigation} from '@react-navigation/native';
import {ScreenName} from "../../../../share";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export const RegisterForm = () => {
    const navigation = useNavigation();
    let [gender, setGender] = React.useState<string | undefined>(undefined);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [{nameValid, passwordValid}, setValid] = useState({nameValid: true, passwordValid: true});

    const _toggleDatePicker = () => {
        setDatePickerVisibility(!isDatePickerVisible);
    };

    const _dateConfirm = (date:Date) => {
        console.log("date....", date)
        _toggleDatePicker()
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

                <Pressable onPress={_toggleDatePicker} bgColor="rgba(255,255,255,0.5)" p={3} height={12} rounded="xl">
                    <Text color="white" fontSize="md" size="2xl">Chọn ngày sinh</Text>
                </Pressable>

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    confirmTextIOS="Xác nhận"
                    cancelTextIOS="Đóng"
                    // display="inline"
                    onConfirm={_dateConfirm}
                    onCancel={_toggleDatePicker}
                />

                <Text color="secondary.500" mb={1} mt={4}>Giới tính</Text>
                <Box pr={2} bgColor="rgba(255,255,255,0.5)" rounded="xl">
                    <Select
                        // @ts-ignore
                        fontSize="md"
                        placeholder="Chọn giới tính"
                        color="white"
                        placeholderTextColor="white"
                        p={3}
                        rounded="xl"
                        borderWidth={0}
                        selectedValue={gender}
                        dropdownIcon={<ChevronDownIcon color="white" size="6"/>}
                        onValueChange={(itemValue: string) => setGender(itemValue)}
                    >
                        <Select.Item label="Nam" value="1"/>
                        <Select.Item label="Nữ" value="2"/>
                        <Select.Item label="Khác" value="3"/>
                    </Select>
                </Box>


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
