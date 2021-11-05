import React, {useContext} from "react";
import {Box} from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import {ScreenName, Translate} from "../../share";
import LanguageProvider from "../../share/context/Language";
import {MembershipCard} from "../../components";
import {useNavigation} from "@react-navigation/core";
import {TouchableOpacity} from "react-native";

const UserListCard = () => {
    const {language} = useContext(LanguageProvider.context);
    const navigation = useNavigation();

    return (
        <Box flex={1} position="relative">
            <ScreenHeader
                hasBackButton={true}
                title={Translate[language].userListCard}
                bgColor="primary.500"
            />
            <Box p={4}>
                {/*<TouchableOpacity onPress={() => _navigate()}>*/}
                {/*    <MembershipCard.GS15 mt={4}/>*/}
                {/*</TouchableOpacity>*/}

                {/*<MembershipCard.Lazada mt={4}/>*/}

                {/*<MembershipCard.Jardin mt={4}/>*/}
            </Box>
        </Box>
    );
};

UserListCard.propTypes = {};

export default UserListCard;
