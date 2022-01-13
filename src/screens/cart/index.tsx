import React, {useState} from "react";
import {Box} from "native-base";
import {FilterHeader} from "./components/FilterHeader";
import {MainLayout, OrderGiftCardList, OrderVoucherList, PageProps} from "../../components";

const CartScreen: React.FC<PageProps> = MainLayout(() => {
    const [filter, setFilter] = useState<any>({display: "voucher"})

    const _onFilterChange = (filterData: any) => {
        console.log("filter change...", filterData)
        setFilter(filterData)
    }

    return (
        <Box flex={1}>
            <FilterHeader onChange={_onFilterChange}/>

            {
                filter.display === "voucher"
                    ? <OrderVoucherList filter={{...filter, display: undefined}}/>
                    : <OrderGiftCardList filter={{...filter, display: undefined}}/>
            }

        </Box>
    )
})

CartScreen.defaultProps = {authRequire: true}
export default CartScreen
