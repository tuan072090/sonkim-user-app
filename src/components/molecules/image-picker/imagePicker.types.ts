import {IPressableProps} from "native-base/lib/typescript/components/primitives/Pressable/types";

export interface ImagePickerTypes extends IPressableProps{
    from?: "camera"|"gallery"
}
