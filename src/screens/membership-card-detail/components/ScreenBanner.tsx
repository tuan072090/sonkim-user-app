import React from "react";
import {ImageBackground, StyleSheet} from "react-native";
import {ImageStatic} from "../../../components";
import {ScreenSize, StaticImages} from "../../../share";
import {Box, Text} from "native-base";

const fullWidth = ScreenSize.vw;
const ImgWidth = fullWidth - 30;

export const ScreenBanner = () => {

    return (
        <Box position="relative">
            <ImageStatic
                width={fullWidth}
                resizeMode="cover"
                top={0}
                right={0}
                left={0}
                height="100%"
                uri={StaticImages.banner_bu_detail}
            />
            <Box m={4} position="absolute" width={ImgWidth}>
                <ImageBackground
                    source={StaticImages.frame4}
                    resizeMode="cover"
                    style={styles.image}>
                    <ImageStatic
                        mx={3}
                        mt={2}
                        uri={StaticImages.health_spa_nopadding}
                        width={12}
                        height={6}
                    />
                    <Text mx={3} color="tertiary.600" fontSize="lg">
                        Thành viên kim cương
                    </Text>
                    <Box
                        p={3}
                        mt="4"
                        flexDirection="row"
                        justifyContent="space-between">
                        <Text color="white" fontSize="lg">
                            GS25_12345
                        </Text>
                        <Text color="white" fontSize="lg">
                            15000 điểm
                        </Text>
                    </Box>
                </ImageBackground>
                <Box mt="4">
                    <Text fontSize="xl" color="white">
                        Thông tin chủ thẻ
                    </Text>
                    <Text fontSize="lg" color="white">
                        Tên chủ thẻ: Nguyễn Đinh H Đắc
                    </Text>
                    <Text fontSize="lg" color="white">
                        Ngày đăng ký thẻ: 08/11/2021
                    </Text>
                </Box>
            </Box>
        </Box>
    )
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
