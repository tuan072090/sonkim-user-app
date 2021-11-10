import React from "react";
import {Box, Pressable, Stack, Text} from "native-base";
import {FeatureItems, ImageStatic, PressBox} from "../../../components";
import {useNavigation} from "@react-navigation/native";
import {ScreenName} from "../../../share";

export const Categories = () => {
    const navigation = useNavigation()

    const _usePoint = () => {
        //  @ts-ignore
        navigation.navigate(ScreenName.USE_POINT)
    }

    const _registerCard = () => {
        //  @ts-ignore
        navigation.navigate(ScreenName.MEMBERSHIP_REGISTER_SELECT_SCREEN)
    }

    const _linkMembership = () => {
        //  @ts-ignore
        navigation.navigate(ScreenName.LINK_MEMBERSHIP)
    }

    const _transferPoint = () => {
        //  @ts-ignore
        navigation.navigate(ScreenName.TRANSFER_POINT)
    }

    return (
        <>
            <Stack direction="row"  mt={4} p={4} width="100%" >
                <PressBox onPress={_usePoint} flex={1}>
                    <FeatureItems.UsePoint flex={1}/>
                </PressBox>

                <PressBox onPress={_registerCard} flex={1}>
                    <FeatureItems.RegisterMembership flex={1}/>
                </PressBox>

                <PressBox onPress={_linkMembership} flex={1}>
                    <FeatureItems.LinkMembership flex={1}/>
                </PressBox>

                <PressBox onPress={_transferPoint} flex={1}>
                    <FeatureItems.TransferPoint flex={1}/>
                </PressBox>
            </Stack>

            <Box width="100%" alignItems="center">
                <Box width={20} height={0} borderWidth={1} borderColor="secondary.500" borderRadius={2}/>
            </Box>
        </>
    )
}
