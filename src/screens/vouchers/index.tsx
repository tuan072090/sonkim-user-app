import React, {useEffect, useState} from "react";
import {Box, ScrollView, Text} from "native-base";
import {ActivityIndicator, Alert} from "react-native";
import {MainLayout, VoucherCard} from "../../components";
import {PromotionType, SonkimApiService} from "../../share";
import {useNavigation, useRoute} from "@react-navigation/core";

const VouchersScreen: React.FC<any> = MainLayout(() => {
    const [vouchers, setVouchers] = useState<PromotionType[] | null>(null)
    const navigation = useNavigation();
    const {params} = useRoute()

    useEffect(() => {
        _fetchVouchers()
    }, [params])

    const _fetchVouchers = async () => {
        try {
            //  @ts-ignore
            const filter = typeof params["filter"] !== "undefined" ? {...params["filter"],_limit: 20} : {_limit: 20}
            const {count, promotions} = await SonkimApiService.GetPromotions(filter)
            setVouchers(promotions)
        } catch (err) {
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
                            <Box width="100%" mb={4}  key={index}>
                                <VoucherCard voucher={item}/>
                            </Box>
                        ))
                }
            </Box>
        </ScrollView>
    )
})

export default VouchersScreen
