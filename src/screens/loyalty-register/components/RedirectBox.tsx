import React from "react";
import {Box, Pressable, Text} from "native-base";
import {FontStyles, LoyaltyProgramTypes, ScreenSize} from "../../../share";
import {useNavigation} from '@react-navigation/native';
import {CancelIcon} from "../../../components/atoms/icons/CommonIcons";
import {Image, MyButton} from "../../../components";
import {ActivityIndicator} from "react-native";

type RedirectBoxTypes = {
    loyaltyProgram: null | LoyaltyProgramTypes,
    setType: (type: "register" | "link") => void
}
export const RedirectBox: React.FC<RedirectBoxTypes> = ({loyaltyProgram, setType}) => {
    const navigation = useNavigation();
    const boxWidth = Math.ceil(ScreenSize.vw * 0.8)

    const _closeBox = () => {
        navigation.goBack()
    }

    const titleStyle = FontStyles.subtitle16
    return (
        <Box flex={1} bg="gray.800" alignItems="center" justifyContent="center">
            <Box p={5} width={boxWidth} bg="white" rounded="2xl" position="relative" alignItems="center">
                <Pressable position="absolute" top={0} right={0} p={4} onPress={_closeBox} _pressed={{opacity: 0.8}}>
                    <CancelIcon size={4}/>
                </Pressable>

                <Box width={50} height={50} justifyContent="center" alignItems="center">
                    {
                        loyaltyProgram ? <Image uri={loyaltyProgram.avatar.url} width={50} height={50}/>
                            : <ActivityIndicator color="primary.500"/>
                    }
                </Box>

                <Text mt={3} textAlign="center" fontSize={titleStyle.fontSize} fontWeight={titleStyle.fontWeight}>Bạn đã
                    có thẻ thành viên?</Text>

                <MyButton onPress={() => setType("link")} width="full" mt={4} bg="primary.500">Liên kết thẻ đã có</MyButton>
                <MyButton onPress={() => setType("register")} width="full" mt={4}
                          bg="primary.200" _text={{color: 'primary.500'}} size="lg">Đăng ký thẻ thành viên</MyButton>
            </Box>
        </Box>
    )
}
