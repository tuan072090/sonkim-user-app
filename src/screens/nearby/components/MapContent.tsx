import React, {useEffect, useRef, useState} from "react";
import {Box} from "native-base";
import {Colors, ScreenSize, StoreTypes} from "../../../share";
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet} from "react-native";

//  chợ bến thành
//  10.7721095,106.6960844
interface MapContentType extends React.PropsWithChildren<any> {
    stores: null | StoreTypes[],
    indexFocused: number
}

export const MapContent: React.FC<MapContentType> = React.memo(({stores, indexFocused = 0}) => {
    const mapRef = useRef()
    const markersRef = useRef<any[]>([])

    useEffect(() => {
        //  animateToCoordinate
        if(mapRef.current && stores){
            //  @ts-ignore
            mapRef.current.animateToCoordinate(stores[indexFocused].location)
            const showMarkerInfoTimeout = setTimeout(() => {
                markersRef.current[indexFocused].showCallout()
            },500)

            return () => clearTimeout(showMarkerInfoTimeout)
        }
    }, [indexFocused])

    const mapCenter =  stores && stores.length > 0 && stores[indexFocused] ? stores[indexFocused].location : {latitude: 10.7721095, longitude: 106.6960844}

    return (
        <Box width="100%" height="100%" bgColor="gray.100">
            <MapView
                //  @ts-ignore
                ref={mapRef}
                liteMode={true} //  android only
                showsUserLocation={true}
                loadingEnabled={true}
                loadingIndicatorColor={Colors.primary["500"]}
                // onRegionChange={_onRegionChange}
                style={styles.mapContainer}
                initialRegion={{
                    ...mapCenter,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}>
                {
                    stores && stores.map((store, index) => {
                        if (!store.location)
                            return null


                        return (
                            <Marker
                                ref={ref => {markersRef.current[index] = ref}}
                                key={store.id+"_"+index}
                                coordinate={store.location}
                                title={store.name}
                                description={store.location.address}
                            />
                        )
                    })
                }

            </MapView>
        </Box>
    )
})


const styles = StyleSheet.create({
    mapContainer: {
        width: ScreenSize.vw,
        height: ScreenSize.vh - 70 - 200
    }
})
