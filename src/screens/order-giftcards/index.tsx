import React, {useEffect, useState} from "react";
import {Box, FlatList} from "native-base";
import {ActivityIndicator, Alert} from "react-native";
import {MainLayout, PageProps, Typo} from "../../components";
import {SonkimApiService} from "../../share";
import {useNavigation, useRoute} from "@react-navigation/core";

const OrderGiftCardsScreen: React.FC<PageProps> = MainLayout(() => {
    const [orders, setOrders] = useState<any[] | null>(null)
    const navigation = useNavigation();
    const {params} = useRoute()

    useEffect(() => {
        _fetchOrders()
    }, [params])

    const _fetchOrders = async () => {
        SonkimApiService.GetOrderGiftCards({_limit: 20, _sort: "id:DESC"}).then(data => {
            const {count, giftcard_orders} = data
            setOrders(giftcard_orders)
        }).catch(err => {
            console.log("lấy order lỗi....", err)
            Alert.alert(err.message)
        })
    }

    //  @ts-ignore
    const _renderItem = ({item, index}) => {
        return null
    }

    return (
        <Box flex={1}>
            {
                !orders ? <Box p={4}><ActivityIndicator color="primary.500"/></Box>
                    : orders.length === 0 ?
                    <Box p={4}><Typo textAlign="center" type="subtitle14">Bạn chưa mua thẻ quà tặng nào</Typo></Box>
                    : <FlatList data={orders} renderItem={_renderItem}/>
            }
        </Box>
    )
})

OrderGiftCardsScreen.defaultProps = {authRequire: true}

export default OrderGiftCardsScreen
