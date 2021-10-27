import {useNavigation} from '@react-navigation/core';
import {Box, Button, Input, KeyboardAvoidingView, ScrollView, Text} from 'native-base';
import React, {useContext, useRef, useState} from 'react'
import {Alert, Platform, StyleSheet} from 'react-native'
import {GenderList, SonkimApiService} from '../../../share';
import AppProvider from '../../../share/context'
import {DatePicker, ImagePicker, Picker} from "../../../components";

const AccountInfoForm = () => {
    const {dispatch} = useContext(AppProvider.context);
    const navigation = useNavigation();
    const formRef = useRef({name: "", gender: "male", birthday: "", avatar: ""});
    const [loading, setLoading] = useState(false);
    const [{nameValid, genderValid, birthdayValid, avatarValid}, setFormValid] = useState({
        nameValid: "",
        genderValid: "",
        birthdayValid: "",
        avatarValid: ""
    })

    const _onInputChange = (name: "name" | "gender" | "birthday" | "avatar", value: string) => {
        formRef.current[name] = value;
        const formValid = {nameValid, genderValid, birthdayValid, avatarValid};
        //@ts-ignore
        formValid[name + "Valid"] = "";
        setFormValid(formValid);
    }

    const _onBirthdayChange = (date: Date) => {
        const birthdayFormat = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()
        _onInputChange("birthday", birthdayFormat)
    }

    const _submit = async () => {
        try {
            setLoading(true);
            console.log("formRef.current...", formRef.current)
            const {name, gender, birthday, avatar} = formRef.current;
            //validate
            const formValid = {nameValid, genderValid, birthdayValid, avatarValid};
            let isValid = true;

            //  validate here

            setFormValid(formValid);
            setLoading(false);

            if (!isValid) return;

            //navigate

        } catch (err) {
            setLoading(false);
        }
    }

    const _updateInfo = async () => {
        try {
            const {name, birthday, gender, avatar} = formRef.current;
            // @ts-ignore
            const userInfo = await SonkimApiService.UpdatePersonalInfo({name, birthday, gender, avatar})
        } catch (err:any) {
            Alert.alert(err.message);
        }
    }

    const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;

    return (
        <KeyboardAvoidingView keyboardVerticalOffset={keyboardVerticalOffset} behavior="position"
                              backgroundColor="primary.500">
            <ScrollView p={4}>
                <Box flex={1} px={3}>
                    {/* Avatar */}
                    <Text color="secondary.500" my={1}>Ảnh đại diện</Text>
                    <Box width="full" alignItems="center" mb={4}>
                        <ImagePicker
                            justifyContent="center"
                            alignItems="center"
                            rounded="full"
                            width={24}
                            height={24}
                            bgColor="rgba(255,255,255,0.5)">
                            <Text color="white">Chọn ảnh</Text>
                        </ImagePicker>
                    </Box>

                    {/* name */}
                    <Text color="secondary.500" my={1}>Họ và tên</Text>
                    <Input onChangeText={(text) => _onInputChange("name", text)}
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
                        bgColor="rgba(255,255,255,0.5)"
                        pr={3}
                        rounded="xl"
                        items={GenderList}
                        value={formRef.current.gender}
                        onChange={value => _onInputChange("gender", value)}/>
                    <Text color="red.500" fontSize="sm" mt={1}>{genderValid}</Text>

                    <Text color="secondary.500" my={1}>Ngày sinh</Text>
                    <DatePicker
                        height={12}
                        p={3}
                        bgColor="rgba(255,255,255,0.5)"
                        rounded="xl"
                        value={new Date(1990,0,1)}
                        onChange={_onBirthdayChange}/>
                    <Text color="red.500" fontSize="sm" mt={1}>{birthdayValid}</Text>

                    <Button onPress={_submit} my={10} p={3} isLoading={loading} rounded="xl" size="lg"
                            bgColor="white"
                            _pressed={{bgColor: "rgba(255,255,255,0.8)"}}
                            _text={{color: "gray.500"}} opacity={70}>Cập nhật</Button>
                </Box>
                
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AccountInfoForm

const styles = StyleSheet.create({})
