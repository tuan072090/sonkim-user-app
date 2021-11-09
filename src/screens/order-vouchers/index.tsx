import React, {useEffect, useState} from "react";
import {Box, FlatList} from "native-base";
import {ActivityIndicator, Alert} from "react-native";
import {MainLayout, OrderVoucherCard, PageProps, Typo} from "../../components";
import {SonkimApiService} from "../../share";
import {useNavigation, useRoute} from "@react-navigation/core";

const OrderVouchersScreen: React.FC<PageProps> = MainLayout(() => {
    const [orders, setOrders] = useState<any[] | null>(null)
    const [count, setCount] = useState<number|null>(null)

    const navigation = useNavigation();
    const {params} = useRoute()

    useEffect(() => {
        _fetchOrders()
    }, [params])

    const _fetchOrders = async () => {
        SonkimApiService.GetOrderPromotions({_limit: 20, _sort: "id:DESC"}).then(data => {
            const {count, promotion_orders} = data
            setOrders(promotion_orders)
            setCount(count)
        }).catch(err => {
            Alert.alert(err.message)
        })
    }

    //  @ts-ignore
    const _renderItem = ({item, index}) => {
        return (
            <Box px={4} py={2} key={index}><OrderVoucherCard order={item}/></Box>
        )
    }

    return (
        <Box flex={1}>
            {
                !orders ? <Box p={4}><ActivityIndicator color="primary.500"/></Box>
                    : orders.length === 0 ?
                    <Box p={4}><Typo textAlign="center" type="subtitle14">Bạn chưa mua ưu đãi nào</Typo></Box>
                    : <FlatList
                        data={orders}
                        renderItem={_renderItem}
                        ListHeaderComponent={(<Typo p={4} type="body14">Có {count? count : "..."} kết quả</Typo>)}
                    />
            }
        </Box>
    )
})

OrderVouchersScreen.defaultProps = {authRequire: true}

export default OrderVouchersScreen
