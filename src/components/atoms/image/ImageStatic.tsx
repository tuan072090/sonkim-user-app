import React from "react";
import {Image as ImageNative} from "native-base";
import {ImageStaticTypes} from "./image.types";

const ImageStatic: React.FC<ImageStaticTypes> = ({uri, width, height, alt = "error", resizeMode="contain", borderRadius = 0, ...props}) => {

    return (
        <ImageNative
            {...props}
            resizeMode={resizeMode}
            width={width}
            height={height}
            alt={alt}
            borderRadius={borderRadius}
            source={uri}
            fallbackSource={{
                uri: "https://www.w3schools.com/css/img_lights.jpg",
            }}
        />
    )
}

export default ImageStatic
