import axios from "axios";
import {GSSHOP_CREATE_MEMBER, GSSHOP_GET_MEMBER} from "../../../configs/commonConfigs";
import {objectToQueryString} from "../../../utils/formatter";


type MemberPayload = {
    birthday: string    //  2000-03-03
    email: string
    gendar: "1" | "2" | "0"
    phone: string
}

export const GetOrCreateGsShopMember = async (payload: MemberPayload) => {
    try {
        const params = objectToQueryString(payload)
        const res = await axios.post(GSSHOP_CREATE_MEMBER+"?"+params, {}, {
            headers: {Authorization: '1234'}
        })

        return res
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
        throw err
    }
}
