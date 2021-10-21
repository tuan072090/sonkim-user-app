import React from "react";
import ScreenHeader from "../../components/organisms/screen-header";
import AccountHeader from "./components/AccountHeader";
import {Box, Text} from "native-base";
import {MainLayout, PageProps} from "../../components";

const AccountSetting:React.FC<PageProps> = MainLayout(() => {

    return (
        <Box flex={1}>
            <ScreenHeader title="Nguyễn Hồng Lâm" bgColor="primary.500"/>

            <Text mt={5}>Account settings</Text>
        </Box>
    )
})

//  add auth require
AccountSetting.defaultProps = {authRequire: true}

export default AccountSetting
