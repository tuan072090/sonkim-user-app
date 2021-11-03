import FetchDataService from "../fetch"

export const GetGiftCards = async (params={}) => {
    try {
        const {gift_cards,count} = await FetchDataService.GET("/user-api/gift-cards", params)

        return {gift_cards,count}
    } catch (err) {
        console.log("promotions error.....", err)
        throw err
    }
}
