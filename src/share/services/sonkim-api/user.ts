import FetchDataService from "../fetch";

export const GetUserProfile = async () => {
    try {
        const profile = await FetchDataService.GET("/user-api/profile")

        return profile
    } catch (err) {
        console.log("get profile error.....", err)
        throw err
    }
}
