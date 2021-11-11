import React, {useContext, useEffect, useState} from "react";
import {Box, Button, HStack, ScrollView, Modal, Text} from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import {
    PointSystemType,
    SonkimApiService,
    StaticImages,
    Translate,
    useLocalStorage,
    UserMemberShipCardType
} from "../../share";
import LanguageProvider from "../../share/context/Language";
import {
    FullScreenLoader,
    ImageStatic,
    MainLayout,
    MyButton,
    PageProps,
    PointExchangericon, PressBox,
    Typo
} from "../../components";
import {Alert, TextInput} from "react-native";
import {SelectPoint} from "./components/SelectPoint";
import {EstimateResult} from "./components/EstimateResult";

const TransferPointPage: React.FC<PageProps> = MainLayout(() => {
    const [pointSystems, setPointSystems] = useLocalStorage(useLocalStorage.KEY_LOCAL_POINT_SYSTEMS, [])
    const [userCards, setUserCards] = useLocalStorage(useLocalStorage.KEY_LOCAL_USER_CARDS, [])
    const {language} = useContext(LanguageProvider.context);
    const [fromPoint, setFromPoint] = useState<PointSystemType|null>(null)
    const [toPoint, setToPoint] = useState<PointSystemType|null>(null)
    const [valueA, setValueA] = useState(0)
    const [valueB, setValueB] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        _fetchPointSystem()
        _fetchAllUserWallets()
    }, [])

    useEffect(() => {
        if(pointSystems && userCards && pointSystems.length > 0){
            setFromPoint(pointSystems[0])
            setToPoint(pointSystems[1])
        }
    },[pointSystems])

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

    const _swapIconPress = () => {
        setFromPoint(toPoint)
        setToPoint(fromPoint)
    }

    const _onChangePointA = (point:number) => {
        if(fromPoint && toPoint){
            setValueA(point)
            //  calculate value B
            const valuePointB = ((toPoint.ratio/fromPoint.ratio) * point).toFixed(2)
            setValueB(parseFloat(valuePointB))
        }
    }
    const _onChangePointB = (point:number) => {
        if(fromPoint && toPoint){
            setValueB(point)
            //  calculate value B
            const valuePointA = (point/(toPoint.ratio/fromPoint.ratio)).toFixed(2)
            setValueA(parseFloat(valuePointA))
        }
    }

    const _submitSwap = async () => {
        try{
            if(fromPoint && toPoint){
                setLoading(true)
                const cardA = userCards.find((item:UserMemberShipCardType) => item.point_system.symbol === fromPoint.symbol)
                const cardB = userCards.find((item:UserMemberShipCardType) => item.point_system.symbol === toPoint.symbol)

                if(!cardA || !cardB){
                    Alert.alert(`Bạn chưa đăng ký thành viên ${fromPoint.name} hoặc ${toPoint.name}`)
                    return;
                }

                await SonkimApiService.SwapPoint({
                    "userPointA": valueA,
                    "userCardIdA": cardA.id,
                    "userCardIdB": cardB.id
                })

                Alert.alert("Đổi điểm thành công")
                _fetchAllUserWallets()
                setLoading(false)
            }
        }catch (err){
            setLoading(false)
            Alert.alert("Lỗi "+err.message)
        }
    }

    if (!pointSystems || pointSystems.length === 0 || !userCards || !fromPoint || !toPoint ) {
        return <FullScreenLoader/>
    }

    const balanceFrom = fromPoint ? userCards.find((item:UserMemberShipCardType) => item.point_system.symbol === fromPoint.symbol) : null
    const balanceTo = toPoint ? userCards.find((item:UserMemberShipCardType) => item.point_system.symbol === toPoint.symbol) : null

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
                            <Typo ml={1} type="subtitle16" color="secondary.500">{balanceFrom ? balanceFrom.point : 0}</Typo>
                        </HStack>
                    </HStack>

                    {
                        fromPoint && <SelectPoint pointValue={valueA} onChangePointValue={_onChangePointA} onChangePointSystem={setFromPoint} pointSystem={fromPoint}/>
                    }

                    <Box width="full" p={5} alignItems="center">
                        <PressBox onPress={_swapIconPress}><PointExchangericon size={6} fill="white"/></PressBox>
                    </Box>

                    <HStack justifyContent="space-between">
                        <Typo type="subtitle14" color="gray.300">Nhận về</Typo>
                        <HStack alignItems="center">
                            <Typo type="subtitle14" color="gray.300">Số dư:</Typo>
                            <Typo ml={1} type="subtitle16" color="secondary.500">{balanceTo ? balanceTo.point : 0}</Typo>
                        </HStack>
                    </HStack>

                    {
                        toPoint && <SelectPoint pointValue={valueB}  onChangePointValue={_onChangePointB} onChangePointSystem={setToPoint} pointSystem={toPoint}/>
                    }

                    <MyButton isLoading={loading} onPress={_submitSwap} my={10} bgColor="white" size="lg" _text={{color: "primary.500"}} opacity={70}>Đổi</MyButton>

                    {
                        fromPoint && toPoint && <EstimateResult fromPoint={fromPoint} toPoint={toPoint}/>
                    }
                </Box>

            </ScrollView>
        </Box>
    );
})

TransferPointPage.defaultProps = {authRequire: true}

export default TransferPointPage;
