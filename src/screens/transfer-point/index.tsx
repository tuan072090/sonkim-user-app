import React, {useContext, useEffect} from "react";
import {Box, Button, HStack, ScrollView} from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import {SonkimApiService, StaticImages, Translate, useLocalStorage} from "../../share";
import LanguageProvider from "../../share/context/Language";
import {
    FullScreenLoader,
    Image,
    ImageStatic,
    MainLayout,
    MyButton,
    PageProps,
    PointExchangericon,
    Typo
} from "../../components";
import {Alert, TextInput} from "react-native";

const TransferPointPage: React.FC<PageProps> = MainLayout(() => {
    const [pointSystems, setPointSystems] = useLocalStorage(useLocalStorage.KEY_LOCAL_POINT_SYSTEMS, [])
    const [userCards, setUserCards] = useLocalStorage(useLocalStorage.KEY_LOCAL_USER_CARDS, [])
    const {language} = useContext(LanguageProvider.context);


    useEffect(() => {
        _fetchPointSystem()
        _fetchAllUserWallets()
    }, [])

    const _fetchPointSystem = () => {
        SonkimApiService.GetPointSystems().then(data => {
            setPointSystems(data.point_systems)
        }).catch(err => {
            Alert.alert("Không lấy được point system", err.message)
        })
    }

    const _fetchAllUserWallets = () => {
        SonkimApiService.GetUserMembershipCards({_limit: 50}).then(data => {
            setUserCards(data)
        }).catch(err => {
            Alert.alert("Không lấy được user cards", err.message)
        })
    }

    if (!pointSystems || pointSystems.length === 0 || !userCards) {
        return <FullScreenLoader/>
    }

    const fromPoint = pointSystems[0]
    const toPoint = pointSystems[1]

    return (
        <Box flex={1} position="relative" alignItems="center">
            <ImageStatic
                resizeMode="cover"
                position="absolute"
                bottom={0}
                left={0}
                width="100%"
                height="100%"
                uri={StaticImages.link_membership_backgroud}
            />
            <ScreenHeader hasBackButton={true} title={Translate[language].transferPoint} bgColor="primary.500"/>

            <ScrollView width={"100%"}>
                <Box py={2} px={4}>

                    <HStack justifyContent="space-between">
                        <Typo type="subtitle14" color="gray.300">Gửi đi</Typo>

                        <HStack alignItems="center">
                            <Typo type="subtitle14" color="gray.300">Số dư:</Typo>
                            <Typo ml={1} type="subtitle16" color="secondary.500">333</Typo>
                        </HStack>
                    </HStack>

                    <Box borderRadius={10} bgColor="white" p={4} mt={2}>
                        <HStack justifyContent="space-between">
                            <TextInput placeholder="nhập số lượng gửi đi"/>

                            <HStack alignItems="center">
                                <Typo type="subtitle14" mr={1}>{fromPoint.symbol}</Typo>
                                <Image uri={fromPoint.icon.url} width={10} height={10} borderRadius="full" borderWidth={1} borderColor="gray.500"/>
                            </HStack>
                        </HStack>
                    </Box>

                    <Box width="full" p={5} alignItems="center"><PointExchangericon size={6} fill="white"/></Box>

                    <HStack justifyContent="space-between">
                        <Typo type="subtitle14" color="gray.300">Nhận về</Typo>

                        <Typo type="subtitle16" color="secondary.500">123</Typo>
                    </HStack>

                    <Box borderRadius={10} bgColor="white" p={4} mt={2}>
                        <HStack justifyContent="space-between">
                            <TextInput placeholder="Số lượng nhận về"/>

                            <HStack alignItems="center">
                                <Typo type="subtitle14" mr={1}>{toPoint.symbol}</Typo>
                                <Image uri={toPoint.icon.url} width={10} height={10} borderRadius="full" borderWidth={1} borderColor="gray.500"/>
                            </HStack>
                        </HStack>

                    </Box>

                    <MyButton mt={10} bgColor="white" _text={{color: "primary.500"}} opacity={70}>Đổi</MyButton>
                </Box>
            </ScrollView>
        </Box>
    );
})

TransferPointPage.defaultProps = {authRequire: true}

export default TransferPointPage;
