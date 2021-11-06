import {useNavigation, useRoute} from '@react-navigation/core'
import {Box, Button, Center, HStack, ScrollView, Text, VStack} from 'native-base';
import React, {useEffect} from 'react'
import {ImageStatic, QrCode} from '../../components';
import ScreenHeader from '../../components/organisms/screen-header';
import {ScreenSize, SonkimApiService, StaticImages} from '../../share';
import GiftCardPointInfo from '../order-giftcard-detail/components/GiftCardPointInfo';
import {Alert} from "react-native";

const GiftCardDetail = ({fromBottom = true, ...props}) => {
    const navigation = useNavigation();
    const {params}:any = useRoute()

    return (
        <Box><Text>something</Text></Box>
    )
}

export default GiftCardDetail

