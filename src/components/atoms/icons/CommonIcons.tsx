import React from "react";
import {Icon} from "native-base";
import {IconTypes} from "./icon.types";
import {G, Path} from "react-native-svg";

export const VoucherIcons: React.FC<IconTypes> = ({size = 20, fill = "none"}) => {

    return (
        <Icon viewBox="0 0 18 18" size={size} fill="none">
            <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
                <Path d="M7 4.5V13.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <Path
                    d="M2.5 11.4494C2.49998 11.3342 2.53979 11.2225 2.61268 11.1334C2.68557 11.0442 2.78706 10.9829 2.89995 10.96C3.35166 10.8677 3.75763 10.6222 4.04919 10.2651C4.34075 9.90794 4.5 9.46104 4.5 9C4.5 8.53896 4.34075 8.09206 4.04919 7.73491C3.75763 7.37776 3.35166 7.13228 2.89995 7.04C2.78706 7.01708 2.68557 6.95584 2.61268 6.86664C2.53979 6.77745 2.49998 6.6658 2.5 6.55061V5C2.5 4.86739 2.55268 4.74021 2.64645 4.64645C2.74021 4.55268 2.86739 4.5 3 4.5H15C15.1326 4.5 15.2598 4.55268 15.3536 4.64645C15.4473 4.74021 15.5 4.86739 15.5 5V6.55061C15.5 6.6658 15.4602 6.77745 15.3873 6.86665C15.3144 6.95584 15.2129 7.01708 15.1001 7.04C14.6483 7.13229 14.2424 7.37777 13.9508 7.73492C13.6592 8.09207 13.5 8.53896 13.5 9C13.5 9.46105 13.6592 9.90794 13.9508 10.2651C14.2424 10.6222 14.6483 10.8677 15.1001 10.96C15.2129 10.9829 15.3144 11.0442 15.3873 11.1334C15.4602 11.2225 15.5 11.3342 15.5 11.4494V13C15.5 13.1326 15.4473 13.2598 15.3536 13.3536C15.2598 13.4473 15.1326 13.5 15 13.5H3C2.86739 13.5 2.74021 13.4473 2.64645 13.3536C2.55268 13.2598 2.5 13.1326 2.5 13V11.4494Z"
                    stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
            </G>
        </Icon>
    )
}

export const ChevronLeftIcon: React.FC<IconTypes> = ({size = 20, fill = "none"}) => {
    return (
        <Icon viewBox="0 0 24 24" size={size} fill="none">
            <Path
                d="M15.5348 3.51501L7.0498 12L15.5348 20.485L16.9498 19.071L9.8778 12L16.9498 4.92901L15.5348 3.51501Z"
                fill="white"/>
        </Icon>
    )
}

export const ListIcon: React.FC<IconTypes> = ({size = 20, fill = "none"}) => {
    return (
        <Icon viewBox="0 0 18 18" fill="none" size={size}>
            <Path
                d="M15 13.5H6V12H15V13.5ZM4.5 13.5H3V12H4.5V13.5ZM15 9.75H6V8.25H15V9.75ZM4.5 9.75H3V8.25H4.5V9.75ZM15 6H6.01725V4.5H15V6ZM4.5 6H3V4.5H4.5V6Z"
                fill="white"/>
        </Icon>

    )
}
