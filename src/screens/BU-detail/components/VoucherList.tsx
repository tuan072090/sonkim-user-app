import React from "react";
import { Box, Text } from "native-base";
import VoucherItem from "./VoucherItem";
import { StaticImages } from '../../../share'


const sampleVoucherData = [
    {
        imageUri: StaticImages.voucher1,
        title: 'Voucher giảm giá 20% cho dịch vụ massage vào tháng 10',
        applied: 5,
        due: '12/12/2021',
        status: 'free'
    },
    {
        imageUri: StaticImages.voucher2,
        title: 'Tặng kèm dịch vụ tắm trắng',
        applied: 1,
        due: '12/12/2021',
        status: 'point',
        point: 10000
    },
    {
        imageUri: StaticImages.voucher3,
        title: 'Combo xông hơi, massage cổ vai gáy',
        applied: 3,
        due: '12/12/2021',
        status: 'currency',
        price: 10000
    },
]

export const VoucherList = () => {
    return (
        <Box p={4} mt={4}>
            <Text fontSize="xl" color="primary.500">
                Danh sách khuyến mãi
            </Text>
            <Text fontSize="md" color="gray.400">
                Danh sách voucher hot nhất hiện nay của shop
            </Text>
            {
                sampleVoucherData.map((item, index) => (
                    <VoucherItem item={item} key={index}></VoucherItem>
                ))
            }
        </Box>
    );
};
