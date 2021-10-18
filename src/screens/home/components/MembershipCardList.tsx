import React from "react";
import { Box, Pressable, Text } from "native-base";
import { MembershipCards } from "../../../components";
import { useNavigation } from "@react-navigation/core";
import { ScreenName } from "../../../share";

export const MembershipCardList = () => {
    const navigation = useNavigation();
    const _navigateForm = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.LINK_MEMBERSHIP_FORM);
    };

    return (
        <Box p={4} mt={4}>
            <Text fontSize="xl" color="primary.500">
                Thẻ thành viên
            </Text>
            <Text fontSize="md" color="gray.400">
                Danh sách thẻ thành viên của SKR
            </Text>

            <MembershipCards.GS15 mt={4} />

            <MembershipCards.Lazada mt={4} />

            <MembershipCards.Jardin mt={4} />
            <Pressable
                _pressed={{ opacity: 0.5 }}
                onPress={_navigateForm}
                _focus={{ opacity: 0.5 }}
            >
                <MembershipCards.NotRegister mt={4} />
            </Pressable>
        </Box>
    );
};
