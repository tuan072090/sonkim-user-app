import React, {memo, useEffect, useState} from "react";
import {Box, Input, KeyboardAvoidingView, Text} from "native-base";
import {IBoxProps} from "native-base/lib/typescript/components/primitives/Box/types";
import {Formatter, GenderList, ScreenSize, SonkimApiService, useLocalStorage} from "../../../../../share";
import {DatePicker, Picker} from "../../../../../components";
import {PersonalInfoType} from "../../../../../share/services/sonkim-api/user";
import {Alert, Platform} from "react-native";

interface RegisterFormType extends IBoxProps{
    onFormChange:(formData:any) => void
}
export const RegisterMembershipForm: React.FC<RegisterFormType> = memo(({onFormChange, ...props}) => {
    const [phoneLocal, savePhoneLocal] = useLocalStorage("phone", "")
    const [phoneValue, setPhone] = useState("")
    const [formData, setFormData] = useState<PersonalInfoType>({
        name: "",
        gender: "male",
        birthday: "",
        avatar: "",
        address: ""
    });
    const [{nameValid, genderValid, birthdayValid, avatarValid, addressValid}, setFormValid] = useState({
        nameValid: "",
        genderValid: "",
        birthdayValid: "",
        avatarValid: "",
        addressValid: ""
    })

    useEffect(() => {
        let isMounted = true;

        SonkimApiService.GetPersonalInfo().then(info => {
            if (isMounted) {
                const form = {
                    name: info.name || "",
                    avatar: info.avatar || "",
                    gender: info.gender || "other",
                    birthday: info.birthday || ""
                }
                setFormData(form)
                onFormChange({...form, phone: phoneValue})
            }
        }).catch(err => {
            Alert.alert("Lấy thông tin lỗi", err.message)
        })

        return () => {
            isMounted = false
        }
    }, [])

    useEffect(() => {
        if (phoneLocal !== null) {
            setPhone(phoneLocal)
        }
    }, [phoneLocal])

    const _onPhoneChange = (text: string) => {
        setPhone(text)
    }

    const _onInputChange = (name: "name" | "gender" | "birthday" | "avatar" | "address", value: string) => {
        const form = {...formData, [name]: value}
        setFormData(form)
        const formValid = {nameValid, genderValid, birthdayValid, avatarValid, addressValid};
        //@ts-ignore
        formValid[name + "Valid"] = "";
        setFormValid(formValid);
        onFormChange({...form, phone: phoneValue})
    }

    const _onBirthdayChange = (date: Date) => {
        _onInputChange("birthday", Formatter.FormatDateFromDate(date,"yyyy-MM-dd"))
    }

    const dateValue = formData.birthday.length > 0 ? Formatter.ParseStringToDate(formData.birthday) : new Date(1990, 0, 1)
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;

    return (
        <KeyboardAvoidingView keyboardVerticalOffset={keyboardVerticalOffset} behavior="position">
        <Box {...props}>
            <Text color="secondary.500" mb={1}>Số điện thoại</Text>
            <Input
                value={phoneValue}
                onChangeText={_onPhoneChange}
                keyboardType="phone-pad"
                color="white"
                fontSize="md"
                placeholderTextColor="white"
                bgColor="rgba(255,255,255,0.5)"
                variant="filled"
                p={3}
                size="2xl"
                rounded="xl"
                placeholder="Nhập số điện thoại"
            />

            <Text color="secondary.500" mb={1} mt={4}>Giới tính</Text>
            <Picker
                placeholder="Chọn giới tính"
                bgColor="rgba(255,255,255,0.5)"
                pr={3}
                rounded="xl"
                items={GenderList}
                value={formData.gender}
                onChange={value => _onInputChange("gender", value)}/>

            <Text color="secondary.500" mb={1} mt={4}>Ngày sinh</Text>
            <DatePicker
                height={12}
                width={ScreenSize.vw - 40}
                p={3}
                bgColor="rgba(255,255,255,0.5)"
                rounded="xl"
                value={dateValue}
                onChange={_onBirthdayChange}/>

            <Text color="secondary.500" mb={1} mt={4}>Địa chỉ</Text>
            <Input
                value={formData.address}
                onChangeText={text => _onInputChange("address", text)}
                color="white"
                fontSize="md"
                placeholderTextColor="white"
                bgColor="rgba(255,255,255,0.5)"
                variant="filled"
                p={3}
                size="2xl"
                rounded="xl"
                placeholder="Nhập địa chỉ của bạn"
            />
        </Box>
        </KeyboardAvoidingView>
    )
})
