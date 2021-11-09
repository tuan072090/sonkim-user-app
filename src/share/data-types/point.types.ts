export type PointSwapHistoryType = {
    id:string|number,
    from: string,
    to: string,
    ratio_from: number,
    ratio_to: number,
    point_from: number,
    point_to: number,
    point_history_from: any,
    point_history_to: any,
    created_at: string
}

export type PointSystemType = {
    id: number|string,
    name: string,
    symbol: string,
    ratio: number,
    business_unit: number,
    icon:any
}
