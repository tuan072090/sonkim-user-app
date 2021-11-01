import {useNavigation} from '@react-navigation/core';
import {Box, Button, Input, KeyboardAvoidingView, ScrollView, Text} from 'native-base';
import React, {useContext, useEffect, useState} from 'react'
import {Alert, Platform} from 'react-native'
import {Formatter, GenderList, SonkimApiService} from '../../../share';
import AppProvider from '../../../share/context'
import {AvatarPicker, DatePicker, Picker} from "../../../components";
import {PersonalInfoType} from "../../../share/services/sonkim-api/user";

const AccountInfoForm = () => {
    const {dispatch} = useContext(AppProvider.context);
    const navigation = useNavigation();
    const [formData, setFormData] = useState<PersonalInfoType>({name: "", gender: "male", birthday: "", avatar: ""});
    const [loading, setLoading] = useState(false);
    const [{nameValid, genderValid, birthdayValid, avatarValid}, setFormValid] = useState({
        nameValid: "",
        genderValid: "",
        birthdayValid: "",
        avatarValid: ""
    })

    useEffect(() => {
        let isMounted = true;

        SonkimApiService.GetPersonalInfo().then(info => {
            if(isMounted){
                setFormData({
                    name: info.name || "",
                    avatar: info.avatar || "",
                    gender: info.gender || "other",
                    birthday: info.birthday || ""
                })
            }
        }).catch(err => {
            Alert.alert("Lấy thông tin lỗi", err.message)
        })

        return () => {
            isMounted = false
        }
    }, [])

    const _onInputChange = (name: "name" | "gender" | "birthday" | "avatar", value: string) => {
        setFormData({...formData, [name]: value})
        const formValid = {nameValid, genderValid, birthdayValid, avatarValid};
        //@ts-ignore
        formValid[name + "Valid"] = "";
        setFormValid(formValid);
    }

    const _onBirthdayChange = (date: Date) => {
        _onInputChange("birthday", Formatter.FormatDateFromDate(date))
    }

    const _uploadImgChange = (imgUrl: string) => {
        _onInputChange("avatar", imgUrl)
    }

    const _submit = async () => {
        try {
            setLoading(true);
            //validate
            const formValid = {nameValid, genderValid, birthdayValid, avatarValid};
            let isValid = true;

            //  validate here
            if (formData.name.length < 3) {
                formValid.nameValid = "Tên quá ngắn";
                isValid = false
            }
            if (["male", "female", "other"].indexOf(formData.gender) < 0) {
                formValid.genderValid = "Giới tính không hợp lệ";
                isValid = false
            }

            setFormValid(formValid);
            if (!isValid) return;

            //  update personal info
            const userInfo = await SonkimApiService.UpdatePersonalInfo(formData)
            dispatch({
                type: AppProvider.actions.UPDATE_USER_INFO,
                data: userInfo
            })
            setLoading(false);
            Alert.alert("Cập nhật thông tin thành công")
            // navigate
            navigation.goBack()
        } catch (err) {
            Alert.alert(err.message)
            setLoading(false);
        }
    }

    const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;
    //  birthday
    const dateValue = formData.birthday.length > 0 ? Formatter.ParseStringToDate(formData.birthday) : new Date(1990, 0, 1)

    return (
        <KeyboardAvoidingView keyboardVerticalOffset={keyboardVerticalOffset} behavior="position">

            <Box width={"full"} p={4}>
                <ScrollView>
                    {/* Avatar */}
                    <Text color="secondary.500" my={1}>Ảnh đại diện</Text>

                    <Box width="full" alignItems="center" mb={4}>
                        <AvatarPicker onChange={_uploadImgChange} value={formData.avatar}/>
                    </Box>

                    {/* name */}
                    <Text color="secondary.500" my={1}>Họ và tên</Text>
                    <Input value={formData.name} onChangeText={(text) => _onInputChange("name", text)}
                           color="white"
                           fontSize="md"
                           placeholderTextColor="white"
                           clearButtonMode="while-editing"
                           bgColor="rgba(255,255,255,0.5)"
                           variant="filled"
                           p={3}
                           size="2xl"
                           rounded="xl"
                           placeholder="Họ và tên"
                    />
                    <Text color="red.500" fontSize="sm" mt={1}>{nameValid}</Text>

                    <Text color="secondary.500" my={1}>Giới tính</Text>
                    <Picker
                        placeholder="Chọn giới tính"
                        bgColor="rgba(255,255,255,0.5)"
                        pr={3}
                        rounded="xl"
                        items={GenderList}
                        value={formData.gender}
                        onChange={value => _onInputChange("gender", value)}/>
                    <Text color="red.500" fontSize="sm" mt={1}>{genderValid}</Text>

                    <Text color="secondary.500" my={1}>Ngày sinh</Text>
                    <DatePicker
                        height={12}
                        p={3}
                        bgColor="rgba(255,255,255,0.5)"
                        rounded="xl"
                        value={dateValue}
                        onChange={_onBirthdayChange}/>
                    <Text color="red.500" fontSize="sm" mt={1}>{birthdayValid}</Text>

                    <Button onPress={_submit} my={10} p={3} isLoading={loading} rounded="xl" size="lg"
                            bgColor="white"
                            _pressed={{bgColor: "rgba(255,255,255,0.8)"}}
                            _text={{color: "gray.500"}} opacity={70}>Cập nhật</Button>
                </ScrollView>
            </Box>

        </KeyboardAvoidingView>
    )
}

export default AccountInfoForm
