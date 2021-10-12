import React from "react";
import {Image as ImageNative} from 'native-base'
import {ImageTypes} from "./image.types";
import {StaticImages} from "../../../share";

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
            fallbackSource={StaticImages.fallback_img}
        />
    )
}

export default Image
