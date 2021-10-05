import React, {useState} from "react";
import {Box, Text} from "native-base";
import {Avatar, VoucherIcons} from "../../../components";

export const HomeHeader = () => {

  return (
      <Box bgColor="primary.500" px={4} py={3} flexDirection="row" alignItems="center" justifyContent="space-between" safeAreaTop>
          <Box flexDirection="row">
              <Avatar uri={"https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg"} size="sm"/>
              <Text ml={3} fontSize="lg" color="white">Chào bạn Lâm</Text>
          </Box>

          <Box position="relative" flexDirection="row" alignItems="center" px={4} py={2} >
              <Box position="absolute" top={0} left={0} right={0} bottom={0} bgColor="white" opacity={20} rounded="2xl"/>
              <VoucherIcons fill="white" size={6}/>
              <Text ml={2} fontSize="lg" fontWeight="medium" color="white">3</Text>
          </Box>
      </Box>
  )
}
