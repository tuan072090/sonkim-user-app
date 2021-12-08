import FetchDataService from "../fetch"

export const GetBranches = async () => {
    try {
        const { count, branches } = await FetchDataService.GET("/user-api/branches")

        return { count, branches }
    } catch (err) {
        throw err
    }
}
