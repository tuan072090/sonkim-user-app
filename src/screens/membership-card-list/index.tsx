import React, {useContext, useEffect} from "react";
import {Box, FlatList} from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import {Colors, SonkimApiService, Translate, useLocalStorage} from "../../share";
import {MainLayout, MembershipCard, PageProps, Typo} from "../../components";
import {ActivityIndicator} from "react-native";
import AppProvider from "../../share/context";
import {useAppSelector} from "../../redux/store";

const UserListCard: React.FC<PageProps> = MainLayout(() => {
    const {language} = useAppSelector(state => state.settings)
    const [userCards, setUserCards] = useLocalStorage(useLocalStorage.KEY_LOCAL_USER_CARDS, [])
    const {dispatch} = useContext(AppProvider.context)

    useEffect(() => {
        SonkimApiService.GetUserMembershipCards().then(data => {
            setUserCards(data)
        }).catch(err => {
            dispatch({
                type: AppProvider.actions.UPDATE_MESSAGE,
                data: {message: err.message, status: "error"}
            })
        })
    }, [])

    //  @ts-ignore
    const _renderItem = ({item, index}) => {
        return <Box key={index} mb={4} px={4}><MembershipCard item={item}/></Box>
    }

    return (
        <Box flex={1} position="relative">
            <ScreenHeader
                hasBackButton={true}
                title={Translate('userListCard')}
                bgColor="primary.500"
            />
            <Box>
                {
                    !userCards ? <Box p={5}><ActivityIndicator color={Colors.primary["500"]}/></Box>
                        : userCards.length === 0 ? <Typo type="subtitle16">Bạn chưa có thẻ thành viên</Typo>
                        : <FlatList
                            data={userCards}
                            renderItem={_renderItem}
                            ListHeaderComponent={<Box width="100%" p={4}><Typo type="subtitle16">Bạn
                                có {userCards.length} thẻ</Typo></Box>}
                            ListFooterComponent={(<Box width="100%" height={128}/>)}
                        />
                }
            </Box>
        </Box>
    );
})

UserListCard.defaultProps = {authRequire: true};

export default UserListCard;
