import {BusinessUnitType} from "./businessUnit.types";
import {StoreTypes} from "./store.types";
import {LoyaltyProgramTypes} from "./loyaltyProgram.types";

export type PromotionType={
    id: number|string,
    title:string,
    avatar:any,
    cash: number,
    price?: number,
    sale_price?: number,
    point_prices?: any[],
    description: string,
    rules: any[],
    loyalty_program: LoyaltyProgramTypes,
    stores: StoreTypes[]
}
