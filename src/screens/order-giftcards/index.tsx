import React from "react";
import {MainLayout, OrderGiftCardList, PageProps} from "../../components";

const OrderGiftCardsScreen: React.FC<PageProps> = MainLayout(() => {

    return <OrderGiftCardList/>
})

OrderGiftCardsScreen.defaultProps = {authRequire: true}

export default OrderGiftCardsScreen
