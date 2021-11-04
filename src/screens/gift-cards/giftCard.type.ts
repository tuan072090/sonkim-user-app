export type GiftCardType = {
    giftCard: GiftCardItemType,
    fromBottom?:boolean
};

export type GiftCardItemType={
    id:number,
    avatar:any,
    title:string,
    cash:number,
    cost?:number,
    price?:number,

}

export type GiftCardListType={
    giftCards:GiftCardItemType[] | null,
    fromBottom?:boolean,
}