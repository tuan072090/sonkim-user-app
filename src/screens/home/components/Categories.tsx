import React from "react";
import {Box, Pressable, Text} from "native-base";
import {ImageStatic} from "../../../components";
import {StaticImages} from "../../../share";

export const Categories = () => {

    return (
        <>
            <Box mt={4} p={4} width="100%" flexDirection="row">
                <Pressable flex={1} flexDirection="column" alignItems="center">
                    <ImageStatic uri={StaticImages.earn_point} width={16} height={16} borderRadius={100}/>
                    <Text mt={2} textTransform="uppercase" textAlign="center">Tích, Dùng điểm</Text>
                </Pressable>

                <Pressable flex={1} flexDirection="column" alignItems="center">
                    <ImageStatic uri={StaticImages.register_card} width={16} height={16} borderRadius={100}/>
                    <Text mt={2} textTransform="uppercase" textAlign="center">Đăng ký thẻ</Text>
                </Pressable>

                <Pressable flex={1} flexDirection="column" alignItems="center">
                    <ImageStatic uri={StaticImages.link_card} width={16} height={16} borderRadius={100}/>
                    <Text mt={2} textTransform="uppercase" textAlign="center">Liên kết thẻ</Text>
                </Pressable>

                <Pressable flex={1} flexDirection="column" alignItems="center">
                    <ImageStatic uri={StaticImages.transfer_point} width={16} height={16} borderRadius={100}/>
                    <Text mt={2} textTransform="uppercase" textAlign="center">Đổi điểm</Text>
                </Pressable>
            </Box>

            <Box width="100%" alignItems="center">
                <Box width={20} height={0} borderWidth={1} borderColor="secondary.500" borderRadius={2}/>
            </Box>
        </>
    )
}
