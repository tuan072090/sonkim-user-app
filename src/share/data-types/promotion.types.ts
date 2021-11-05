import {BusinessUnitType} from "./businessUnit.types";
import {StoreTypes} from "./store.types";

export type PromotionType={
    id: number|string,
    title:string,
    avatar:any,
    rules: any[],
    voucher_codes_count:number,
    business_unit: BusinessUnitType,
    stores: StoreTypes[]
}
