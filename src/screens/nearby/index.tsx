import React from "react";
import {Box} from 'native-base'
import {SearchHeader} from "./components/SearchHeader";
import {MapContent} from "./components/MapContent";

const NearByScreen = () => {

    return (
        <Box flex={1}>
            <SearchHeader/>
            <MapContent/>
        </Box>
    )
}


export default NearByScreen
