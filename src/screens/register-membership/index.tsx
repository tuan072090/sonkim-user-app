import React, { useContext, useState } from "react";
import { Box, ScrollView } from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import { Translate } from "../../share";
import LanguageProvider from "../../share/context/Language";
import ListCardBU from "../../components/molecules/card-bu/ListCardBU";

const RegisterMembership = () => {
    const { language } = useContext(LanguageProvider.context);
    const [choise, setChoise] = useState('')

    return (
        <Box flex={1}>
            <ScreenHeader
                hasBackButton={true}
                title={Translate[language].registerMembership}
                bgColor="primary.500"
            />
            <ScrollView p={4} bgColor="white">
                <ListCardBU choise={choise} setChoise={setChoise}> </ListCardBU>
                <Box mt={20}></Box>
            </ScrollView>
        </Box>
    );
};

export default RegisterMembership;
