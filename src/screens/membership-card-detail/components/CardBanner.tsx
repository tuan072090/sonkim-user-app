import React, {useState} from "react";
import {StyleSheet} from "react-native";
import {GS25Card, GSShopCard, Image, MembershipCard, SKMCard, Typo, WataminCard} from "../../../components";
import {Formatter, LoyaltyProgramTypes, UserMemberShipCardType} from "../../../share";
import {Box} from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import {useAppSelector} from "../../../redux/store";
import {SonkimBuIdType} from "../../../share/data-types/loyaltyProgram.types";
import JardinCard from "../../../components/organisms/membership-cards/JARDIN-card";
import {FormatDateFromDateString, FormatDateFromUnixTimestamp} from "../../../share/utils/formatter";

type ScreenBannerType = {
    bu: SonkimBuIdType
    loyaltyProgram: LoyaltyProgramTypes
}
export const CardBanner: React.FC<ScreenBannerType> = ({bu, loyaltyProgram}) => {
    const {user} = useAppSelector(state => state.auth)
    const [customerData, setCustomerData] = useState<any>(null)
    const {
        skmAccount,
        gsshopAccount,
        gs25Account,
        jardinAccount,
        wataminAccount
    } = useAppSelector(state => state.loyalty)

    const bannerImage = loyaltyProgram.business_unit.cover?.url || "https://sonkim.s3.ap-southeast-1.amazonaws.com/skm_bg_28fd403bd2.png"

    const _renderMemberShipCard = (bu: SonkimBuIdType) => {
        //'skm' | 'gsshop' | 'gs25' | 'watamin' | 'jardin' | 'vera' | 'jockey'
        switch (bu) {
            case "vera":
                return <SKMCard type="vera"/>
            case "jockey":
                return <SKMCard type="jockey"/>
            case 'gsshop':
                return <GSShopCard/>
            case "gs25":
                return <GS25Card/>
            case "watamin":
                return <WataminCard/>
            case "jardin":
                return <JardinCard/>
            default:
                return null
        }
    }

    const _renderMemberShipInfo = (bu: SonkimBuIdType) => {
        let name = ""
        let joinedDate = "Không xác định"

        switch (bu) {
            case "vera":
                name = skmAccount ? skmAccount.fullName : ""
                joinedDate = Formatter.FormatDateFromDateString(skmAccount.joinDate.substring(0,8))
                break
            case "jockey":
                name = skmAccount ? skmAccount.fullName : ""
                joinedDate = Formatter.FormatDateFromDateString(skmAccount.joinDate.substring(0,8))
                break
            case 'gsshop':
                name = gsshopAccount ? gsshopAccount.name : user.name
                joinedDate = Formatter.FormatDateFromUnixTimestamp(Math.round(gsshopAccount.register_at/1000), "dd/MM/yyy")
                break
            case "gs25":
                name = gs25Account ? gs25Account.name : user.name
                break
            case "watamin":
                console.log('wataminAccount', wataminAccount)
                name = wataminAccount ? wataminAccount.name : ""
                break
            case "jardin":
                name = jardinAccount ? jardinAccount.name : ""
                break
            default:
                break
        }

        return (
            <Box mt="4">
                <Typo type="subtitle16" color="white">
                    Thông tin chủ thẻ
                </Typo>
                <Typo mt={2} type="body14" color="white">
                    Tên chủ thẻ: {name}
                </Typo>
                <Typo mt={2} type="body14" color="white">
                    Ngày đăng ký
                    thẻ: {joinedDate}
                </Typo>
            </Box>
        )
    }

    return (
        <Box position="relative" bgColor="gray.200">
            {/* background image */}
            <Image
                width="100%"
                height="100%"
                position="absolute"
                resizeMode="cover"
                top={0}
                right={0}
                left={0}
                uri={bannerImage}
            />

            {/* background gradient */}
            <LinearGradient colors={['rgba(8, 105, 129, 1)', 'rgba(8, 105, 129, 0.8)', 'rgba(8, 105, 129, 0.7)']}
                            style={styles.gradientBox}/>

            {/* Card info */}
            <Box p={4} width="100%">
                <Box shadow={2}>
                    {
                        _renderMemberShipCard(bu)
                    }
                </Box>


                {
                    _renderMemberShipInfo(bu)
                }
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    gradientBox: {
        width: "100%",
        height: "100%",
        position: "absolute",
    }
})
