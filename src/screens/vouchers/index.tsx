import React, {useEffect, useState} from "react";
import {Box, FlatList} from "native-base";
import {Alert} from "react-native";
import {FullScreenLoader, ListLoyaltyFilter, MainLayout, Typo, VoucherCard} from "../../components";
import {LoyaltyProgramTypes, PromotionType, SonkimApiService} from "../../share";
import {useRoute} from "@react-navigation/core";
import ScreenHeader from "../../components/organisms/screen-header";

const VouchersScreen: React.FC<any> = MainLayout(() => {
    const [vouchers, setVouchers] = useState<PromotionType[] | null>(null)
    const [total, setTotal] = useState<number|null>(null)
    const [filter, setFilter] = useState<any>({_limit: 20})
    const {params}: any = useRoute()

    useEffect(() => {
        if (params && params["filter"]) {
            setFilter({...filter, ...params["filter"]})
        }
    }, [params])

    useEffect(() => {
        _fetchVouchers()
    }, [filter])

    const _fetchVouchers = async () => {
        try {
            const {count, promotions} = await SonkimApiService.GetPromotions(filter)
            setVouchers(promotions)
            setTotal(count)
        } catch (err) {
            Alert.alert(err.message)
        }
    }

    const _onLoyaltyFilterChange = (loyaltyProgram: LoyaltyProgramTypes | null) => {
        console.log("filterChange....", loyaltyProgram)
        const newFilter = {...filter}
        if(!loyaltyProgram){
            delete newFilter["loyalty_program"]
        }else {
            newFilter["loyalty_program"] = loyaltyProgram.id
        }
        setFilter(newFilter)
    }

    //  @ts-ignore
    const _renderItem = ({item, index}) => {
        return (<Box p={4} key={index}><VoucherCard voucher={item}/></Box>)
    }

    if (!vouchers) return <FullScreenLoader/>

    return (
        <Box flex={1}>
            <ScreenHeader title="Dánh sách ưu đãi" bg="primary.500"/>

            <Box bgColor="primary.500"><ListLoyaltyFilter onChange={_onLoyaltyFilterChange}/></Box>

            <FlatList
                data={vouchers}
                renderItem={_renderItem}
                ListHeaderComponent={<Typo type="body14" textAlign="center" mt={5}>Có {total !== null ? total : "..."} kết quả</Typo>}
                ListFooterComponent={<Box width="100%" height={16}/>}
            />
        </Box>
    )
})

export default VouchersScreen
