import React from "react";
import {Image as ImageNative} from 'native-base'
import {ImageTypes} from "./image.types";

const Image: React.FC<ImageTypes> = ({uri, size, alt = "error", resizeMode="contain", borderRadius = 0, ...props}) => {

    return (
        <ImageNative
            {...props}
            resizeMode={resizeMode}
            size={size}
            alt={alt}
            borderRadius={borderRadius}
            source={{
                uri: uri
            }}
            fallbackSource={{
                uri: "https://www.w3schools.com/css/img_lights.jpg",
            }}
        />
    )
}

export default Image
