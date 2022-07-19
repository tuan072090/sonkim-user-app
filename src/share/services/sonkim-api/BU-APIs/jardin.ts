import axios, {AxiosError} from "axios";
import {
    JARDIN_CREATE_MEMBER,
    JARDIN_GET_CUSTOMER,
    JARDIN_GET_CUSTOMER_BY_CARD,
    JARDIN_GET_TOKEN
} from "../../../configs/commonConfigs";
import LocalStorageService from "../../local-storage";
import MyError from "../../error";
import {err} from "react-native-svg/lib/typescript/xml";

const GetTokenPayload = {
    user_id: "api_user",
    user_secret: "123456781"
}
type CreateUpdateMemberPayload = {
    id?: string
    name: string
    middleName?: string
    surName?: string
    email?: string
    birthday?:string
    sex?: "1" | "2" | "0"
    phone: string
    magnetCardNumber: string
    magnetCardTrack: string
}
let debounceTimer: NodeJS.Timeout;

const JARDIN_ACCESS_TOKEN_KEY: string = "jardinAccessTokenKey"

const organizationId = "fdf89523-6073-11eb-8168-000c2966edd2"

const FetchJardinToken = async () => {
    const {data: token} = await axios.get(JARDIN_GET_TOKEN, {
        params: {
            ...GetTokenPayload
        }
    })

    await LocalStorageService.StoreData(JARDIN_ACCESS_TOKEN_KEY, token)

    return token
}

export const getJardinAccessToken = async () => {
    try{
        const jardinAccessToken = await LocalStorageService.GetData(JARDIN_ACCESS_TOKEN_KEY)

        if (!jardinAccessToken) {
            return await FetchJardinToken()
        }

        //  update accessToken every 2 seconds
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(async () => {
            //  login
            await FetchJardinToken()
        }, 2000);

        return jardinAccessToken
    }catch (err) {
        handleError(err)
    }
}

export const CreateOrUpdateJardinMember = async (payload: CreateUpdateMemberPayload) => {
    try {
        console.log('jardin payload.....', payload)
        const accessToken = await getJardinAccessToken()
        const {data} = await axios.post(JARDIN_CREATE_MEMBER, {
            customer: {...payload}
        }, {
            params: {
                access_token: accessToken,
                organization: organizationId
            }
        })

        return data
    } catch (err) {
        handleError(err)
    }
}

export const GetJardinMemberByPhone = async (phone: string) => {
    try {
        console.log('GetJardinMemberByPhone .....', phone)

        const accessToken = await getJardinAccessToken()

        const {data} = await axios.get(JARDIN_GET_CUSTOMER_BY_CARD, {
            params: {
                access_token: accessToken,
                organization: organizationId,
                card: phone
            }
        }).catch(err => ({data: null}))
        
        return data
    } catch (err) {
        return null
    }
}

function handleError(error: AxiosError | any) {
    let message = error.message || "Jardin error"
    let status = error.status || 502
    let code = 0
    if (error.response) {
        console.log("jardin error response....", error.response)
        // message = error.response.data ? error.response.data.message : message
        status = error.response.data.status || status
    } else if (error.request) {
        message = "Jardin - No response error"
    }

    throw new MyError(message, status, code)
}
