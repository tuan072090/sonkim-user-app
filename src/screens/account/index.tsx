import { Box, Button, Center, Pressable, Switch } from "native-base";
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import { ChevronRightIcon, FriendIcon, LocationIcon, NotificationIcon, NotificationOutlineIcon, TranslateIcon } from "../../components";
import AccountHeader from "./components/AccountHeader";
import AccountItem from "./components/AccountItem";

const sampleData=[
    {
        startIcon:<LocationIcon size={8}></LocationIcon>,
        title:'Lịch sử đổi điểm',
        endIcon:<ChevronRightIcon size={8}></ChevronRightIcon>
    },
    {
        startIcon:<FriendIcon size={8}></FriendIcon>,
        title:'Friend refferal',
        endIcon:<ChevronRightIcon size={8}></ChevronRightIcon>
    },
    {
        startIcon:<TranslateIcon size={8}></TranslateIcon>,
        title:'Ngôn ngữ',
        endIcon:<ChevronRightIcon size={8}></ChevronRightIcon>
    },
    {
        startIcon:<NotificationOutlineIcon size={8}></NotificationOutlineIcon>,
        title:'Lịch sử đổi điểm',
        endIcon:<Switch size={8} onTrackColor="success.500" onThumbColor="white"></Switch>,
    },
]

const AccountScreen = () => {

    return (
        <View style={styles.wrap}>
            <AccountHeader></AccountHeader>
            <Box p="4">
                {sampleData.map((item,index)=>(
                    <AccountItem key={index} item={item}></AccountItem>
                ))}
                <Pressable>
                    <Center bgColor="#08698133"
                    mt={2}
                    height={12}
                    borderRadius={12}
                    _text={{
                        fontStyle:'normal',
                        fontWeight:'bold',
                        fontSize:'md',
                        lineHeight:'lg',
                        letterSpacing:'lg',
                        color:'#086981'
                    }}
                    >
                        Đăng xuất
                    </Center>
                </Pressable>
            </Box>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {}
})

export default AccountScreen
