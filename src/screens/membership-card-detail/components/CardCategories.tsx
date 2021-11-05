import React from "react";
import {Box, Stack} from "native-base";
import {FeatureItems} from "../../../components";
import {UserMemberShipCardType} from "../../../share";

export const CardCategories:React.FC<{membershipCard: UserMemberShipCardType}> = ({membershipCard}) => {

    return (
        <>
            <Stack direction="row" mt={4} p={4} width="100%">
                <FeatureItems.UsePoint flex={1}/>
                <FeatureItems.History flex={1}/>
                <FeatureItems.RankPoint flex={1}/>
            </Stack>
            <Stack direction="row" p={4} width="100%">
                <FeatureItems.Vouchers flex={1}/>
                <FeatureItems.GiftCards flex={1}/>
                <FeatureItems.Stores flex={1}/>
                <FeatureItems.News flex={1}/>
            </Stack>
            <Box width="100%" alignItems="center">
                <Box width={20} height={0} borderWidth={1} borderColor="secondary.500" borderRadius={2}/>
            </Box>
        </>
    );
};
