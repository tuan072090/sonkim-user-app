import { Box, HStack, Pressable, Text } from "native-base";
import React from "react";
import { AccountItemType } from "./AccountType";

const AccountItem: React.FC<AccountItemType> = ({ title, startIcon, endIcon, onPress, ...props }) => {

    const _onPress = () => {
        if(onPress){
            onPress()
        }
    }

    return (
        <Pressable
            onPress={_onPress}
            flexDirection="row"
            bgColor="white"
            borderRadius={12}
            height="12"
            shadow={1}
            alignItems="center"
            justifyContent="space-between"
            px={4}
        >
            <HStack space={3} alignItems="center" justifyContent="space-around">
                {startIcon}

                <Text fontWeight="semibold" fontSize="md" color="gray.500">
                    {title}
                </Text>
            </HStack>

            {endIcon}
        </Pressable>
    );
};

export default AccountItem;
