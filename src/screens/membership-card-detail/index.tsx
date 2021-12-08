import React, {useEffect, useState} from "react";
import {Box, ScrollView} from "native-base";
import {SonkimApiService, Translate, UserMemberShipCardType} from "../../share";
import {useNavigation, useRoute} from "@react-navigation/core";
import ScreenHeader from "../../components/organisms/screen-header";
import {FullScreenLoader, MainLayout, PageProps, PressBox, RefreshIcon} from "../../components";
import {Alert} from "react-native";
import {CardBanner} from "./components/CardBanner";
import {CardCategories} from "./components/CardCategories";
import {VoucherList} from "./components/VoucherList";
import {GiftCardList} from "./components/GiftCardList";
import {useAppSelector} from "../../redux/store";

const MemberShipCardDetailScreen: React.FC<PageProps> = MainLayout(() => {
    const [cardDetail, setCardDetail] = useState<UserMemberShipCardType | null>(null)
    const {language} = useAppSelector(state => state.settings)
    const navigation = useNavigation();
    const {params} = useRoute()

    useEffect(() => {
        if (params) {
            _fetchData()
        }
    }, [params])

    const _fetchData = () => {
        console.log("params....", params)
        //  @ts-ignore
        SonkimApiService.GetUserMembershipCardDetail(params.id).then(data => {
            setCardDetail(data)
        }).catch(err => {
            Alert.alert(err.message)
        })
    }

    if (!cardDetail) return <FullScreenLoader/>

    const {point, label, membership_info, loyalty_program, created_at} = cardDetail

    return (
        <Box flex={1} width={"100%"} alignContent="center" justifyContent="center">
            <ScreenHeader
                title={Translate('buDetail')}
                bgColor="primary.500"
                rightComponent={<PressBox onPress={_fetchData} p={3} alignItems="flex-end" width="100%"><RefreshIcon
                    size={6}/></PressBox>}
            />

            <ScrollView bgColor="white">
                <CardBanner membershipCard={cardDetail}/>

                <CardCategories membershipCard={cardDetail}/>

                <VoucherList membershipCard={cardDetail}/>

                <GiftCardList membershipCard={cardDetail}/>
                <Box mb={50}/>
            </ScrollView>
        </Box>
    );
})

MemberShipCardDetailScreen.defaultProps = {authRequire: true}

export default MemberShipCardDetailScreen
