import React from "react";
import {useNavigation} from "@react-navigation/native";
import {Box, Pressable, Text} from "native-base";
import {ChevronLeftIcon} from "../..";
import {ScreenHeaderTypes} from "./screenHeader.types";

const ScreenHeader:React.FC<ScreenHeaderTypes> = ({title, hasBackButton=true,rightIcon,children, ...props}) => {
    const navigation = useNavigation();

    return (
        <Box width="100%" flexDirection="row" alignContent="center" px={2} {...props} safeAreaTop={true}>
            {/* left content */}
            <Box width={10}>
                {hasBackButton && <Pressable _pressed={{opacity: 0.8}} onPress={() => navigation.goBack()} py={3} width="100%">
                    <ChevronLeftIcon size={6}/>
                </Pressable>}
            </Box>


            {title && <Text flexGrow={100} textAlign="center" color="white" fontSize="md" fontWeight="semibold" py={3}>{title}</Text>}

            {/* right content*/}
            <Box width={10}>
                {rightIcon && <Pressable _pressed={{opacity: 0.8}} py={3} width="100%">
                        {rightIcon}
                    </Pressable>}
            </Box>
        </Box>
    )
}

const HeaderLeft = () => {

}

export default ScreenHeader
