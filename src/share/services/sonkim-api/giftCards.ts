import FetchDataService from "../fetch"

export const GetGiftCards = async (params={}) => {
    try {
        const data = await FetchDataService.GET("/user-api/gift-cards", params)

        return data
    } catch (err) {
        console.log("promotions error.....", err)
        throw err
    }
}
