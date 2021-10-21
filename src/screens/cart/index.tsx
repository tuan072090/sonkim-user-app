import React, {useContext, useState} from "react";
import {Box} from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import {Translate} from "../../share";
import LanguageProvider from "../../share/context/Language";

const CartScreen = () => {
  const {language} = useContext(LanguageProvider.context)

  return (
      <Box flex={1} >
        <ScreenHeader hasBackButton={true} title={Translate[language].orders} bgColor="primary.500"/>
      </Box>
  )
}

export default CartScreen
