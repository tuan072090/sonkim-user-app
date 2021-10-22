export type VoucherCardType={
    voucher: VoucherType,
}

export type VoucherType={
    imageUri: any,
    title:string,
    applied:number,
    due:string,
    status:string,
    point?:number,
    price?:number,
}
