import {IBoxProps} from "native-base";

type ItemType = {
    value:string, label:string
}

export interface PickerTypes extends IBoxProps{
    items:ItemType[],
    value?:string,
    onChange: (val:string) => void,
    placeholder?:string
}
