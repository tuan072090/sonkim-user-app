import React from "react";
import {useNavigation} from "@react-navigation/native";
import {Box, Pressable} from "native-base";
import {ChevronLeftIcon} from "../..";

const ScreenHeader = () => {
    const navigation = useNavigation();

    return (
        <Box width="100%" p={3}>
            <Pressable onPress={() => navigation.goBack()} py={3} width={10}><ChevronLeftIcon size={8}/></Pressable>
        </Box>
    )
}

export default ScreenHeader
