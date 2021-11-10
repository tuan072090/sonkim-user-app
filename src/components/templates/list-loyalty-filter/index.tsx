import React, {useRef, useState} from "react";
import {Box, ScrollView} from "native-base";
import {PressBox, Typo} from "../../index";
import {LoyaltyProgramTypes, useLocalStorage} from "../../../share";
import {ListLoyaltyFilterTypes} from "./listLoyaltyFilter.types";

const ListLoyaltyFilter: React.FC<ListLoyaltyFilterTypes> = ({onChange}) => {
    const itemWidth = 90
    const [loyaltyProgramsLocal] = useLocalStorage(useLocalStorage.KEY_LOCAL_LOYALTY_PROGRAMS, [])
    const [loyaltySelect, setLoyaltySelect] = useState<null | LoyaltyProgramTypes>(null)

    const LoyaltyListRef = useRef()

    const _loyaltyPress = (item: LoyaltyProgramTypes | null = null, index: number) => {
        setLoyaltySelect(item)

        onChange(item)
        //  @ts-ignore
        LoyaltyListRef.current.scrollTo({x: index * itemWidth, y: 0, animated: true})
    }

    return (
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
                        <PressBox style={{width: itemWidth}} alignItems="center" pb={2} key={index}
                                  onPress={() => _loyaltyPress(item, index)}>
                            <Box py={1} borderBottomWidth={1} borderBottomColor={isActive ? "white" : "transparent"}>
                                <Typo numberOfLines={1} type="body14" color="white"
                                      textTransform="uppercase">{item.name}</Typo>
                            </Box>
                        </PressBox>
                    )
                })
            }
        </ScrollView>
    )
}

export default ListLoyaltyFilter
