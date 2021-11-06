import React, {useEffect, useState} from "react";
import {Box, SimpleGrid} from "native-base";
import {ActivityIndicator, Alert} from "react-native";
import BranchCard from "../../organisms/branch-card";
import {Colors, LoyaltyProgramTypes, SonkimApiService, useLocalStorage} from "../../../share";

type ListLoyaltySelectProps = {
    onSelect?: (data: LoyaltyProgramTypes) => void
}
const ListLoyaltySelect: React.FC<ListLoyaltySelectProps> = ({onSelect}) => {
    const [selected, setSelected] = useState<LoyaltyProgramTypes | null>(null)
    const [loyaltyPrograms, setLoyaltyPrograms] = useLocalStorage(useLocalStorage.KEY_LOCAL_LOYALTY_PROGRAMS, [])
    const [userMemberShipCards, setUserMembershipCars] = useLocalStorage(useLocalStorage.KEY_LOCAL_USER_CARDS, [])

    useEffect(() => {
        SonkimApiService.GetLoyaltyPrograms().then(data => {
            setLoyaltyPrograms(data);
        }).catch(err => Alert.alert(err.message, "ListLoyaltySelect"));
    }, []);

    const _onSelect = (loyaltySelected: LoyaltyProgramTypes) => {
        setSelected(loyaltySelected)
        if (onSelect) {
            onSelect(loyaltySelected)
        }
    }

    return (
        <Box>
            {
                !loyaltyPrograms || loyaltyPrograms.length === 0 ? <ActivityIndicator color={Colors.primary["500"]}/>
                    : <SimpleGrid columns={3} spacingY={3} spacingX={3}>
                        {
                            //  @ts-ignore
                            loyaltyPrograms.map((item, index) => {

                                return (
                                    <BranchCard
                                        isSelect={selected ? selected.id === item.id : false}
                                        key={index}
                                        loyaltyProgram={item}
                                        onSelect={_onSelect}
                                    />
                                );
                            })
                        }
                    </SimpleGrid>
            }

        </Box>
    );
};

export default ListLoyaltySelect;
