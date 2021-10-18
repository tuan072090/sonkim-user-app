import React, { useContext, useState } from "react";
import { Box, Button, ScrollView } from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import { ScreenName, Translate } from "../../share";
import LanguageProvider from "../../share/context/Language";
import ListCardBU from "../../components/molecules/card-bu/ListCardBU";
import { useNavigation } from "@react-navigation/core";

const LinkMembershipForm = () => {
    const { language } = useContext(LanguageProvider.context);
    const navigation = useNavigation();

    const _navigateForm = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.REGISTER_MEMBERSHIP_FORM)
    }

    return (
        <Box flex={1}>
            <ScreenHeader
                hasBackButton={true}
                title={'Health Spa'}
                bgColor="primary.500"
            />
            <ScrollView p={4} bgColor="white">
                {/* <ListCardBU choise={choise} setChoise={setChoise}> </ListCardBU> */}
                <Box mt={20}></Box>
            </ScrollView>
            <Box width="100%" bgColor="white" padding={3} flexDirection="row" justifyContent='center' alignContent="center" px={2} safeAreaTop={true}>
                <Button w="100%" onPress={_navigateForm} rounded="lg" py={3} size="lg" colorScheme="primary">
                    Chọn
                </Button>
            </Box>
        </Box>
    );
};

export default LinkMembershipForm;
