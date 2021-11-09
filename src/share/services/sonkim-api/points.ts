import FetchDataService from "../fetch";

export const GetPointSystems = async () => {
    try {
        //  get all point system
        const { count, point_systems } = await FetchDataService.GET("/user-api/points/systems", {_limit: 50})

        return { count, point_systems }
    } catch (err) {
        throw err
    }
}

export const GetPointHistories = async (params:any) => {
    try {
        if(typeof params["_limit"] === "undefined"){
            params["_limit"] = 20
        }
        const { count, histories } = await FetchDataService.GET("/user-api/points/history", params)

        return { count, histories }
    } catch (err) {
        throw err
    }
}

export const GetPointSwapHistories = async (params:any) => {
    try {
        if(typeof params["_limit"] === "undefined"){
            params["_limit"] = 20
        }
        const { count, swap_histories } = await FetchDataService.GET("/user-api/points/swap-history", params)

        return { count, swap_histories }
    } catch (err) {
        throw err
    }
}
