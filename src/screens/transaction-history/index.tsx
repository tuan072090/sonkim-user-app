// transaction-history
import React, { useContext } from "react";
import { Box, Pressable, ScrollView, Text } from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import { StaticImages, Translate } from "../../share";
import { ImageStatic } from "../../components";
import ListCardStore from "../../components/molecules/card-store/ListCardStore";
import LanguageProvider from "../../share/context/Language";

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
                <ScrollView p={5}>
                    <Pressable p={3} bgColor="white" justifyContent="space-between" borderRadius={12} mb="3" shadow={1}>
                        <Box>
                            <Text>sadasd</Text>
                            <Text>23/11/2021</Text>
                            <Text>12:00</Text>
                        </Box>
                        <Box>
                            <Text>sadasd</Text>
                            <Text>23/11/2021</Text>
                            <Text>12:00</Text>
                        </Box>
                    </Pressable>
                    <Box mb={50}></Box>
                </ScrollView>
            </Box>
        </Box>
    );
};

export default TransactionHistory;
