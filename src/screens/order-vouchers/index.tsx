import React from "react";
import {MainLayout, OrderVoucherList, PageProps} from "../../components";

const OrderVouchersScreen: React.FC<PageProps> = MainLayout(() => {

    return <OrderVoucherList filter={{_limit: 50}}/>
})

OrderVouchersScreen.defaultProps = {authRequire: true}

export default OrderVouchersScreen
