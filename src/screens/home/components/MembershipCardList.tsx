import React, {useContext, useEffect, useState} from "react";
import {Box, Text} from "native-base";
import {LoyaltyCard, MembershipCard} from "../../../components";
import {Colors, LoyaltyProgramTypes, SonkimApiService, useLocalStorage} from "../../../share";
import {ActivityIndicator, Alert} from "react-native";
import AppProvider from "../../../share/context";
import {useNavigation} from "@react-navigation/native";

export const MembershipCardList = () => {
    const {accessToken} = useContext(AppProvider.context)
    const navigation = useNavigation()
    const [loyaltyPrograms, setLoyaltyPrograms] = useLocalStorage(useLocalStorage.KEY_LOCAL_LOYALTY_PROGRAMS, [])
    const [userMemberShipCards, setUserMembershipCars] = useLocalStorage(useLocalStorage.KEY_LOCAL_USER_CARDS, [])

    let isMounted = false

    React.useEffect(() => {
        return navigation.addListener('focus', () => {
            _fetchUserRegisteredCards()
        });
    }, [navigation]);

    useEffect(() => {
        isMounted = true
        //  Fetch all available loyalty programs
        _fetchLoyaltyPrograms()
        return () => {isMounted = false}
    }, [])

    const _fetchLoyaltyPrograms = () => {
        SonkimApiService.GetLoyaltyPrograms().then(data => {
            if(isMounted) setLoyaltyPrograms(data)
        }).catch(err => {
            if(isMounted) setLoyaltyPrograms([])
            Alert.alert(err.message)
        })
    }

    const _fetchUserRegisteredCards = () => {
        if (accessToken && accessToken.length > 0) {
            SonkimApiService.GetUserMembershipCards().then(cards => {
                if(isMounted) setUserMembershipCars(cards)
            }).catch(err => {
                if(isMounted) setUserMembershipCars([])
            })
        }
    }

    return (
        <Box p={4} mt={4}>
            <Text fontSize="xl" color="primary.500">
                Thẻ thành viên
            </Text>
            <Text fontSize="md" color="gray.500" mb={1}>
                Danh sách thẻ thành viên của SKR
            </Text>

            {
                !loyaltyPrograms
                    ? <Box p={5}><ActivityIndicator color={Colors.primary["500"]}/></Box>
                    :     // @ts-ignore
                    loyaltyPrograms.map((item, index) => {
                        let registeredCard = null
                        if(userMemberShipCards && userMemberShipCards.length > 0){
                            registeredCard = userMemberShipCards.find((card:any) => card.loyalty_program.id === item.id)
                        }

                        if(registeredCard)
                            return <MembershipCard  mt={4} item={registeredCard} key={index}/>

                        return (
                            <LoyaltyCard item={item} mt={4} key={index}/>
                        )
                    })

            }
        </Box>
    );
};
