import React, {memo, useRef, useState} from "react";
import {Box, ScrollView, SearchIcon, Text} from "native-base";
import {ListIcon, PressBox, Typo} from "../../../components";
import {LoyaltyProgramTypes, useLocalStorage} from "../../../share";

type SearchHeaderProps = {
    onFilterChange: (filter: any) => void
}

export const SearchHeader: React.FC<SearchHeaderProps> = memo(({onFilterChange}) => {
    const [loyaltySelect, setLoyaltySelect] = useState<null|LoyaltyProgramTypes>(null)
    const [loyaltyProgramsLocal] = useLocalStorage(useLocalStorage.KEY_LOCAL_LOYALTY_PROGRAMS, [])
    const LoyaltyListRef = useRef()
    const itemWidth = 90

    const _loyaltyPress = (item: LoyaltyProgramTypes | null = null, index: number) => {
        setLoyaltySelect(item)

        //  do store không chứa loyalty mà chứa business unit
        onFilterChange({business_unit: item ? item.business_unit.id : "all"})

        //  @ts-ignore
        LoyaltyListRef.current.scrollTo({ x: index*itemWidth, y: 0, animated: true })
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
                <ScrollView ref={LoyaltyListRef} horizontal={true}>
                    <PressBox style={{width: itemWidth}} alignItems="center" pb={2} onPress={() => _loyaltyPress(null, 0)}>
                        <Box p={1} borderBottomWidth={1} borderBottomColor={!loyaltySelect ? "white" : "transparent"}>
                            <Typo type="body14" color="white" textTransform="uppercase">Tất cả</Typo>
                        </Box>
                    </PressBox>
                    {
                        loyaltyProgramsLocal && loyaltyProgramsLocal.map((item: LoyaltyProgramTypes, index: number) => {
                            const isActive = loyaltySelect && loyaltySelect.id === item.id
                            return (
                                <PressBox style={{width: itemWidth}} alignItems="center" pb={2} key={index} onPress={() => _loyaltyPress(item, index)}>
                                    <Box py={1} borderBottomWidth={1} borderBottomColor={isActive ? "white" : "transparent"}>
                                        <Typo numberOfLines={1} type="body14" color="white" textTransform="uppercase">{item.name}</Typo>
                                    </Box>
                                </PressBox>
                            )
                        })
                    }
                </ScrollView>
            </Box>
        </Box>
    )
})
