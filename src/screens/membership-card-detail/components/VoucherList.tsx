import React, {useEffect, useState} from "react";
import {Box} from "native-base";
import {Colors, PromotionType, ScreenName, SonkimApiService, UserMemberShipCardType} from '../../../share'
import {MyButton, PressBox, Typo, VoucherCard} from "../../../components";
import {ActivityIndicator, Alert} from "react-native";
import {useNavigation} from "@react-navigation/core";

export const VoucherList: React.FC<{ membershipCard: UserMemberShipCardType }> = ({membershipCard}) => {
    const [promotions, setPromotions] = useState<PromotionType[] | null>(null)
    const [total, setTotal] = useState<number|null>(null)
    const navigation = useNavigation();
    const {loyalty_program} = membershipCard

    useEffect(() => {
        if (membershipCard) {
            _fetchPromotions()
        }
    }, [membershipCard])

    const _fetchPromotions = () => {
        //  filter by loyalty program unit
        SonkimApiService.GetPromotions({loyalty_program: loyalty_program.id, _limit: 2}).then(data => {
            const {count, promotions} = data;
            setPromotions(promotions)
            setTotal(count)
        }).catch(err => {
            Alert.alert("Lỗi "+err.message)
        })
    }

    const _navigateListVoucher = (filter:boolean = true) => {
        if(!filter){
            //  @ts-ignore
            navigation.navigate(ScreenName.VOUCHERS_SCREEN)
            return
        }
        //  @ts-ignore
        navigation.navigate(ScreenName.VOUCHERS_SCREEN, {filter: {loyalty_program: loyalty_program.id}})
    }

    return (
        <Box p={4} mt={4}>
            <Typo type="subtitle16" color="primary.500">
                Danh sách khuyến mãi
            </Typo>

            <Box alignItems="center" mt={3}>
                {
                    !promotions ? <ActivityIndicator color={Colors.primary["500"]}/>
                        : promotions.length === 0
                        ? <>
                            <Typo type={"subtitle14"} my={3} color="secondary.500" textAlign="center">Chưa có ưu đãi nào</Typo>
                            <MyButton onPress={() => _navigateListVoucher(false)} mt={3}
                                      bgColor="info.100"
                                      _text={{color: "primary.500"}}>Xem thương hiệu khác</MyButton>
                        </>
                        : promotions.map((item, key) => {
                            return (
                                <Box width="100%" mb={4}  key={key}>
                                    <VoucherCard voucher={item}/>
                                </Box>
                            )
                        })
                }

                {
                    total !== null && total > 2 && <PressBox onPress={()=>_navigateListVoucher(true)} p={3} width="100%" alignItems="center">
                        <Typo type="body14" color="rose.900" textAlign="center" style={{textDecorationLine: "underline"}}>Xem tất cả {total} khuyến mại</Typo>
                    </PressBox>
                }
            </Box>
        </Box>
    );
};
