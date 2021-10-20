import {IBoxProps} from "native-base/lib/typescript/components/primitives/Box/types";

export interface QrCodeTypes extends IBoxProps{
    code:string,
    size?:number,
    logoUri?:string
}
