import React from "react";
import {Pressable, Text} from "native-base";
import {ButtonTypes} from "./button.types";

const Button: React.FC<ButtonTypes> = ({onPress, text, bg = "primary"}) => {

    const _onPressHandler = () => {
        onPress()
    }

    return (
        <Pressable
            _pressed={{ bg: `${bg}.800`}}
            onPress={_onPressHandler}
            bg={`${bg}.500`}
            shadow={1}
            py={2}
            px={3}
            rounded="lg"
            alignSelf="center">
            <Text fontWeight="bold" color="white">
                {text}
            </Text>
        </Pressable>
    )
}

export default Button
