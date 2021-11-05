import FetchDataService from "../fetch"

export const GetGiftCards = async (params:any = {}) => {
    try {
        if(typeof params["_limit"] === "undefined"){
            params["_limit"] = 20
        }
        const {gift_cards, count} = await FetchDataService.GET("/user-api/gift-cards", params)

        return {gift_cards, count}
    } catch (err) {
        console.log("gift_cards error.....", err)
        throw err
    }
}

export const GetGiftCardDetail = async (id: number | string) => {
    try {
        const gift_card = await FetchDataService.GET("/user-api/gift-cards/" + id)

        return gift_card
    } catch (err) {
        console.log("gift_card error.....", err)
        throw err
    }
}
