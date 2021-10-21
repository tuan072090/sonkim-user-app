import React from "react";
import {Box} from 'native-base'
import {SearchHeader} from "./components/SearchHeader";
import {MapContent} from "./components/MapContent";
import {ListStoreCard} from "./components/ListStoreCard";

const NearByScreen = () => {

    return (
        <Box flex={1} position="relative">
            <SearchHeader/>

            <MapContent/>

            <Box position="absolute" bottom={0} left={0} width="100%">
                <ListStoreCard/>
            </Box>
        </Box>
    )
}


export default NearByScreen
