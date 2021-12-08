import React, {useEffect, useState} from "react";
import {Box, HStack} from "native-base";
import {ListLoyaltyFilter, MyButton} from "../../../components";
import {LoyaltyProgramTypes, Translate} from "../../../share";
import {useAppSelector} from "../../../redux/store";

type FilterHeaderProps = {
    onChange: (filter: any) => void
}
export const FilterHeader: React.FC<FilterHeaderProps> = ({onChange}) => {
    const {language} = useAppSelector(state => state.settings)
    const [filter, setFilter] = useState<any>({display: "voucher"})

    useEffect(() => {
        onChange(filter)
    }, [filter])

    const _changeDisplay = (display: "voucher" | "giftcard") => {
        setFilter({...filter, display})
    }

    const _loyaltyChange = (item: LoyaltyProgramTypes | null = null) => {
        if (item) {
            setFilter({...filter, loyalty_program: item.id})
        } else {
            delete filter["loyalty_program"]
            setFilter({...filter})
        }
    }

    const isDisplayVoucher = filter.display === "voucher";
    return (
        <Box bgColor="primary.500" safeAreaTop={true}>
            <HStack py={3} px={4} space={4}>
                <MyButton flex={1} size="md" borderWidth="1" borderColor={isDisplayVoucher ? "white" : "transparent"}
                          _text={{color: "white",}}
                          bgColor="rgba(255,255,255,0.3)"
                          onPress={() => _changeDisplay("voucher")}>
                    {Translate('vouchers')}
                </MyButton>

                <MyButton flex={1} size="md" borderWidth="1" borderColor={!isDisplayVoucher ? "white" : "transparent"}
                          _text={{color: "white",}}
                          bgColor="rgba(255,255,255,0.3)"
                          onPress={() => _changeDisplay("giftcard")}>
                    {Translate('giftCards')}
                </MyButton>
            </HStack>

            <Box py={2}>
                <ListLoyaltyFilter onChange={_loyaltyChange}/>
            </Box>
        </Box>
    )
}
