import React, {useContext, useEffect, useState} from "react";
import {Box, FlatList} from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import {Colors, ScreenName, SonkimApiService, Translate, UserMemberShipCardType} from "../../share";
import LanguageProvider from "../../share/context/Language";
import {MainLayout, MembershipCard, PageProps, Typo} from "../../components";
import {useNavigation} from "@react-navigation/core";
import {ActivityIndicator, TouchableOpacity} from "react-native";
import AppProvider from "../../share/context";

const UserListCard:React.FC<PageProps> = MainLayout(() => {
    const {language} = useContext(LanguageProvider.context);
    const navigation = useNavigation();
    const [cards, setCards] = useState<UserMemberShipCardType[]|null>(null)
    const {dispatch} = useContext(AppProvider.context)

    useEffect(() => {
        SonkimApiService.GetUserMembershipCards().then(data => {
            console.log("cards....", data)
            setCards(data)
        }).catch(err => {
            dispatch({
                type: AppProvider.actions.UPDATE_MESSAGE,
                data: {message: err.message, status: "error"}
            })
        })
    },[])

    //  @ts-ignore
    const _renderItem = ({ item,index }) => {
        return <Box key={index} mb={4} px={4}><MembershipCard item={item}/></Box>
    }

    return (
        <Box flex={1} position="relative">
            <ScreenHeader
                hasBackButton={true}
                title={Translate[language].userListCard}
                bgColor="primary.500"
            />
            <Box>
                {
                    !cards ? <ActivityIndicator color={Colors.primary["500"]}/>
                        : cards.length === 0 ? <Typo type="subtitle16">Bạn chưa có thẻ thành viên</Typo>
                        : <FlatList
                            data={cards}
                            renderItem={_renderItem}
                            ListHeaderComponent={<Box width="100%" p={4}><Typo type="subtitle16">Bạn có {cards.length} thẻ</Typo></Box>}
                            ListFooterComponent={(<Box width="100%" height={128}/>)}
                        />
                }
            </Box>
        </Box>
    );
})

UserListCard.defaultProps = {authRequire: true};

export default UserListCard;
