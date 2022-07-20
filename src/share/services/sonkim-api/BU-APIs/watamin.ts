import axios, {AxiosError} from "axios";
import {
    JARDIN_CREATE_MEMBER,
    WATAMIN_CREATE_MEMBER,
    WATAMIN_GET_CUSTOMER, WATAMIN_GET_CUSTOMER_BY_CARD,
    WATAMIN_GET_TOKEN
} from "../../../configs/commonConfigs";
import LocalStorageService from "../../local-storage";
import MyError from "../../error";

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
    magnetCardNumber: string
    magnetCardTrack: string
}
let debounceTimer: NodeJS.Timeout;

const WATAMIN_ACCESS_TOKEN_KEY: string = "wataminAccessTokenKey"

const organizationId = "7fb88635-b513-11ea-814e-000c2966edd2"

const FetchWataminToken = async () => {
    const {data: token} = await axios.get(WATAMIN_GET_TOKEN, {
        params: {
            ...GetTokenPayload
        }
    })

    await LocalStorageService.StoreData(WATAMIN_ACCESS_TOKEN_KEY, token)

    return token
}

export const getWataminAccessToken = async () => {
    try {
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
    }catch (err){
        handleError(err)
    }
}

export const CreateOrUpdateWataminMember = async (payload: CreateUpdateMemberPayload) => {
    try {
        const accessToken = await getWataminAccessToken()
        const {data} = await axios.post(WATAMIN_CREATE_MEMBER, {
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

export const GetWataminMemberByPhone = async (phone: string) => {
    try {
        const accessToken = await getWataminAccessToken()
        const {data} = await axios.get(WATAMIN_GET_CUSTOMER_BY_CARD, {
            params: {
                access_token: accessToken,
                organization: organizationId,
                card: phone
            }
        })

        return data
    } catch (err) {
        return null
    }
}


function handleError(error: AxiosError | any) {
    console.log("handle Watamin error...", error)
    let message = error.message || "Watamin error"
    let status = 502
    let code = 0
    if (error.response) {
        // message = error.response.data ? error.response.data.message : message
        status = error.response.status || status
    } else if (error.request) {
        //console.log(error.request);
    }

    throw new MyError(message, status, code)
}

