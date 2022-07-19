import FetchDataService from "../fetch"
import {UserMemberShipCardType} from "../..";

export const GetLoyaltyPrograms = async (params: any = {_limit: 50}) => {
    try {
        const {count, loyalty_programs} = await FetchDataService.GET("/user-api/loyalty-programs", params)

        return loyalty_programs
    } catch (err) {
        throw err
    }
}

export const GetLoyaltyProgramDetail = async (id: number | string) => {
    try {
        const loyalty_program = await FetchDataService.GET("/user-api/loyalty-programs/" + id)

        return loyalty_program
    } catch (err) {
        throw err
    }
}

export const RegisterMemberShipCard = async (id: number | string, memberInfo:any={}) => {
    try {
        const data = await FetchDataService.POST("/user-api/membership-cards", {
            loyaltyProgramId: id,
            ...memberInfo
        })

        return data
    } catch (err) {
        throw err
    }
}

export const UpdateMemberShipCardInfo = async (id: string | number, payload: any) => {
    try {
        const data = await FetchDataService.PUT(`/user-api/membership-cards/${id}/info`, payload)

        return data
    } catch (err) {
        throw err
    }
}

export const GetUserMembershipCards = async (params = {_limit: 50}): Promise<UserMemberShipCardType[]> => {
    try {
        const {count, membership_cards} = await FetchDataService.GET("/user-api/membership-cards", params)
        return membership_cards
    } catch (err) {
        throw err
    }
}

export const GetUserMembershipCardDetail = async (id: string | number): Promise<UserMemberShipCardType> => {
    try {
        const membershipCard = await FetchDataService.GET("/user-api/membership-cards/" + id)

        return membershipCard
    } catch (err) {
        throw err
    }
}
