import { useNavigation } from '@react-navigation/core';
import { Box, Button, Center, HStack } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScreenName } from '../../../share';

const AccountHeader = () => {

    const navigation = useNavigation();

    const _navigateUserListCard = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.USER_LIST_CARD)
    }

    return (
        <View>
            <Box bg="primary.500" width="100%" height="32" px="4" py="4">
                <Center _text={{
                    fontStyle: 'normal',
                    fontWeight: 'semibold',
                    fontSize: 'md',
                    lineHeight: 'md',
                    letterSpacing: 'lg',
                    color: 'white'
                }}
                    px="6"
                    py="4"
                >
                    Nguyễn H Lâm
                </Center>
                <HStack justifyContent="space-around">
                    <Button borderRadius="lg" borderWidth="1" borderColor="white" _text={{
                        color: "white",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "sm",
                        lineHeight: 'lg',
                        letterSpacing: 'lg'
                    }}
                        bgColor="#ffffff80"
                        width="40"
                        onPress={_navigateUserListCard}
                    >
                        Danh sách thẻ
                    </Button>
                    <Button borderRadius="lg" borderWidth="1" borderColor="white" _text={{
                        color: "white",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "sm",
                        lineHeight: 'lg',
                        letterSpacing: 'lg'
                    }}
                        bgColor="#ffffff80"
                        width="40"
                    >
                        Thông tin tài khoản
                    </Button>
                </HStack>
            </Box>

        </View>
    )
}

export default AccountHeader

const styles = StyleSheet.create({})
