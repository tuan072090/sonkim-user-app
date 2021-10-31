import {BusinessUnitType} from "./businessUnit.types";

export type StoreTypes = {
    id: string|number,
    name: string,
    avatar: any,
    location: any,
    business_unit: BusinessUnitType,
    contact: any
}
