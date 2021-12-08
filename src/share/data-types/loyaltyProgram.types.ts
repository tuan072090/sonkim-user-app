import {BusinessUnitType} from "./businessUnit.types";

export type LoyaltyProgramTypes = {
    id: number|string,
    name: string,
    body?:string,
    avatar: any,
    business_unit: BusinessUnitType,
    levels: any[]
}
