import React, {useContext, useEffect, useState} from "react";
import {Box, Button, ScrollView, SimpleGrid, Text, VStack} from "native-base";
import {ScreenName, ScreenSize, SonkimApiService, StaticImages, Translate, UserMemberShipCardType} from "../../share";
import LanguageProvider from "../../share/context/Language";
import {useNavigation, useRoute} from "@react-navigation/core";
import ScreenHeader from "../../components/organisms/screen-header";
import {FullScreenLoader, ImageStatic} from "../../components";
import {Alert, ImageBackground, StyleSheet} from "react-native";
import {Categories} from "../loyalty-detail/components/Categories";
import {VoucherList} from "../loyalty-detail/components/VoucherList";
import CardStore from "../../components/molecules/card-store";
import {ScreenBanner} from "./components/ScreenBanner";


const MemberShipCardDetailScreen = () => {
    const [cardDetail, setCardDetail] = useState<UserMemberShipCardType|null>(null)
    const { language } = useContext(LanguageProvider.context);
    const navigation = useNavigation();
    const {params} = useRoute()

    useEffect(() => {
        if(params){
            _fetchData()
        }
    },[params])

    const _fetchData = () => {
        //  @ts-ignore
        SonkimApiService.GetUserMembershipCardDetail(params.id).then(data => {
            console.log("data....", data)
            setCardDetail(data)
        }).catch(err => {
            Alert.alert(err.message)
        })
    }

    const _navigateStorepage = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.STORE);
    };

    const _navigateListVoucher = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.VOUCHERS_SCREEN);
    };

    if(!cardDetail) return <FullScreenLoader/>

    const {point, label, membership_info, loyalty_program, created_at} = cardDetail

    return (
        <Box flex={1}
            width={"100%"}
            alignContent="center"
            justifyContent="center">
            <ScreenHeader
                hasBackButton={true}
                title={Translate[language].buDetail}
                bgColor="primary.500"
            />

            <ScrollView bgColor="white">
                <ScreenBanner/>

                <Categories/>

                <VoucherList/>

                <Text
                    py={5}
                    underline
                    fontSize="md"
                    color="red.400" onPress={_navigateListVoucher}
                    textAlign="center"
                >
                    Xem tất cả
                </Text>
                <Box p={5}>
                    <VStack space={3}>
                        <SimpleGrid columns={2} spacingY={3} spacingX={3}>
                            <CardStore/>
                            <CardStore/>
                        </SimpleGrid>
                    </VStack>
                    <Text
                        py={5}
                        underline
                        fontSize="md"
                        color="red.400"
                        textAlign="center"
                        onPress={_navigateStorepage}
                    >
                        Xem tất cả
                    </Text>
                </Box>
                <Box flex={1} width={"100%"} p={5} alignItems="center">
                    <Button
                        width={"45%"}
                        rounded="xl"
                        bgColor="info.100"
                        _text={{ color: "primary.500" }}
                    >
                        Lên đầu trang
                    </Button>
                </Box>
                <Box mb={50}/>
            </ScrollView>
        </Box>
    );
}


const cardHeight = ScreenSize.vw / 3; //  tỉ lệ 3.17
const styles = StyleSheet.create({
    image: {
        height: cardHeight,
        borderRadius: 20,
        overflow: "hidden",
        justifyContent: "space-between",
    },
});

export default MemberShipCardDetailScreen
