import React, {useEffect, useState} from "react";
import {Box, ScrollView, Text} from "native-base";
import {MembershipCard} from "../../../components";
import {useNavigation} from "@react-navigation/core";
import {Colors, LoyaltyProgramTypes, ScreenName, SonkimApiService} from "../../../share";
import {ActivityIndicator, Alert} from "react-native";

export const MembershipCardList = () => {
    const [loyaltyPrograms, setLoyaltyPrograms] = useState<LoyaltyProgramTypes[] | null>(null)
    const navigation = useNavigation();

    useEffect(() => {
        SonkimApiService.GetLoyaltyPrograms().then(data => {
            setLoyaltyPrograms(data)
        }).catch(err => {
            Alert.alert(err.message)
        })
    }, [])

    const _navigateForm = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.LINK_MEMBERSHIP_FORM);
    };

    return (
        <Box p={4} mt={4}>
            <Text fontSize="xl" color="primary.500">
                Thẻ thành viên
            </Text>
            <Text fontSize="md" color="gray.400">
                Danh sách thẻ thành viên của SKR
            </Text>

            {
                !loyaltyPrograms
                    ? <Box p={5}><ActivityIndicator color={Colors.primary["500"]}/></Box>
                    : <Box>
                        {
                            loyaltyPrograms.map((item, index) => {
                                return (
                                    <MembershipCard item={item} mt={4} key={index}/>
                                )
                            })
                        }
                    </Box>
            }
        </Box>
    );
};
