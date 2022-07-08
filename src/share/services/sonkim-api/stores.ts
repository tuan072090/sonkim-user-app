import FetchDataService from "../fetch"
import {StoreTypes} from "../..";

export const GetStores = async (params = {_limit: 20}): Promise<{ count: number, data: StoreTypes[] }> => {
    try {
        console.log("get store with filter...", params)
        const {count, stores} = await FetchDataService.GET("/user-api/stores", params)

        return {count, data: stores}
    } catch (err) {
        console.log("GetStores error.....", err)
        throw err
    }
}
