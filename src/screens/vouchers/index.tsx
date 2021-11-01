import React, {useEffect, useState} from "react";
import {Box, ScrollView, Text} from "native-base";
import {ActivityIndicator, Alert} from "react-native";
import {MainLayout, VoucherCard} from "../../components";
import {PromotionType, SonkimApiService} from "../../share";

const VouchersScreen: React.FC<any> = MainLayout(() => {
    const [vouchers, setVouchers] = useState<PromotionType[] | null>(null)

    useEffect(() => {
        _fetchVouchers()
    }, [])

    const _fetchVouchers = async () => {
        try {
            const {count, promotions} = await SonkimApiService.GetVouchers()
            setVouchers(promotions)
        } catch (err:any) {
            Alert.alert(err.message)
        }
    }

    return (
        <ScrollView>
            <Box p={4} mt={4}>

                {
                    !vouchers
                        ? <Box width="full" p={4}><ActivityIndicator color="primary.500"/></Box>
                        : vouchers.map((item, index) => (
                            <VoucherCard voucher={item} key={index}/>
                        ))
                }
            </Box>
        </ScrollView>
    )
})

VouchersScreen.defaultProps = {authRequire: true}

export default VouchersScreen
