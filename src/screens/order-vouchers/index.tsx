import React, {useContext} from "react";
import {MainLayout, OrderVoucherList, PageProps} from "../../components";
import {Translate} from "../../share";
import ScreenHeader from "../../components/organisms/screen-header";
import {useAppSelector} from "../../redux/store";

const OrderVouchersScreen: React.FC<PageProps> = MainLayout(() => {
    const {language} = useAppSelector(state => state.settings)

    return (
        <>
            <ScreenHeader
                hasBackButton={true}
                title={Translate[language].orderVouchers}
                bgColor="primary.500"
            />
            <OrderVoucherList filter={{_limit: 50}}/>
        </>
    )
})

OrderVouchersScreen.defaultProps = {authRequire: true}

export default OrderVouchersScreen
