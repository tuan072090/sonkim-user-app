import React from "react";
import MapboxGL from '@react-native-mapbox-gl/maps';
import {Box} from "native-base";
import {MAPBOX_ACCESS_TOKEN, StaticImages} from "../../../share";
import {ImageStatic} from "../../../components";

MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN);

const fakeData = [
    {id: "1", title: "GS25 Hoàng Văn Thụ", coordinate: [106.705696, 10.779599]},
    {id: "2", title: "VERA Đinh Tiên hoàng", coordinate: [106.6960296,10.7724091]},
    {id: "3", title: "Jardin Võ Thị Sáu", coordinate: [106.701952, 10.769964]},
    {id: "4", title: "GS25 Nguyễn Thị Minh Khai", coordinate: [106.705869, 10.761507]},
    {id: "5", title: "Health Spa", coordinate: [106.690469, 10.778680]}
]

export const MapContent = () => {

    return (
        <Box width="100%" height="100%">
            <MapboxGL.MapView style={{flex: 1}} localizeLabels={true} zoomEnabled={true}>
                <MapboxGL.Camera
                    centerCoordinate={[106.6960296, 10.7724091]}
                    zoomLevel={15}/>
                <MapboxGL.UserLocation visible={true} animated={true}/>

                {
                    fakeData.map((shop,index) => {
                        return (
                            <MapboxGL.PointAnnotation
                                coordinate={shop.coordinate}
                                id={shop.id}
                                title={shop.title}
                                key={index}>
                                <ImageStatic uri={StaticImages.shop_icon} width={10} height={10}/>
                            </MapboxGL.PointAnnotation>
                        )
                    })
                }
            </MapboxGL.MapView>
        </Box>
    )
}
