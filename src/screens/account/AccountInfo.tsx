import { Box } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ScreenHeader from '../../components/organisms/screen-header'

const AccountInfo = () => {
    return (
        <Box flex={1} position="relative">
            <ScreenHeader hasBackButton={true} title="Thông tin cá nhân" bgColor="primary.500"></ScreenHeader>
        </Box>
    )
}

export default AccountInfo

const styles = StyleSheet.create({})
