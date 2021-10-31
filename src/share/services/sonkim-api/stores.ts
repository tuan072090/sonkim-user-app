import FetchDataService from "../fetch"
import {StoreTypes} from "../..";

export const GetStores = async (params = {_limit: 20}): Promise<{ count: number, data: StoreTypes[] }> => {
    try {
        const {count, stores} = await FetchDataService.GET("/user-api/stores", params)

        return {count, data: stores}
    } catch (err) {
        console.log("Login error.....", err)
        throw err
    }
}
