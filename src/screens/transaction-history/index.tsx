// transaction-history
import React, { useContext } from "react";
import { Box, Center, HStack, Pressable, ScrollView, Text } from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import { StaticImages, Translate } from "../../share";
import { HistoryIcon, ImageStatic } from "../../components";
import ListCardStore from "../../components/molecules/card-store/ListCardStore";
import LanguageProvider from "../../share/context/Language";
import CardBU from "../../components/molecules/card-bu";
import TransationBU from "./components/TransationBU";

const TransactionHistory = () => {
    const { language } = useContext(LanguageProvider.context);

    return (
        <Box flex={1} alignItems="center">
            <Box flex={1} width="100%">
                <ScreenHeader
                    hasBackButton={true}
                    title={Translate[language].transactionHistory}
                    bgColor="primary.500"
                />
                <ScrollView p={5} width="100%">
                    <TransationBU key='1' />
                    <TransationBU key='2' />
                    <TransationBU key='3' />
                    <Box mb={50}></Box>
                </ScrollView>
            </Box>
        </Box>
    );
};

export default TransactionHistory;
