export type MembershipCardInfoType = {
    "phone": string,
    "address": string,
    "name": string,
    "gender": string,
    "birthday": string,
    "avatar": string
}

export type UserMemberShipCardType = {
    "id": number|string,
    "point": number,
    "label": string,
    "loyalty_program": any,
    "membership_info"?: MembershipCardInfoType,
    "created_at": string,
    "updated_at": string,
    "point_system": any
}
