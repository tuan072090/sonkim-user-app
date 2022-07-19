import {BusinessUnitType} from "./businessUnit.types";

export type LoyaltyProgramTypes = {
    id: number|string,
    name: string,
    body?:string,
    avatar: any,
    business_unit: BusinessUnitType,
    levels: any[]
}

export type SonkimBuIdType = 'gsshop' | 'gs25' | 'watamin' | 'jardin' | 'vera' | 'jockey'


export type SkmAccountType = {
    customerId: number,
    customerCode?: string
    customerType?: number
    firstName?: string
    lastName?: string
    fullName:  string
    gender?: 1 | 0 | 2
    birthdayDay?: number
    birthdayMonth?: number
    birthdayYear?: number
    tel1: string
    customerGroupCode?: string
    joinDate: string
    status: number
    brandCode?: string
    loyaltyFlag?: number
    accountId?:number
    updateDate?: string
    deleteFlag?: number
    updateFlag?: number
    dirtyFlag?: number
    crmJoinDate?: string
    membershipLevelDTO?: any
    membershipLevelVO?: any
}
