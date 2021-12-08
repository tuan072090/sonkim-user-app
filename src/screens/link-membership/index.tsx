import React, {useState} from "react";
import {Box, Button, ScrollView} from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import {LoyaltyProgramTypes, ScreenName, Translate} from "../../share";
import {useNavigation} from "@react-navigation/core";
import {ListLoyaltySelect, Typo} from "../../components";
import {useAppSelector} from "../../redux/store";

const LinkMembership = () => {
    const {language} = useAppSelector(state => state.settings)
    const [loyaltySelected, setLoyaltySelected] = useState<LoyaltyProgramTypes | null>(null)

    const navigation = useNavigation();

    const _onSelect = (data: LoyaltyProgramTypes) => {
        setLoyaltySelected(data)
    }

    const _navigateForm = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.LINK_MEMBERSHIP_FORM, {id: loyaltySelected.id})
    }

    return (
        <Box flex={1}>
            <ScreenHeader
                hasBackButton={true}
                title={Translate('linkMembership')}
                bgColor="primary.500"
            />
            <ScrollView p={4} bgColor="white">
                <Typo type="subtitle16" mb={3} color='muted.500'>Chọn thẻ bạn muốn liên kết</Typo>

                <ListLoyaltySelect onSelect={_onSelect}/>

                <Box mt={20}/>
            </ScrollView>
            <Box width="100%" bgColor="white" padding={3} flexDirection="row" justifyContent='center'
                 alignContent="center" px={2} safeAreaTop={true}>
                <Button w="100%" onPress={_navigateForm} rounded="xl" py={3} size="lg" colorScheme="primary">
                    CHỌN
                </Button>
            </Box>
        </Box>
    );
};

export default LinkMembership;
