import React from "react";
import {Box, Button, Text} from "native-base";
import {ImageBackground, StyleSheet} from "react-native";
import {ScreenSize, StaticImages} from "../../../share";
import {ImageStatic, MembershipCards} from "../../../components";

export const MembershipCardList = () => {

    return (
        <Box p={4} mt={4}>
            <Text fontSize="xl" color="primary.500">Thẻ thành viên</Text>
            <Text fontSize="md" color="gray.400">Danh sách thẻ thành viên của SKR</Text>

            <MembershipCards.GS15  mt={4}/>

            <MembershipCards.Lazada  mt={4}/>

            <MembershipCards.Jardin  mt={4}/>

            <MembershipCards.NotRegister mt={4}/>
            
        </Box>
    )
}

const cardHeight = (ScreenSize.vw ) / 3.17  //  tỉ lệ 3.17

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: cardHeight,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: "space-between"
    }
})
