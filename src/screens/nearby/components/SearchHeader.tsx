import React, {memo, useRef, useState} from "react";
import {Box, ScrollView, SearchIcon, Text} from "native-base";
import {ListIcon, ListLoyaltyFilter, PressBox, Typo} from "../../../components";
import {LoyaltyProgramTypes, useLocalStorage} from "../../../share";

type SearchHeaderProps = {
    onFilterChange: (filter: any) => void
}

export const SearchHeader: React.FC<SearchHeaderProps> = memo(({onFilterChange}) => {

    const _onLoyaltyChange = (data:null|LoyaltyProgramTypes) => {
        onFilterChange({business_unit: data ? data.business_unit.id : "all"})
    }

    return (
        <Box bgColor="primary.500" width="100%" roundedBottom="xl">

            <Box flexDirection="row" safeAreaTop={true} p={3}>
                <PressBox bgColor="rgba(255,255,255,0.3)"
                          justifyContent="center"
                          alignItems="center"
                          width={10} height={10}
                          borderWidth={1}
                          rounded="lg"
                          borderColor="white">
                    <SearchIcon size={5} color="white"/>
                </PressBox>

                <PressBox flexGrow={100}
                          flexDirection="row"
                          bgColor="rgba(255,255,255,0.3)"
                          justifyContent="center"
                          alignItems="center"
                          height={10}
                          borderWidth={1}
                          rounded="lg"
                          borderColor="white"
                          ml={3}>

                    <ListIcon size={5}/>

                    <Text ml={1} color="white">Xem danh sách</Text>
                </PressBox>
            </Box>

            <Box width="100%" pt={2} pb={1}>
                <ListLoyaltyFilter onChange={_onLoyaltyChange}/>
            </Box>
        </Box>
    )
})
