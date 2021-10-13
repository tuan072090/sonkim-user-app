import { Button } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AccountItemType } from './AccountType'

const AccountItem:React.FC<AccountItemType> = ({item,...props}) => {
    return (
        <Button colorScheme="white" rounded="lg" startIcon={item.startIcon} endIcon={item.endIcon} _text={{
            fontStyle:'normal',
            fontWeight:'semibold',
            fontSize:'md',
            lineHeight:'md',
            letterSpacing:'lg',
            color:'#626262'
        }}
            shadow={1}
        >{item.title}</Button>
    )
}

export default AccountItem

const styles = StyleSheet.create({})
