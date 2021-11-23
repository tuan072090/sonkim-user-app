import React, {useContext} from "react";
import {MainLayout, OrderGiftCardList, PageProps} from "../../components";
import LanguageProvider from "../../share/context/Language";
import {Translate} from "../../share";
import ScreenHeader from "../../components/organisms/screen-header";

const OrderGiftCardsScreen: React.FC<PageProps> = MainLayout(() => {
    const {language} = useContext(LanguageProvider.context);

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
