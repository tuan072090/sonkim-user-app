import FetchDataService from "../fetch"

export const GetPromotions = async (params:any) => {
    try {
        if(typeof params["_limit"] === "undefined"){
            params["_limit"] = 20
        }
        const { count, promotions } = await FetchDataService.GET("/user-api/promotions", params)

        return { count, promotions }
    } catch (err) {
        console.log("promotions error.....", err)
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

export const GetPromotionDetail = async (id:number|string) => {
    try {
        const promotion = await FetchDataService.GET("/user-api/promotions/"+id)

        return promotion
    } catch (err) {
        console.log("promotion detail error.....", err)
        throw err
    }
}
