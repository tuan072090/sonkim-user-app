import {IBoxProps} from "native-base/lib/typescript/components/primitives/Box/types";

export interface BarcodeTypes extends IBoxProps{
    code:string,
    format?:string,
    size?:number,
}
