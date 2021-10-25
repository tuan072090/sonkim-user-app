import { useNavigation } from '@react-navigation/core';
import { Box, Heading, Input, KeyboardAvoidingView, ScrollView,Text } from 'native-base';
import React, { useContext, useRef, useState } from 'react'
import { Alert, Platform, StyleSheet, View } from 'react-native'
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
    })

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
        <KeyboardAvoidingView keyboardVerticalOffset={keyboardVerticalOffset} behavior="position" backgroundColor="#095A64">
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
                </Box>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AccountInfoForm

const styles = StyleSheet.create({})
