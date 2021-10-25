import {useNavigation} from '@react-navigation/core';
import {Box, Button, HStack} from 'native-base'
import React from 'react'
import {ScreenName} from '../../../share';

const AccountHeader = () => {

    const navigation = useNavigation();

    const _navigateUserListCard = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.USER_LIST_CARD)
    }

    const _navigateUserInfo = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.USER_INFO)
    }

    return (
        <Box bg="primary.500" width="100%" p={4}>

            <HStack space={4}>
                <Button flex={1} rounded="lg" borderWidth="1" borderColor="white" _text={{color: "white",}}
                        bgColor="rgba(255,255,255,0.5)"
                        onPress={_navigateUserListCard}>
                    Danh sách thẻ
                </Button>

                <Button flex={1} rounded="lg" borderWidth="1" borderColor="white" _text={{color: "white",}}
                        bgColor="rgba(255,255,255,0.5)"
                        onPress={_navigateUserInfo}>
                    Thông tin tài khoản
                </Button>
            </HStack>
        </Box>

    )
}

export default AccountHeader
