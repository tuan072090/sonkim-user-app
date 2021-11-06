import {LoyaltyProgramTypes} from "../../../share";

export type BranchCardType = {
    isSelect?:boolean,
    loyaltyProgram: LoyaltyProgramTypes,
    onSelect: (bu:LoyaltyProgramTypes) => void
};
