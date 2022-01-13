import React, {useEffect} from "react";
import {ActivityIndicator} from "react-native";
import {Box} from 'native-base'
import {Colors} from "../../../share";

type LoaderProps = {
    unMountCallback?: () => void
}

const FullScreenLoader: React.FC<LoaderProps> = ({unMountCallback}) => {

    useEffect(() => {
        return () => {
            if(unMountCallback) unMountCallback()
            return;
        }
    },[])

    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <ActivityIndicator size="small" color={Colors.primary["500"]}/>
        </Box>
    )
}

export default FullScreenLoader
