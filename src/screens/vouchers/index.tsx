import React, {useEffect, useState} from "react";
import VoucherCard from "../../components/organisms/voucher-card";
import {Box, Text} from "native-base";
import {SonkimApiService, StaticImages} from "../../share";
import {Alert} from "react-native";


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

const VouchersScreen = () => {
    const [vouchers, setVouchers] = useState(null)

    useEffect(() => {
        _fetchVouchers()
    }, [])

    const _fetchVouchers = async () => {
        try {
            const data = await SonkimApiService.getVouchers()
            console.log("data...", data)
        } catch (err) {
            Alert.alert(err.message)
        }
    }

    return (
        <Box p={4} mt={4}>
            <Text fontSize="xl" color="primary.500">
                Danh sách khuyến mãi
            </Text>

            {
                sampleVoucherData.map((item, index) => (
                    <VoucherCard voucher={item} key={index}/>
                ))
            }
        </Box>
    )
}

export default VouchersScreen
