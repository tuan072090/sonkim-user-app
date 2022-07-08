import axios, {AxiosError} from 'axios';
import {SKM_GET_ACCOUNT, SKM_LOGIN} from "../../../configs/commonConfigs";
import MyError from "../../error";
import LocalStorageService from "../../local-storage";

let debounceTimer: NodeJS.Timeout;
const SKM_ACCESS_TOKEN_KEY: string = "skmAccessTokenKey"

export const loginSkm = async () => {
    try {
        //  login
        const {data: loginRes} = await axios.post(SKM_LOGIN, {
            username: "danhnb.wr",
            password: "gcsvn123"
        }, {
            headers: {apikey: 'apikey'}
        })

        const token = loginRes.rmsToken.token

        await LocalStorageService.StoreData(SKM_ACCESS_TOKEN_KEY, token)
        return token
    } catch (err) {
        return ""
    }
}
export const getSkmAccessToken = async () => {
    const skmAccessToken = await LocalStorageService.GetData(SKM_ACCESS_TOKEN_KEY)

    if (!skmAccessToken) {
        return await loginSkm()
    }

    //  update accessToken every 2 seconds
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
        //  login
        const {data: loginRes} = await axios.post(SKM_LOGIN, {
            username: "danhnb.wr",
            password: "gcsvn123"
        }, {
            headers: {apikey: 'apikey'}
        })

        await LocalStorageService.StoreData(SKM_ACCESS_TOKEN_KEY, loginRes.rmsToken.token)
    }, 2000);

    return skmAccessToken
}
//  the account's used for both Jockey and Vera
export const FindSkmAccount = async (phone = ""): Promise<any> => {
    try {
        const rmsToken = await getSkmAccessToken()

        //  get account
        const {data: result} = await axios.post(SKM_GET_ACCOUNT, {
            "phone": {"like": phone},
            "deleteFlag": 0
        }, {
            headers: {
                Authorization: `Bearer ${rmsToken}`,
                apikey: 'apikey'
            }
        })
        const accountData = result.data[0] || null

        return {
            account: accountData
        }
    } catch (err) {
        handleError(err)
    }
}

function handleError(error: AxiosError | any) {
    const errorResponse = error.response.data
    //  Need optimize
    const message = errorResponse.message || "Something error"
    const status = errorResponse.status || errorResponse.statusCode || 500
    const code = errorResponse.code || 500
    const errors = errorResponse.errors || []

    throw new MyError(message, status, code, errors)
}
