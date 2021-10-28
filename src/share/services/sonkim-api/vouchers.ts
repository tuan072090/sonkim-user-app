import FetchDataService from "../fetch"

export const GetVouchers = async (params={}) => {
    try {
        const { count, promotions } = await FetchDataService.GET("/user-api/promotions", params)

        return { count, promotions }
    } catch (err) {
        console.log("promotions error.....", err)
        throw err
    }
}
