import React, {useEffect, useState} from "react";
import {Box, ScrollView} from "native-base";
import {LoyaltyProgramTypes, SonkimApiService, Translate, UserMemberShipCardType} from "../../share";
import {useNavigation, useRoute} from "@react-navigation/core";
import ScreenHeader from "../../components/organisms/screen-header";
import {FullScreenLoader, MainLayout, PageProps, PressBox, RefreshIcon} from "../../components";
import {Alert} from "react-native";
import {CardBanner} from "./components/CardBanner";
import {CardCategories} from "./components/CardCategories";
import {VoucherList} from "./components/VoucherList";
import {GiftCardList} from "./components/GiftCardList";
import {useAppSelector} from "../../redux/store";
import {BuMapping} from "../../share/configs/commonConfigs";
import {alignEnum} from "react-native-svg/lib/typescript/lib/extract/extractViewBox";

const MemberShipCardDetailScreen: React.FC<PageProps> = MainLayout(() => {
    const [cardDetail, setCardDetail] = useState<UserMemberShipCardType | null>(null)
    const [loyaltyProgram, setLoyaltyProgram] = useState<null | LoyaltyProgramTypes>(null)
    const {language} = useAppSelector(state => state.settings)
    const navigation = useNavigation();
    const {params} = useRoute()

    useEffect(() => {
        if (params) {
            console.log("params truyền vô.....", params)
            //  @ts-ignore
            _fetchData()
        }
    }, [params])

    const _fetchData = async () => {
       try {
           //  @ts-ignore
           const loyaltyData = await SonkimApiService.GetLoyaltyProgramDetail(params.id)
           setLoyaltyProgram(loyaltyData)
       } catch (err){
           Alert.alert(err.message)
       }
    }


    return (
        <Box flex={1} width={"100%"} alignContent="center" justifyContent="center">
            <ScreenHeader
                title={Translate('buDetail')}
                bgColor="primary.500"
                rightComponent={<PressBox onPress={_fetchData} p={3} alignItems="flex-end" width="100%"><RefreshIcon
                    size={6}/></PressBox>}
            />

            <ScrollView bgColor="white">

                {// @ts-ignore
                    loyaltyProgram && <CardBanner bu={params.bu} loyaltyProgram={loyaltyProgram}/>
                }

                <CardCategories/>

                {loyaltyProgram && <VoucherList loyaltyProgram={loyaltyProgram}/>}

                {loyaltyProgram && <GiftCardList loyaltyProgram={loyaltyProgram}/>}
                <Box mb={50}/>
            </ScrollView>
        </Box>
    );
})

MemberShipCardDetailScreen.defaultProps = {authRequire: true}

export default MemberShipCardDetailScreen
