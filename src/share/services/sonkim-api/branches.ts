import FetchDataService from "../fetch"

export const GetBranches = async () => {
    try {
        const { count, branches } = await FetchDataService.GET("/user-api/branches")

        return { count, data: branches }
    } catch (err) {
        console.log("Login error.....", err)
        throw err
    }
}
