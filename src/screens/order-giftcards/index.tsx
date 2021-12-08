import React from "react";
import {MainLayout, OrderGiftCardList, PageProps} from "../../components";
import {Translate} from "../../share";
import ScreenHeader from "../../components/organisms/screen-header";
import {useAppSelector} from "../../redux/store";

const OrderGiftCardsScreen: React.FC<PageProps> = MainLayout(() => {
    const {language} = useAppSelector(state => state.settings)

    return (
        <>
            <ScreenHeader
                hasBackButton={true}
                title={Translate[language].orderGiftCards}
                bgColor="primary.500"
            />
            <OrderGiftCardList/>
        </>
    )
})

OrderGiftCardsScreen.defaultProps = {authRequire: true}

export default OrderGiftCardsScreen
