import React from "react";
import {Box, Pressable, Stack, Text} from "native-base";
import {FeatureItems, ImageStatic} from "../../../components";
import {StaticImages} from "../../../share";

export const Categories = () => {

    return (
        <>
            <Stack direction="row"  mt={4} p={4} width="100%" >
                <FeatureItems.UsePoint flex={1}/>

                <FeatureItems.RegisterMembership flex={1}/>

                <FeatureItems.LinkMembership flex={1}/>

                <FeatureItems.TransferPoint flex={1}/>
            </Stack>

            <Box width="100%" alignItems="center">
                <Box width={20} height={0} borderWidth={1} borderColor="secondary.500" borderRadius={2}/>
            </Box>
        </>
    )
}
