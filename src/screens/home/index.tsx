import React from 'react';
import {Text, Box} from 'native-base';
import {HomeIcon} from "../../components/atoms/icons";

const HomeScreen = () => {
    return (
        <Box flex={1} alignItems="center" justifyContent="center">
            <Text fontSize={"xl"}>Home screen</Text>

            <HomeIcon active={true}/>
        </Box>
    )
}

export default HomeScreen
