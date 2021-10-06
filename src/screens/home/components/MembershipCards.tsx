import React from "react";
import {Box, Button, Text} from "native-base";
import {ImageBackground, StyleSheet} from "react-native";
import {ScreenSize, StaticImages} from "../../../share";
import {ImageStatic} from "../../../components";


export const MembershipCards = () => {

    return (
        <Box p={4} mt={4}>
            <Text fontSize="xl" color="primary.500">Thẻ thành viên</Text>
            <Text fontSize="md" color="gray.400">Danh sách thẻ thành viên của SKR</Text>

            <Box mt={4}>
                <ImageBackground source={StaticImages.frame1} resizeMode="cover" style={styles.image}>
                    <ImageStatic mt={2} mx={3} uri={StaticImages.gs25_nopadding} width={12} height={6}/>
                    <Text px={3} color="white" fontSize="md" fontWeight="semibold">Thành viên bạc</Text>

                    <Box p={3} flexDirection="row" justifyContent="space-between">
                        <Text color="white" fontSize="lg">GS25_12345</Text>
                        <Text color="primary.600" fontSize="lg">120 điểm</Text>
                    </Box>
                </ImageBackground>
            </Box>

            <Box mt={4}>
                <ImageBackground source={StaticImages.frame2} resizeMode="cover" style={styles.image}>
                    <ImageStatic mt={2} mx={3} uri={StaticImages.lazada_nopadding} width={12} height={6}/>
                    <Text px={3} color="white" fontSize="md" fontWeight="semibold">Thành viên vàng</Text>

                    <Box p={3} flexDirection="row" justifyContent="space-between">
                        <Text color="white" fontSize="lg">LAZ_12345</Text>
                        <Text color="white" fontSize="lg">900 điểm</Text>
                    </Box>
                </ImageBackground>
            </Box>

            <Box mt={4}>
                <ImageBackground source={StaticImages.frame3} resizeMode="cover" style={styles.image}>
                    <ImageStatic mt={2} mx={3} uri={StaticImages.jardin_nopadding} width={12} height={6}/>
                    <Text px={3} color="white" fontSize="md" fontWeight="semibold">Thành viên mới</Text>

                    <Box p={3} flexDirection="row" justifyContent="space-between">
                        <Text color="white" fontSize="lg">MBSMS_12345</Text>
                        <Text color="white" fontSize="lg">10 điểm</Text>
                    </Box>
                </ImageBackground>
            </Box>

            <Box mt={4}>
                <ImageBackground source={StaticImages.frame4} resizeMode="cover" style={styles.image}>
                    <Box alignItems="center" width="100%">
                        <ImageStatic mt={2} mx={3} uri={StaticImages.health_spa_nopadding} width={20} height={10}/>

                        <Box p={3} flexDirection="row" justifyContent="space-between">
                            <Button bgColor="white" size="lg" rounded="lg" _text={{color: "primary.500"}}>Liên kết thẻ</Button>
                        </Box>
                    </Box>
                </ImageBackground>
            </Box>
        </Box>
    )
}

const cardHeight = (ScreenSize.vw ) / 3.17  //  tỉ lệ 3.17

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: cardHeight,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: "space-between"
    }
})
