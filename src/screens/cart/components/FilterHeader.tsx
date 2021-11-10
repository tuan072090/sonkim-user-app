import React, {useContext, useEffect, useRef, useState} from "react";
import {Box, HStack, ScrollView} from "native-base";
import {ListLoyaltyFilter, MyButton, PressBox, Typo} from "../../../components";
import {LoyaltyProgramTypes, Translate, useLocalStorage} from "../../../share";
import LanguageProvider from "../../../share/context/Language";

type FilterHeaderProps = {
    onChange: (filter:any) => void
}
export const FilterHeader:React.FC<FilterHeaderProps> = ({onChange}) => {
    const {language} = useContext(LanguageProvider.context)
    const [filter, setFilter] = useState<any>({display: "voucher"})

    useEffect(() => {
        onChange(filter)
    }, [filter])

    const _changeDisplay = (display:"voucher"|"giftcard") => {
        setFilter({...filter, display})
    }

    const _loyaltyChange = (item: LoyaltyProgramTypes | null = null) => {
        if(item){
            setFilter({...filter, loyalty_program: item.id})
        }else {
            delete filter["loyalty_program"]
            setFilter({...filter})
        }
    }

    const isDisplayVoucher = filter.display === "voucher";
    return (
        <Box bgColor="primary.500" safeAreaTop={true}>
            <HStack py={3} px={4}  space={4}>
                <MyButton flex={1} size="md" borderWidth="1" borderColor={isDisplayVoucher?"white":"transparent"} _text={{color: "white",}}
                          bgColor="rgba(255,255,255,0.3)"
                          onPress={() => _changeDisplay("voucher")}>
                    {Translate[language].vouchers}
                </MyButton>

                <MyButton flex={1}  size="md" borderWidth="1" borderColor={!isDisplayVoucher?"white":"transparent"} _text={{color: "white",}}
                          bgColor="rgba(255,255,255,0.3)"
                          onPress={() => _changeDisplay("giftcard")}>
                    {Translate[language].giftCards}
                </MyButton>
            </HStack>

            <Box py={2}>
                <ListLoyaltyFilter onChange={_loyaltyChange}/>
            </Box>
        </Box>
    )
}
