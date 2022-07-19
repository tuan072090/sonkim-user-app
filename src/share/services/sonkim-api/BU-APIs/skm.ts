import axios, {AxiosError} from 'axios';
import {SKM_CREATE_ACCOUNT, SKM_GET_ACCOUNT, SKM_LOGIN} from "../../../configs/commonConfigs";
import MyError from "../../error";
import LocalStorageService from "../../local-storage";

let debounceTimer: NodeJS.Timeout;
const SKM_ACCESS_TOKEN_KEY: string = "skmAccessTokenKey"
type CreateCustomerPayloadType = {
    "brandCode": string
    "firstName": string
    "lastName": string
    "gender": "1" | "2" | "0"
    "birthdayDay": string
    "birthdayMonth": string
    "birthdayYear": string
    "username": string
    "password": string
    "tel1": string
}
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
        await loginSkm()
    }, 5000);

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

export const CreateSkmCustomer = async (payload: CreateCustomerPayloadType) => {
    try {
        return null
        const rmsToken = await getSkmAccessToken()
        const res = await axios.post(SKM_CREATE_ACCOUNT, {
            ...payload
        }, {
            headers: {
                Authorization: `Bearer ${rmsToken}`,
                apikey: 'apikey'
            }
        })

        return res
    }catch (err) {
        handleError(err)
    }
}

function handleError(error: AxiosError | any) {
    let message = error.message || "SKM error"
    let status = 502
    let code = 0
    if (error.response) {
        message = error.response.data ? error.response.data.message : message
        status = error.response.status
    } else if (error.request) {
        //console.log(error.request);
    }

    throw new MyError(message, status, code)
}

