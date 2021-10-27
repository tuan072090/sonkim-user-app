import { useNavigation } from '@react-navigation/core';
import { Box, Heading, Input, KeyboardAvoidingView, ScrollView,Select,Text } from 'native-base';
import React, { useContext, useRef, useState } from 'react'
import { Alert, Platform, StyleSheet } from 'react-native'
import { DatePicker, DropdownIcon } from '../../../components';
import { Validator } from '../../../share';
import AppProvider from '../../../share/context'

const AccountInfoForm = () => {
    const {dispatch}=useContext(AppProvider.context);
    const navigation=useNavigation();
    const formRef=useRef({name:"",subName:"",email:"",dob:"",sex:""});
    const [loading,setLoading]=useState(false);
    const [{nameValid,emailValid,subNameValid,dobValid,sexValid},setFormValid]=useState({
        nameValid:"",
        emailValid:"",
        subNameValid:"",
        dobValid:"",
        sexValid:""
    });
    // Handle for date and sex
    const [date,setDate]=useState<Date>();
    const [sex,setSex]=useState<string>();

    const _onInputChange=(name:"name"|"email"|"subName"|"dob"|"sex",value:string)=>{
        formRef.current[name]=value;
        const formValid={nameValid,emailValid,subNameValid,dobValid,sexValid};
        //@ts-ignore
        formValid[name+"Valid"]="";
        setFormValid(formValid);
    }

    const _submit=async ()=>{
        try {
            setLoading(true);

            const {email,name,subName,dob,sex}=formRef.current;
            //validate
            const formValid={nameValid,emailValid,subNameValid,dobValid,sexValid};
            let isValid=true;
            if(!name || name.length<0){
                formValid.nameValid="Tên không được để trống";
                isValid=false;
            }

            if(!subName || subName.length<0){
                formValid.subNameValid="Họ tên đệm không được để trống";
                isValid=false;
            }

            if(!email || !Validator.isValidEmail(email)){
                formValid.emailValid="Email không hợp lệ";
                isValid=false;
            }

            
            setFormValid(formValid);
            setLoading(false);

            if(!isValid) return;

            //navigate

        } catch (err) {
            setLoading(false);
        }
    }

    const _updateInfo=async()=>{
        try {
            const {name,email,subName,dob,sex}=formRef.current;
            //call API
        } catch (err:any) {
            Alert.alert(err.message);
        }
    }

    const keyboardVerticalOffset=Platform.OS==='ios'?20:0;


    return (
        <KeyboardAvoidingView keyboardVerticalOffset={keyboardVerticalOffset} behavior="position">
            <ScrollView p={4}>
                <Box flex={1} px={3}>
                    {/* name */}    
                    <Text color="secondary.500" my={1}>Tên</Text>
                    <Input onChangeText={(text)=>_onInputChange("name",text)}
                        color="white"
                        fontSize="md"
                        placeholderTextColor="white"
                        clearButtonMode="while-editing"
                        bgColor="rgba(255,255,255,0.5)"
                        variant="filled"
                        p={3}
                        size="2xl"
                        rounded="xl"
                        placeholder="Lâm"
                    ></Input>
                    <Text color="red.500" fontSize="sm" mt={1}>{nameValid}</Text>

                    {/* subName */}    
                    <Text color="secondary.500" my={1}>Họ và tên đệm</Text>
                    <Input onChangeText={(text)=>_onInputChange("subName",text)}
                        color="white"
                        fontSize="md"
                        placeholderTextColor="white"
                        clearButtonMode="while-editing"
                        bgColor="rgba(255,255,255,0.5)"
                        variant="filled"
                        p={3}
                        size="2xl"
                        rounded="xl"
                        placeholder="Nguyễn H"
                    ></Input>
                    <Text color="red.500" fontSize="sm" mt={1}>{subNameValid}</Text>

                    {/* email */}    
                    <Text color="secondary.500" my={1}>Email</Text>
                    <Input onChangeText={(text)=>_onInputChange("email",text)}
                        color="white"
                        fontSize="md"
                        placeholderTextColor="white"
                        clearButtonMode="while-editing"
                        bgColor="rgba(255,255,255,0.5)"
                        variant="filled"
                        p={3}
                        size="2xl"
                        rounded="xl"
                        placeholder="lamngh@gmail.com"
                    ></Input>
                    <Text color="red.500" fontSize="sm" mt={1}>{emailValid}</Text>

                    {/* sex     */}
                    <Text color="secondary.500" my={1}>Giới tính</Text>
                    <Select
                        selectedValue={sex}
                        accessibilityLabel="Chọn giới tính"
                        placeholder="Chọn giới tính"
                        color="white"
                        fontSize="md"
                        clearButtonMode="while-editing"
                        p={3}
                        variant="unstyled"
                        dropdownIcon={<DropdownIcon size={8} />}
                        rounded="xl"
                        bgColor="rgba(255,255,255,0.5)"
                        mt={1}
                        onValueChange={(itemValue)=>setSex(itemValue)}
                    >
                        <Select.Item label="Nam" value="male"></Select.Item>
                        <Select.Item label="Nữ" value="female"></Select.Item>
                    </Select>
                    <Text color="red.500" fontSize="sm" mt={1}>{sexValid}</Text>

                    {/* date time picker */}    
                    <Text color="secondary.500" my={1}>Ngày sinh</Text>
                    <DatePicker bgColor="rgba(255,255,255,0.5)" height={12} p={3} rounded="xl" value={new Date("2021-10-27")} onChange={(date)=>setDate(date)} />
                    <Text color="red.500" fontSize="sm" mt={1}>{dobValid}</Text>
                    
                    
                </Box>
                
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AccountInfoForm

const styles = StyleSheet.create({})
