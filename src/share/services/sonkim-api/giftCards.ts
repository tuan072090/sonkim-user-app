import FetchDataService from "../fetch"

export const GetGiftCards = async (params:any = {}) => {
    try {
        if(typeof params["_limit"] === "undefined"){
            params["_limit"] = 20
        }
        params["is_enabled"] = true
        const {gift_cards, count} = await FetchDataService.GET("/user-api/gift-cards", params)

        return {gift_cards, count}
    } catch (err) {
        throw err
    }
}

export const BuyGiftCard = async (id:string|number) => {
    try {
        const data = await FetchDataService.POST("/user-api/giftcard-orders", {
            "giftcard_id": id,
            "payment_method": "point"
        })
        return data
    } catch (err) {
        console.log("create giftcard order error.....", err)
        throw err
    }
}

//  gift card đã lấy
export const GetOrderGiftCards = async (params:any) => {
    try {
        if(typeof params["_limit"] === "undefined"){
            params["_limit"] = 20
        }
        const { count, giftcard_orders } = await FetchDataService.GET("/user-api/giftcard-orders", params)

        return { count, giftcard_orders }
    } catch (err) {
        throw err
    }
}

//  gift card đã lấy
export const GetOrderGiftCardDetail = async (id: string|number) => {
    try {
        const data = await FetchDataService.GET("/user-api/giftcard-orders/"+id)

        return data
    } catch (err) {
        throw err
    }
}

export const GetGiftCardDetail = async (id: number | string) => {
    try {
        const gift_card = await FetchDataService.GET("/user-api/gift-cards/" + id)

        return gift_card
    } catch (err) {
        throw err
    }
}
