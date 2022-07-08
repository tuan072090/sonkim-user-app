import axios from "axios";
import {JARDIN_GET_CUSTOMER, JARDIN_GET_TOKEN} from "../../../configs/commonConfigs";
import LocalStorageService from "../../local-storage";

const GetTokenPayload = {
    user_id: "watami",
    user_secret: "watami"
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
}
let debounceTimer: NodeJS.Timeout;

const JARDIN_ACCESS_TOKEN_KEY: string = "jardinAccessTokenKey"

const organizationId = "fdf89523-6073-11eb-8168-000c2966edd2"

const FetchJardinToken = async () => {
    try {
        const {data: token} = await axios.get(JARDIN_GET_TOKEN, {
            params: {
                ...GetTokenPayload
            }
        })

        await LocalStorageService.StoreData(JARDIN_ACCESS_TOKEN_KEY, token)

        return token
    } catch (err) {
        console.log('err....', err)
        throw err
    }
}

export const getJardinAccessToken = async () => {
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
}

export const CreateOrUpdateMember = async (payload: CreateUpdateMemberPayload) => {
    try {
        const {data: token} = await axios.post(JARDIN_GET_TOKEN, {
            "customer": {
                ...payload
            }
        })

        return token
    } catch (err) {
        throw err
    }
}

export const GetJardinMemberByPhone = async (phone: string) => {
    try {
        const accessToken = await getJardinAccessToken()
        const {data} = await axios.get(JARDIN_GET_CUSTOMER, {
            params: {
                access_token: accessToken,
                organization: organizationId,
                phone: "84"+parseInt(phone)
            }
        })

        return data
    } catch (err) {
        return null
    }
}
