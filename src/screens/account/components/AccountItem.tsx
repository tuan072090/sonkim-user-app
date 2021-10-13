import { Box, Button, Center, HStack } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AccountItemType } from './AccountType'

const AccountItem:React.FC<AccountItemType> = ({item,...props}) => {
    return (
            <Box bgColor="white" borderRadius={12} height="12" mb="3" 
                shadow={4}
            >
                <HStack alignItems="center" justifyContent="space-between" py={2} px={5}   >
                    <HStack space={2} alignItems="center" justifyContent="space-around">
                        {item.startIcon}
                        <Box _text={{
                                fontStyle:'normal',
                                fontWeight:'semibold',
                                fontSize:'md',
                                lineHeight:'md',
                                letterSpacing:'lg',
                                color:'#626262'
                        }}>
                {item.title}</Box>
                    </HStack>
                    {item.endIcon}
                </HStack>
                
            </Box>
    )
}

export default AccountItem

