import FetchDataService from "../fetch"

export const getVouchers = async (params={}) => {
    try {
        const { count, promotions } = await FetchDataService.GET("/user-api/promotions", params)

        return { count, data: promotions }
    } catch (err) {
        console.log("promotions error.....", err)
        throw err
    }
}
