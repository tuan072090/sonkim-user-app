import React from 'react';
import {Alert} from 'react-native';
import {Text, Box, Pressable} from 'native-base';
import {Button} from "../../components";

const HomeScreen = () => {

    const _clickHandle = () => {
        Alert.alert("click ok")
    }

    return (
        <Box flex={1} alignItems="center" justifyContent="center">
            <Text fontSize={"xl"}>Home screen</Text>

            <Button onPress={_clickHandle} text="Click me now"/>
        </Box>
    )
}

export default HomeScreen
