import React from "react";
import {PointSystemType} from "../../../share";
import {Box, Text, HStack} from "native-base";
import {Typo} from "../../../components";

type EstimateResultPropsType = {
    fromPoint: PointSystemType,
    toPoint: PointSystemType
}
export const EstimateResult: React.FC<EstimateResultPropsType> = ({fromPoint, toPoint}) => {

    if(!fromPoint || !toPoint){
        return null
    }

    return (
        <Box width="100%"  p={4} borderRadius={16}>
            <HStack justifyContent="space-between">
                <Typo type="body14" color="gray.200">Tỷ lệ</Typo>
                <Typo type="subtitle14" color="secondary.500">
                    {
                        `1 ${fromPoint.symbol} = ${(toPoint.ratio/fromPoint.ratio).toFixed(2)} ${toPoint.symbol}`
                    }
                </Typo>
            </HStack>

            <HStack justifyContent="space-between" mt={3}>
                <Typo type="body14" color="gray.200">Chi phí chuyển đổi</Typo>
                <Typo type="subtitle14" color="secondary.500">0</Typo>
            </HStack>
        </Box>
    )
}
