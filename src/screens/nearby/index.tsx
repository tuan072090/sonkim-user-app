import React, {useEffect, useState} from "react";
import {Box} from 'native-base'
import {SearchHeader} from "./components/SearchHeader";
import {MapContent} from "./components/MapContent";
import {ListStoreCard} from "./components/ListStoreCard";
import {SonkimApiService, StoreTypes} from "../../share";
import {Alert} from "react-native";

const NearByScreen = () => {
    const [stores, setStores] = useState<StoreTypes[] | null>(null)
    const [indexFocused, setIndexFocused] = useState(0)

    useEffect(() => {
        fetchStores()
    }, [])

    const fetchStores = async (filter = {_limit:30}) => {
        try {
            const {count, data} = await SonkimApiService.GetStores(filter)
            setStores(data)
        } catch (err) {
            Alert.alert(err.message)
        }
    }

    const _onFilterChange = () => {

    }

    return (
        <Box flex={1} position="relative">
            <SearchHeader onFilterChange={_onFilterChange}/>

            <MapContent stores={stores} indexFocused={indexFocused}/>

            <Box position="absolute" bottom={0} left={0} width="100%" pb={2}>
                <ListStoreCard stores={stores} onStoreFocus={setIndexFocused}/>
            </Box>
        </Box>
    )
}


export default NearByScreen
