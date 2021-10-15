import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { ScreenSize, StaticImages } from "../../../share";
import { ImageStatic } from "../../index";
import { Box, Button, Text } from "native-base";
import { MembershipCardTypes } from "./membershipCard.types";
import { IBoxProps } from "native-base/lib/typescript/components/primitives/Box/types";

const MembershipCard: React.FC<MembershipCardTypes> = ({ name, ...props }) => {

    const cardBackgroundSample = name === "gs25" ? StaticImages.frame1
        : name === "lazada" ? StaticImages.frame2
            : name === "jardin" ? StaticImages.frame3
                : name === "healthSpa" ? StaticImages.frame4 : StaticImages.frame5

    const cardLogoSample = name === "gs25" ? StaticImages.gs25_nopadding
        : name === "lazada" ? StaticImages.lazada_nopadding
            : name === "jardin" ? StaticImages.jardin_nopadding
                : name === "healthSpa" ? StaticImages.health_spa_nopadding : StaticImages.fallback_img

    const memberArchiveSample = name === "gs25" ? "Thành viên bạc"
        : name === "lazada" ? "Thành viên vàng"
            : name === "jardin" ? "Thành viên mới"
                : name === "healthSpa" ? "Thành viên đồng" : ""

    return (
        <Box {...props}>
            <ImageBackground source={cardBackgroundSample} resizeMode="cover" style={styles.image}>
                <ImageStatic mt={2} mx={3} uri={cardLogoSample} width={12} height={6} />
                <Text px={3} color="white" fontSize="md" fontWeight="semibold">{memberArchiveSample}</Text>
                <Box p={3} flexDirection="row" justifyContent="space-between">
                    <Text color="white" fontSize="lg">GS25_12345</Text>
                    <Text color="primary.600" fontSize="lg">120 điểm</Text>
                </Box>
            </ImageBackground>
        </Box>
    )
}

const RegisterCard: React.FC<IBoxProps> = (props) => {
    return (
        <Box {...props}>
            <ImageBackground source={StaticImages.frame4} resizeMode="cover" style={styles.image}>
                <Box alignItems="center" width="100%">
                    <ImageStatic mt={2} mx={3} uri={StaticImages.health_spa_nopadding} width={20} height={10} />

                    <Box p={3} flexDirection="row" justifyContent="space-between">
                        <Button bgColor="white" size="lg" rounded="lg" _text={{ color: "primary.500" }}>Liên kết thẻ</Button>
                    </Box>
                </Box>
            </ImageBackground>
        </Box>
    )
}

const MembershipCards = {
    GS15: (props: any) => <MembershipCard name="gs25" {...props} />,
    Lazada: (props: any) => <MembershipCard name="lazada" {...props} />,
    Jardin: (props: any) => <MembershipCard name="jardin" {...props} />,
    HealthSpa: (props: any) => <MembershipCard name="healthSpa" {...props} />,
    NotRegister: (props: any) => <RegisterCard {...props} />
}

export default MembershipCards

const cardHeight = (ScreenSize.vw) / 3.17  //  tỉ lệ 3.17
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: cardHeight,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: "space-between"
    }
})
