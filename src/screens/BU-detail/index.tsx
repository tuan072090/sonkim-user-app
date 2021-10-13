import React, { useContext } from "react";
import { Text, Box, Pressable } from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import { ScreenSize, StaticImages, Translate } from "../../share";
import LanguageProvider from "../../share/context/Language";
import { ImageStatic, MembershipCards } from "../../components";
import { ImageBackground, StyleSheet } from "react-native";

const sliderWidth = ScreenSize.vw;
const sliderImgWidth = sliderWidth - 30;

const BUDetailScreen = () => {
    const { language } = useContext(LanguageProvider.context);

    return (
        <Box flex={1}>
            <ScreenHeader
                hasBackButton={true}
                title={Translate[language].buDetail}
                bgColor="primary.500"
            ></ScreenHeader>
            <Box position="relative">

                <ImageStatic
                    width={sliderWidth}
                    resizeMode="cover"
                    top={0}
                    right={0}
                    left={0}
                    uri={StaticImages.banner_bu_detail}
                >
                </ImageStatic>
                {/* <Box
                    bg="linear-gradient(180deg, #086981 0%, #086981 18.11%, rgba(8, 105, 129, 0.7) 100%);"

                >
                </Box> */}

                <Box m={4} position='absolute'

                    bg="linear-gradient(180deg, #086981 0%, #086981 18.11%, rgba(8, 105, 129, 0.7) 100%);"
                >
                    <Text fontSize="xl" color="white">
                        Thông tin chủ thẻ
                    </Text>
                    <Text fontSize="md" color="white">
                        Tên chủ thẻ: Nguyễn Đinh H Đắc
                    </Text>
                    <Text fontSize="md" color="white">
                        Ngày đăng ký thẻ: 08/11/2021
                    </Text>
                </Box>

            </Box>
        </Box>
    );
};

export default BUDetailScreen;

const styles = StyleSheet.create({
    wrap: {},
});
