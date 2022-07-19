import FetchDataService from "../fetch"

export const GetPromotions = async (params:any) => {
    try {
        if(typeof params["_limit"] === "undefined"){
            params["_limit"] = 20
        }
        params["is_enabled"] = true

        const { count, promotions } = await FetchDataService.GET("/user-api/promotions", params)

        return { count, promotions }
    } catch (err) {
        throw err
    }
}

//  promotion đã lấy
export const GetOrderPromotions = async (params:any) => {
    try {
        if(typeof params["_limit"] === "undefined"){
            params["_limit"] = 20
        }
        const { count, promotion_orders } = await FetchDataService.GET("/user-api/promotion-orders", params)

        return { count, promotion_orders }
    } catch (err) {
        throw err
    }
}
//  promotion đã lấy
export const GetOrderPromotionDetail = async (id:number|string) => {
    try {
        const data = await FetchDataService.GET("/user-api/promotion-orders/"+id)

        return data
    } catch (err) {
        throw err
    }
}

export const GetPromotionDetail = async (id:number|string) => {
    try {
        const promotion = await FetchDataService.GET("/user-api/promotions/"+id)

        return promotion
    } catch (err) {
        throw err
    }
}

export const BuyPromotion = async (id:number|string) => {
    try {
        const data = await FetchDataService.POST("/user-api/promotion-orders", {
            "promotion_id": id,
            "payment_method": "point"
        })
        return data
    } catch (err) {
        throw err
    }
}
