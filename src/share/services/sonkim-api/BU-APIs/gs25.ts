import axios, {AxiosError} from "axios";
import MyError from "../../error";
import {GS25_GET_INFO, GS25_LOGIN} from "../../../configs/commonConfigs";
import LocalStorageService from "../../local-storage";
import {loginSkm} from "./skm";

const accountTest = {
    "userName":"09800000001",
    "password":"123456"
}
let debounceTimer: NodeJS.Timeout;
const GS25_TOKEN_KEY = 'gs25TokenKey'

export const Gs25Login = async () => {
    try {
        const {data} = await axios.post(GS25_LOGIN, {
            ...accountTest
        })

        const token = data.data.token
        await LocalStorageService.StoreData(GS25_TOKEN_KEY, token)

        return token
    } catch (err){
        handleError(err)
    }
}

export const Gs25GetAccessToken = async () => {
    const accessToken = await LocalStorageService.GetData(GS25_TOKEN_KEY)

    if (!accessToken) {
        return await Gs25Login()
    }

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
        //  login
        await Gs25Login()
    }, 5000);

    return accessToken
}

export const Gs25GetAccount = async (phone: string) => {
    try {
        const accessToken = await Gs25GetAccessToken()

        const {data} = await axios.get(`${GS25_GET_INFO}/loyalty/member/${accountTest.userName}/info`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                apikey: 'apikey'
            }
        })

        return data.data.member
    } catch (err) {
        handleError(err)
    }
}

function handleError(error: AxiosError | any) {
    let message = error.message || "Gs25 error"
    let status = 502
    let code = 0
    if (error.response) {
        if(error.response.data){
            const errorData = error.response.data
            message = errorData.message
            status = errorData.statusCode
        }else {
            status = error.response.status || status
        }
    } else if (error.request) {
        //console.log(error.request);
    }

    throw new MyError(message, status, code)
}
