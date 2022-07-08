import axios from "axios";
import {WATAMIN_CREATE_MEMBER, WATAMIN_GET_CUSTOMER, WATAMIN_GET_TOKEN} from "../../../configs/commonConfigs";
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

const WATAMIN_ACCESS_TOKEN_KEY: string = "wataminAccessTokenKey"

const organizationId = "7fb88635-b513-11ea-814e-000c2966edd2"

const FetchWataminToken = async () => {
    try {
        const {data: token} = await axios.get(WATAMIN_GET_TOKEN, {
            params: {
                ...GetTokenPayload
            }
        })

        await LocalStorageService.StoreData(WATAMIN_ACCESS_TOKEN_KEY, token)

        return token
    } catch (err) {
        console.log('err....', err)
        throw err
    }
}

export const getWataminAccessToken = async () => {
    const wataminAccessToken = await LocalStorageService.GetData(WATAMIN_ACCESS_TOKEN_KEY)

    if (!wataminAccessToken) {
        return await FetchWataminToken()
    }

    //  update accessToken every 2 seconds
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
        //  login
        await FetchWataminToken()
    }, 2000);

    return wataminAccessToken
}

export const CreateOrUpdateMember = async (payload: CreateUpdateMemberPayload) => {
    try {
        const {data: token} = await axios.post(WATAMIN_CREATE_MEMBER, {
            "customer": {
                ...payload
            }
        })

        return token
    } catch (err) {
        throw err
    }
}

export const GetWataminMemberByPhone = async (phone: string) => {
    try {
        const accessToken = await getWataminAccessToken()
        const {data} = await axios.get(WATAMIN_GET_CUSTOMER, {
            params: {
                access_token: accessToken,
                organization: organizationId,
                phone: "84"+parseInt(phone)
            }
        })

        return data
    } catch (err) {
        throw err
    }
}
