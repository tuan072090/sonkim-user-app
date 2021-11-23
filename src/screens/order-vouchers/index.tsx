import React, {useContext} from "react";
import {MainLayout, OrderVoucherList, PageProps} from "../../components";
import {Translate} from "../../share";
import ScreenHeader from "../../components/organisms/screen-header";
import LanguageProvider from "../../share/context/Language";

const OrderVouchersScreen: React.FC<PageProps> = MainLayout(() => {
    const {language} = useContext(LanguageProvider.context);

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
