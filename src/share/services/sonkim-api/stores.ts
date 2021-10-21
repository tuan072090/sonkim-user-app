import FetchDataService from "../fetch"


export const getAllStore = async () => {
    try {
        const { count, stores } = await FetchDataService.GET("/user-api/stores")

        return { count, data: stores }
    } catch (err) {
        console.log("Login error.....", err)
        throw err
    }
}
