import { ImageURISource } from "react-native";
import { IImageProps } from "native-base";

export interface ImageTypes extends IImageProps {
    uri: string,
    size?: number
    alt?: string,
    resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center"
}

export interface ImageStaticTypes extends IImageProps {
    uri: ImageURISource,
    alt?: string,
    resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center"
}
