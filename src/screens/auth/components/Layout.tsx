import React from "react";
import {Box, StatusBar} from "native-base";
import {ImageStatic} from "../../../components";
import {StaticImages} from "../../../share";

export const AuthLayout: React.FC = ({children}) => {
    return (
        <Box flex={1} position="relative" alignItems="center">
            <StatusBar backgroundColor="primary.500" barStyle="light-content"/>

            <ImageStatic resizeMode="cover" position="absolute" bottom={0} left={0} width="100%" height="100%"
                         uri={StaticImages.auth_background}/>

            <Box flex={1} p={5} width="100%" bgColor="rgba(8, 105, 129, 0.8)" safeAreaTop>
                <ImageStatic uri={StaticImages.logo_white} width={24} height={10} mb={8}/>

                {children}
            </Box>
        </Box>
    )
}
