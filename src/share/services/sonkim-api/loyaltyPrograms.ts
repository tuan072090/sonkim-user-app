import FetchDataService from "../fetch"

export const GetLoyaltyPrograms = async () => {
    try {
        const {count, loyalty_programs} = await FetchDataService.GET("/user-api/loyalty-programs")

        return loyalty_programs
    } catch (err) {
        throw err
    }
}
