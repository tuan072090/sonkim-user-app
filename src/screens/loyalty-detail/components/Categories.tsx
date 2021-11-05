import React from "react";
import { Box, Pressable, Stack, Text } from "native-base";
import { FeatureItems, ImageStatic } from "../../../components";
import { StaticImages } from "../../../share";

export const Categories = () => {
    return (
        <Stack direction="row" mt={4} p={4} width="100%">
            <FeatureItems.UsePoint flex={1} />
            <FeatureItems.History flex={1} />
            <FeatureItems.RankPoint flex={1} />
        </Stack>
    );
};
