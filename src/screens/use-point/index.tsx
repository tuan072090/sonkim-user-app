import React, {useState} from "react";
import {Box, ScrollView} from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import {LoyaltyProgramTypes, ScreenName, Translate} from "../../share";
import {useNavigation} from "@react-navigation/core";
import {ListLoyaltySelect, MyButton, Typo} from "../../components";
import {Alert} from "react-native";
import {useAppSelector} from "../../redux/store";

const UsePoint = () => {
    const [loyaltySelected, setLoyaltySelected] = useState<LoyaltyProgramTypes | null>(null)
    const {language} = useAppSelector(state => state.settings)
    const navigation = useNavigation();

    const _onLoyaltyProgramChange = (data: LoyaltyProgramTypes) => {
        setLoyaltySelected(data)
    }

    const _navigateForm = () => {
        if (!loyaltySelected) {
            Alert.alert("Bạn vui lòng chọn 1 thương hiệu")
            return;
        }
        // @ts-ignore
        navigation.navigate(ScreenName.USE_POINT_QR, {id: loyaltySelected.id});
    };

    return (
        <Box flex={1}>
            <ScreenHeader
                hasBackButton={true}
                title={Translate[language].usePoint}
                bgColor="primary.500"
            />
            <ScrollView p={4} bgColor="white">
                <Typo type="subtitle16" mb={3} color='muted.500'>
                    Chọn thẻ bạn muốn sử dụng
                </Typo>

                <ListLoyaltySelect onSelect={_onLoyaltyProgramChange}/>

                <Box mt={20}/>
            </ScrollView>

            <Box
                shadow={9}
                width="100%"
                bgColor="white"
                p={3}
                px={2}
                safeAreaBottom={true}>
                <MyButton w="100%" onPress={_navigateForm}>CHỌN</MyButton>
            </Box>
        </Box>
    );
};

export default UsePoint;
