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
    body: string,
    rules: any[],
    loyalty_program: LoyaltyProgramTypes,
    stores: StoreTypes[]
}

export type OrderGiftCardTypes = {
    id: number|string,
    code: string,
    created_at: string,
    expired_at: string,
    gift_card: any,
    point_history?: any
}
