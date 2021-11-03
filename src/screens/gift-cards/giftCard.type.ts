export type GiftCardType = {
    giftCard: GiftCardItemType;
};

export type GiftCardItemType={
    id:number,
    avatar:any,
    title:string,
    cash:number,
    cost?:number,
    price?:number,

}