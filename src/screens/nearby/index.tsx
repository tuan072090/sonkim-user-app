import React, {useContext, useEffect, useState} from "react";
import {Box} from 'native-base'
import {SearchHeader} from "./components/SearchHeader";
import {MapContent} from "./components/MapContent";
import {ListStoreCard} from "./components/ListStoreCard";
import {SonkimApiService, StoreTypes} from "../../share";
import {Alert, StyleSheet} from "react-native";
import AppProvider from "../../share/context";

const NearByScreen = () => {
    const {dispatch} = useContext(AppProvider.context)
    const [stores, setStores] = useState<StoreTypes[] | null>(null)
    const [filter, setFilter] = useState<any>({_limit: 30})
    const [indexFocused, setIndexFocused] = useState(0)

    useEffect(() => {
        fetchStores()
    }, [filter])

    const fetchStores = async () => {
        try {
            const {count, data} = await SonkimApiService.GetStores(filter)
            if (count === 0) {
                dispatch({
                    type: AppProvider.actions.UPDATE_MESSAGE,
                    data: {message: "Không có kết quả", status: "info"}
                })
            }
            setStores(data)
        } catch (err) {
            Alert.alert(err.message)
        }
    }

    const _onFilterChange = (addFilter: any = {}) => {
        const newFilter = {...filter, ...addFilter}
        for (const key in addFilter) {
            if (addFilter.hasOwnProperty(key) && addFilter[key] === "all") {
                delete newFilter[key]
            }
        }
        setFilter(newFilter)
    }

    return (
        <Box flex={1} position="relative" style={styles.container} safeAreaBottom={true}>
            <SearchHeader onFilterChange={_onFilterChange}/>

            <MapContent stores={stores} indexFocused={indexFocused}/>

            <Box position="absolute" bottom={70} left={0} width="100%" pb={2}>
                <ListStoreCard stores={stores} onStoreFocus={setIndexFocused}/>
            </Box>
        </Box>
    )
}

export default NearByScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    }
})
