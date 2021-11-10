import React, {useEffect, useState} from "react";
import {SonkimApiService} from "../../../share";
import {ActivityIndicator, Alert} from "react-native";
import {Box, FlatList} from "native-base";
import {Typo} from "../../index";
import {OrderGiftCardListTypes} from "./OrderGiftCardList.types";
import OrderGiftCardCard from "../../organisms/order-gift-card";

const OrderGiftCardList: React.FC<OrderGiftCardListTypes> = ({filter = {}}) => {
    const [orders, setOrders] = useState<any[] | null>(null)
    const [count, setCount] = useState<number | null>(null)

    useEffect(() => {
        _fetchOrders()
    }, [filter])

    const _fetchOrders = async () => {
        let queryParams = {...filter}
        if (typeof queryParams["_limit"] === "undefined")
            queryParams["_limit"] = 20
        if (typeof queryParams["_sort"] === "undefined")
            queryParams["_sort"] = "id:DESC"

        SonkimApiService.GetOrderGiftCards(queryParams).then(data => {
            const {count, giftcard_orders} = data
            setOrders(giftcard_orders)
            setCount(count)
        }).catch(err => {
            Alert.alert(err.message)
        })
    }

    //  @ts-ignore
    const _renderItem = ({item, index}) => {
        return (
            <Box px={4} py={2} key={index}><OrderGiftCardCard order={item}/></Box>
        )
    }

    return (
        <Box flex={1}>
            {
                !orders ? <Box p={4}><ActivityIndicator color="primary.500"/></Box>
                    : orders.length === 0 ?
                    <Box p={4}><Typo textAlign="center" type="subtitle14">Bạn chưa mua thẻ quà tặng nào</Typo></Box>
                    : <FlatList
                        data={orders}
                        renderItem={_renderItem}
                        ListHeaderComponent={(<Typo p={4} type="body14">Có {count ? count : "..."} thẻ quà tặng</Typo>)}
                    />
            }
        </Box>
    )
}

export default OrderGiftCardList
