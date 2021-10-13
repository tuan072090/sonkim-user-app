import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Box, Button } from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import { ScreenName, Translate } from "../../share";
import LanguageProvider from "../../share/context/Language";
import { MembershipCards } from "../../components";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native";

const UserListCard = () => {
  const { language } = useContext(LanguageProvider.context);
  const navigation = useNavigation();
  console.log(ScreenName.BU_DETAIL_SCREEN);
  const _navigate = () => {
    // @ts-ignore
    navigation.navigate(ScreenName.BU_DETAIL_SCREEN);
  };
  return (
    <Box flex={1} position="relative">
      <ScreenHeader
        hasBackButton={true}
        title={Translate[language].userListCard}
        bgColor="primary.500"
      ></ScreenHeader>
      <Box p={4}>
        <TouchableOpacity onPress={() => _navigate()}>
          <MembershipCards.GS15 mt={4} />
        </TouchableOpacity>

        <MembershipCards.Lazada mt={4} />

        <MembershipCards.Jardin mt={4} />
      </Box>
    </Box>
  );
};

UserListCard.propTypes = {};

export default UserListCard;
