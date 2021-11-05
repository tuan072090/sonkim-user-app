import {StoreTypes} from "./store.types";
import {LoyaltyProgramTypes} from "./loyaltyProgram.types";

export type GiftCardType = {
    id: number | string,
    title: string,
    avatar: any,
    price?: number,
    sale_price?: number,
    cash: number,
    point_prices: any[],
    description: string,
    rules: any[],
    loyalty_program: LoyaltyProgramTypes,
    stores: StoreTypes[]
}
