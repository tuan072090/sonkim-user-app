import React from "react";
import {MainLayout, OrderVoucherList, PageProps} from "../../components";
import {Translate} from "../../share";
import ScreenHeader from "../../components/organisms/screen-header";

const OrderVouchersScreen: React.FC<PageProps> = MainLayout(() => {

    return (
        <>
            <ScreenHeader
                hasBackButton={true}
                title={Translate('orderVouchers')}
                bgColor="primary.500"
            />
            <OrderVoucherList filter={{_limit: 50}}/>
        </>
    )
})

OrderVouchersScreen.defaultProps = {authRequire: true}

export default OrderVouchersScreen
