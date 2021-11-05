import React, {useContext, useEffect, useState} from "react";
import {Box, Button, Pressable, ScrollView, SimpleGrid, Text, VStack} from "native-base";
import {ScreenName, SonkimApiService, Translate, UserMemberShipCardType} from "../../share";
import LanguageProvider from "../../share/context/Language";
import {useNavigation, useRoute} from "@react-navigation/core";
import ScreenHeader from "../../components/organisms/screen-header";
import {FullScreenLoader, MainLayout, PageProps, PressBox, RefreshIcon} from "../../components";
import {Alert} from "react-native";
import CardStore from "../../components/molecules/card-store";
import {CardBanner} from "./components/CardBanner";
import {CardCategories} from "./components/CardCategories";
import {CardVoucherList} from "./components/CardVoucherList";
import {GiftCardList} from "./components/GiftCardList";

const MemberShipCardDetailScreen: React.FC<PageProps> = MainLayout(() => {
    const [cardDetail, setCardDetail] = useState<UserMemberShipCardType | null>(null)
    const {language} = useContext(LanguageProvider.context);
    const navigation = useNavigation();
    const {params} = useRoute()

    useEffect(() => {
        if (params) {
            _fetchData()
        }
    }, [params])

    const _fetchData = () => {
        //  @ts-ignore
        SonkimApiService.GetUserMembershipCardDetail(params.id).then(data => {
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

    if (!cardDetail) return <FullScreenLoader/>

    const {point, label, membership_info, loyalty_program, created_at} = cardDetail

    return (
        <Box flex={1} width={"100%"} alignContent="center" justifyContent="center">
            <ScreenHeader
                title={Translate[language].buDetail}
                bgColor="primary.500"
                rightComponent={<PressBox onPress={_fetchData} p={3} alignItems="flex-end" width="100%"><RefreshIcon size={6}/></PressBox>}
            />

            <ScrollView bgColor="white">
                <CardBanner membershipCard={cardDetail}/>

                <CardCategories membershipCard={cardDetail}/>

                <CardVoucherList membershipCard={cardDetail}/>

                <GiftCardList membershipCard={cardDetail}/>
                <Box mb={50}/>
            </ScrollView>
        </Box>
    );
})

MemberShipCardDetailScreen.defaultProps = {authRequire: true}

export default MemberShipCardDetailScreen
