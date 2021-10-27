import { Box, HStack, Pressable, Text } from "native-base";
import React from "react";
import { AccountItemType } from "./AccountType";

const AccountItem: React.FC<AccountItemType> = ({ item, ...props }) => {
    return (
        <HStack
            bgColor="white"

            borderRadius={12}
            height="12"
            mb="3"
            shadow={1}
            alignItems="center"
            justifyContent="space-between"
            px={4}
        >
            <HStack space={3} alignItems="center" justifyContent="space-around">
                {item.startIcon}

                <Text fontWeight="semibold" fontSize="md" color="gray.500">
                    {item.title}
                </Text>
            </HStack>
            {item.endIcon}
        </HStack>
    );
};

export default AccountItem;
