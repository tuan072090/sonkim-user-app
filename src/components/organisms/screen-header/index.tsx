import React from "react";
import {useNavigation} from "@react-navigation/native";
import {Box, Pressable, Text} from "native-base";
import {ChevronLeftIcon} from "../..";
import {IBoxProps} from "native-base/lib/typescript/components/primitives/Box/types";
import {ScreenHeaderTypes} from "./screenHeader.types";

const ScreenHeader:React.FC<ScreenHeaderTypes> = ({title, hasBackButton=true,children, ...props}) => {
    const navigation = useNavigation();

    return (
        <Box width="100%" flexDirection="row" alignContent="center" px={2} {...props} safeAreaTop={true}>
            {/* left content */}
            <Box width={10}>
                {hasBackButton && <Pressable onPress={() => navigation.goBack()} py={3} width="100%">
                    <ChevronLeftIcon size={6}/>
                </Pressable>}
            </Box>


            {title && <Text flexGrow={100} textAlign="center" color="white" fontSize="md" fontWeight="semibold" py={3}>{title}</Text>}

            {/* right content*/}
            <Box py={3} width={10}/>
        </Box>
    )
}

const HeaderLeft = () => {

}

export default ScreenHeader
