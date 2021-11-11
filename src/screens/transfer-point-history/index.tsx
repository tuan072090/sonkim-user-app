// transaction-history
import React, {useContext, useEffect, useState} from "react";
import {Box, ScrollView, FlatList} from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import {Colors, PointSwapHistoryType, SonkimApiService, Translate, useLocalStorage} from "../../share";
import LanguageProvider from "../../share/context/Language";
import TransactionSwapCard from "./components/TransactionSwapCard";
import {MainLayout, PageProps} from "../../components";
import {ActivityIndicator, Alert} from "react-native";

const TransactionSwapHistory:React.FC<PageProps> = MainLayout(() => {
    const {language} = useContext(LanguageProvider.context);
    const [histories, setHistories] = useState<PointSwapHistoryType[]|null>(null);
    const [pointSystem, setPointSystem] = useLocalStorage(useLocalStorage.KEY_LOCAL_POINT_SYSTEMS, [])

    useEffect(() => {
        _fetchData()
    },[])

    useEffect(() => {
        if(!pointSystem || pointSystem.length === 0){
            SonkimApiService.GetPointSystems().then(data => {
                setPointSystem(data.point_systems)
            }).catch(err => {
                Alert.alert("Không lấy được point systems", err.message)
            })
        }
    },[pointSystem])

    const _fetchData = () => {
        SonkimApiService.GetPointSwapHistories({_limit: 30}).then(res => {
            setHistories(res.swap_histories)
        }).catch(err => {
            Alert.alert(err.message)
        })
    }
    //  @ts-ignore
    const _renderItem = ({item, index}) => {
        return (
            <Box px={4} pt={4}>
                <TransactionSwapCard history={item} pointSystems={pointSystem} key={index}/>
            </Box>
        )
    }

    const isLoading = !pointSystem || pointSystem.length === 0 || !histories

    return (
        <Box flex={1} alignItems="center">
            <Box flex={1} width="100%">
                <ScreenHeader
                    hasBackButton={true}
                    title={Translate[language].transactionHistory}
                    bgColor="primary.500"
                />

                {
                    isLoading ? <Box mt={4}><ActivityIndicator color={Colors.primary["500"]}/></Box>
                    : <FlatList
                        data={histories}
                        renderItem={_renderItem}
                        ListFooterComponent={(<Box width="100%" height={16}/>)}
                        />
                }

            </Box>
        </Box>
    );
})

TransactionSwapHistory.defaultProps = {authRequire: true}

export default TransactionSwapHistory;
