import React, { useContext } from "react";
import { Text, Box, Pressable, Button, ScrollView } from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import { ScreenSize, StaticImages, Translate } from "../../share";
import LanguageProvider from "../../share/context/Language";
import { ImageStatic, MembershipCards } from "../../components";
import { ImageBackground, StyleSheet } from "react-native";
import { Categories } from "./components/Categories";
import { VoucherList } from "./components/VoucherList";

const fullWidth = ScreenSize.vw;
const ImgWidth = fullWidth - 30;

const BUDetailScreen = () => {
    const { language } = useContext(LanguageProvider.context);

    return (
        <Box>
            <ScreenHeader
                hasBackButton={true}
                title={Translate[language].buDetail}
                bgColor="primary.500"
            />
            <ScrollView bgColor="white">

                <Box position="relative">
                    <ImageStatic
                        width={fullWidth}
                        resizeMode="cover"
                        top={0}
                        right={0}
                        left={0}
                        uri={StaticImages.banner_bu_detail}
                    ></ImageStatic>
                    <Box m={4} position="absolute" width={ImgWidth}>
                        <ImageBackground
                            source={StaticImages.frame4}
                            resizeMode="cover"
                            style={styles.image}
                        >
                            <ImageStatic
                                mx={3} mt={2}
                                uri={StaticImages.health_spa_nopadding}
                                width={12}
                                height={6}
                            />
                            <Text mx={3} color="tertiary.600" fontSize="lg">
                                Thành viên kim cương
                            </Text>
                            <Box p={3} mt="4" flexDirection="row" justifyContent="space-between">
                                <Text color="white" fontSize="lg">
                                    GS25_12345
                                </Text>
                                <Text color="white" fontSize="lg">
                                    15000 điểm
                                </Text>
                            </Box>
                        </ImageBackground>
                        <Box mt='4'>
                            <Text fontSize="xl" color="white" >
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
                <Categories ></Categories>
                <VoucherList ></VoucherList>
            </ScrollView >
        </Box>

    );
};

export default BUDetailScreen;

const cardHeight = ScreenSize.vw / 3; //  tỉ lệ 3.17
const styles = StyleSheet.create({
    image: {
        height: cardHeight,
        borderRadius: 20,
        overflow: "hidden",
        justifyContent: "space-between",
    },
});
