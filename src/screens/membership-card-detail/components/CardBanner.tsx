import React from "react";
import {StyleSheet} from "react-native";
import {Image, MembershipCard, Typo} from "../../../components";
import {Formatter, UserMemberShipCardType} from "../../../share";
import {Box} from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import {useAppSelector} from "../../../redux/store";

type ScreenBannerType = {
    membershipCard: UserMemberShipCardType
}
export const CardBanner: React.FC<ScreenBannerType> = ({membershipCard}) => {
    const {user} = useAppSelector(state => state.auth)
    const {point, label, membership_info, loyalty_program, created_at} = membershipCard

    const bannerImage = loyalty_program.business_unit.cover?.url || "https://sonkim.s3.ap-southeast-1.amazonaws.com/BU_placeholder_f0a2ae6b29.jpg"

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

                <MembershipCard item={membershipCard}/>

                <Box mt="4">
                    <Typo type="subtitle16" color="white">
                        Thông tin chủ thẻ
                    </Typo>
                    <Typo mt={2} type="body14" color="white">
                        Tên chủ thẻ: {membership_info?.name || user.name || "Chưa cập nhật"}
                    </Typo>
                    <Typo mt={2} type="body14" color="white">
                        Ngày đăng ký
                        thẻ: {Formatter.FormatDateFromDate(new Date(membershipCard.created_at), "dd/MM/yyyy")}
                    </Typo>
                </Box>
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
