import axios, {AxiosError} from "axios";
import {GSSHOP_CREATE_MEMBER, GSSHOP_GET_MEMBER} from "../../../configs/commonConfigs";
import {objectToQueryString} from "../../../utils/formatter";
import MyError from "../../error";


type MemberPayload = {
    birthday: string    //  2000-03-03
    email?: string
    name?: string
    gendar?: "1" | "2" | "0"
    phone: string
}

export const GetOrCreateGsShopMember = async (payload: MemberPayload) => {
    try {
        const params = objectToQueryString(payload)
        const {data} = await axios.post(GSSHOP_CREATE_MEMBER+"?"+params, {}, {
            headers: {Authorization: '1234'}
        })
        return data
    } catch (err) {
        return null
    }
}

export const GetGsShopMember = async (phone: string) => {
    try {
        const {data} = await axios.get(GSSHOP_GET_MEMBER+`?phone=${phone}`, {
            headers: {Authorization: '1234'}
        })

        return data.data[0]
    } catch (err) {
        handleError(err)
    }
}


function handleError(error: AxiosError | any) {
    const errorResponse = error.response

    //  Need optimize
    const message = errorResponse.message || "Jardin Something error"
    const status = errorResponse.status || errorResponse.statusCode || 500
    const code = errorResponse.code || 500
    const errors = errorResponse.errors || []

    throw new MyError(message, status, code, errors)
}
