import React, { useContext, useState } from "react";
import { Box, Center, Icon, NativeBaseProvider, Pressable, ScrollView, Text, Button } from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import { Translate } from "../../share";
import LanguageProvider from "../../share/context/Language";
import ListCardBU from "../../components/molecules/card-bu/ListCardBU";

const LinkMembership = () => {
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
            <Box width="100%" bgColor="white" padding={3} flexDirection="row" justifyContent='center' alignContent="center" px={2} safeAreaTop={true}>
                <Button w="100%" rounded="lg" py={3} size="lg" colorScheme="primary">
                    Chọn
                </Button>
            </Box>
        </Box>
    );
};

export default LinkMembership;
