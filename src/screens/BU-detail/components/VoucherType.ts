export type VoucherItemType={
    item: ItemType,
}

export type ItemType={
    imageUri: any,
    title:string,
    applied:number,
    due:string,
    status:string,
    point?:number,
    price?:number,
}