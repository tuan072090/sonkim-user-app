import React from "react";
import {Box, Text} from "native-base";
import {StaticImages} from '../../../share'
import {VoucherCard} from "../../../components";

export const VoucherList = () => {
    return (
        <Box p={4} mt={4}>
            <Text fontSize="xl" color="primary.500">
                Danh sách khuyến mãi
            </Text>
            <Text fontSize="md" color="gray.400">
                Danh sách voucher hot nhất hiện nay của shop
            </Text>


            {/*    <VoucherCard voucher={item} key={index}/>*/}
        </Box>
    );
};
