import React from "react";
import { Icon } from "native-base";
import { IconTypes } from "./icon.types";
import { G, Path } from "react-native-svg";

export const VoucherIcons: React.FC<IconTypes> = ({
    size = 20,
    fill = "none",
}) => {
    return (
        <Icon viewBox="0 0 18 18" size={size} fill="none">
            <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
                <Path
                    d="M7 4.5V13.5"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M2.5 11.4494C2.49998 11.3342 2.53979 11.2225 2.61268 11.1334C2.68557 11.0442 2.78706 10.9829 2.89995 10.96C3.35166 10.8677 3.75763 10.6222 4.04919 10.2651C4.34075 9.90794 4.5 9.46104 4.5 9C4.5 8.53896 4.34075 8.09206 4.04919 7.73491C3.75763 7.37776 3.35166 7.13228 2.89995 7.04C2.78706 7.01708 2.68557 6.95584 2.61268 6.86664C2.53979 6.77745 2.49998 6.6658 2.5 6.55061V5C2.5 4.86739 2.55268 4.74021 2.64645 4.64645C2.74021 4.55268 2.86739 4.5 3 4.5H15C15.1326 4.5 15.2598 4.55268 15.3536 4.64645C15.4473 4.74021 15.5 4.86739 15.5 5V6.55061C15.5 6.6658 15.4602 6.77745 15.3873 6.86665C15.3144 6.95584 15.2129 7.01708 15.1001 7.04C14.6483 7.13229 14.2424 7.37777 13.9508 7.73492C13.6592 8.09207 13.5 8.53896 13.5 9C13.5 9.46105 13.6592 9.90794 13.9508 10.2651C14.2424 10.6222 14.6483 10.8677 15.1001 10.96C15.2129 10.9829 15.3144 11.0442 15.3873 11.1334C15.4602 11.2225 15.5 11.3342 15.5 11.4494V13C15.5 13.1326 15.4473 13.2598 15.3536 13.3536C15.2598 13.4473 15.1326 13.5 15 13.5H3C2.86739 13.5 2.74021 13.4473 2.64645 13.3536C2.55268 13.2598 2.5 13.1326 2.5 13V11.4494Z"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                />
            </G>
        </Icon>
    );
};

export const ChevronLeftIcon: React.FC<IconTypes> = ({
    size = 20,
    fill = "none",
}) => {
    return (
        <Icon viewBox="0 0 24 24" size={size} fill="none">
            <Path
                d="M15.5348 3.51501L7.0498 12L15.5348 20.485L16.9498 19.071L9.8778 12L16.9498 4.92901L15.5348 3.51501Z"
                fill="white"
            />
        </Icon>
    );
};

export const ChevronRightIcon: React.FC<IconTypes> = ({
    size = 20,
    fill = "none",
}) => {
    return (
        <Icon viewBox="0 0 24 24" size={size} fill="none">
            <Path
                d="M8.4652 20.4851L16.9502 12.0001L8.4652 3.51511L7.0502 4.92911L14.1222 12.0001L7.0502 19.0711L8.4652 20.4851Z"
                fill="#C8C8C8"
            />
        </Icon>
    );
};

export const ListIcon: React.FC<IconTypes> = ({ size = 20, fill = "none" }) => {
    return (
        <Icon viewBox="0 0 18 18" fill="none" size={size}>
            <Path
                d="M15 13.5H6V12H15V13.5ZM4.5 13.5H3V12H4.5V13.5ZM15 9.75H6V8.25H15V9.75ZM4.5 9.75H3V8.25H4.5V9.75ZM15 6H6.01725V4.5H15V6ZM4.5 6H3V4.5H4.5V6Z"
                fill="white"
            />
        </Icon>
    );
};

export const LocationIcon: React.FC<IconTypes> = ({
    size = 20,
    fill = "none",
}) => {
    return (
        <Icon viewBox="0 0 14 19" fill="none" size={size}>
            <Path
                d="M7 19C5.73693 17.9227 4.56619 16.7416 3.5 15.4691C1.9 13.5581 8.83662e-07 10.712 8.83662e-07 8.00005C-0.00141728 5.1676 1.70425 2.61344 4.32107 1.52945C6.93789 0.445455 9.95007 1.04529 11.952 3.04905C13.2685 4.35966 14.0059 6.14244 14 8.00005C14 10.712 12.1 13.5581 10.5 15.4691C9.43382 16.7416 8.26307 17.9227 7 19ZM7 3.00005C4.23995 3.00336 2.00331 5.24 2 8.00005C2 9.16605 2.527 11.1851 5.035 14.1861C5.65314 14.9241 6.30902 15.6297 7 16.3001C7.69105 15.6305 8.34724 14.9259 8.966 14.1891C11.473 11.1841 12 9.16505 12 8.00005C11.9967 5.24 9.76006 3.00336 7 3.00005ZM7 11.0001C5.34315 11.0001 4 9.6569 4 8.00005C4 6.3432 5.34315 5.00005 7 5.00005C8.65686 5.00005 10 6.3432 10 8.00005C10 8.7957 9.68393 9.55876 9.12132 10.1214C8.55871 10.684 7.79565 11.0001 7 11.0001Z"
                fill="#626262"
            />
        </Icon>
    );
};

export const FriendIcon: React.FC<IconTypes> = ({
    size = 20,
    fill = "none",
}) => {
    return (
        <Icon viewBox="0 0 24 24" fill="none" size={size}>
            <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
                <Path
                    d="M11 7C11 9.20914 9.20914 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3C9.20914 3 11 4.79086 11 7ZM9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9C8.10457 9 9 8.10457 9 7Z"
                    fill="#626262"
                />
                <Path
                    d="M21 11.5C21 13.433 19.433 15 17.5 15C15.567 15 14 13.433 14 11.5C14 9.567 15.567 8 17.5 8C19.433 8 21 9.567 21 11.5ZM19 11.5C19 10.6716 18.3284 10 17.5 10C16.6716 10 16 10.6716 16 11.5C16 12.3284 16.6716 13 17.5 13C18.3284 13 19 12.3284 19 11.5Z"
                    fill="#626262"
                />
                <Path
                    d="M10 21V17C10 15.3431 8.65685 14 7 14C5.34315 14 4 15.3431 4 17V21H2V17C2 14.2386 4.23858 12 7 12C9.76142 12 12 14.2386 12 17V21H10Z"
                    fill="#626262"
                />
                <Path
                    d="M20 20.5V21H22V20.5C22 18.0147 19.9853 16 17.5 16C15.0147 16 13 18.0147 13 20.5V21H15V20.5C15 19.1193 16.1193 18 17.5 18C18.8807 18 20 19.1193 20 20.5Z"
                    fill="#626262"
                />
            </G>
        </Icon>
    );
};

export const TranslateIcon: React.FC<IconTypes> = ({
    size = 20,
    fill = "none",
}) => {
    return (
        <Icon viewBox="0 0 24 24" fill="none" size={size}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.8551 15.67C12.9951 15.31 12.9051 14.9 12.6251 14.62L10.5351 12.56L10.5651 12.53C12.3051 10.59 13.5451 8.36 14.2751 6H16.2151C16.7551 6 17.2051 5.55 17.2051 5.01V4.99C17.2051 4.45 16.7551 4 16.2151 4H10.2051V3C10.2051 2.45 9.75508 2 9.20508 2C8.65508 2 8.20508 2.45 8.20508 3V4H2.19508C1.65508 4 1.20508 4.45 1.20508 4.99C1.20508 5.54 1.65508 5.98 2.19508 5.98H12.3751C11.7051 7.92 10.6451 9.75 9.20508 11.35C8.39508 10.46 7.71508 9.49 7.14508 8.47C6.98508 8.18 6.69508 8 6.36508 8C5.67508 8 5.23508 8.75 5.57508 9.35C6.20508 10.48 6.97508 11.56 7.87508 12.56L3.50508 16.87C3.10508 17.26 3.10508 17.9 3.50508 18.29C3.89508 18.68 4.52508 18.68 4.92508 18.29L9.20508 14L11.2251 16.02C11.7351 16.53 12.6051 16.34 12.8551 15.67ZM17.7051 10C17.1051 10 16.5651 10.37 16.3551 10.94L12.6851 20.74C12.4451 21.35 12.9051 22 13.5551 22C13.9451 22 14.2951 21.76 14.4351 21.39L15.3251 19H20.0751L20.9751 21.39C21.1151 21.75 21.4651 22 21.8551 22C22.5051 22 22.9651 21.35 22.7351 20.74L19.0651 10.94C18.8451 10.37 18.3051 10 17.7051 10ZM17.7051 12.67L16.0851 17H19.3251L17.7051 12.67Z"
                fill="#626262"
            />
        </Icon>
    );
};

export const NotificationOutlineIcon: React.FC<IconTypes> = ({
    size = 20,
    fill = "none",
}) => {
    return (
        <Icon viewBox="0 0 24 24" fill="none" size={size}>
            <Path
                d="M12 22C10.8954 22 10 21.1046 10 20H14C14 21.1046 13.1046 22 12 22ZM20 19H4V17L6 16V10.5C6 7.038 7.421 4.793 10 4.18V2H14V4.18C16.579 4.792 18 7.036 18 10.5V16L20 17V19ZM12 5.75C10.7797 5.6712 9.60278 6.21728 8.875 7.2C8.25255 8.18456 7.94714 9.33638 8 10.5V17H16V10.5C16.0528 9.33639 15.7474 8.18458 15.125 7.2C14.3972 6.21728 13.2203 5.6712 12 5.75Z"
                fill="#626262"
            />
        </Icon>
    );
};

export const CheckStoreIcon: React.FC<IconTypes> = ({
    size = 20,
    fill = "none",
}) => {
    return (
        <Icon viewBox="0 0 24 24" fill="none" size={size}>
            <Path
                d="M19 22H5C4.44772 22 4 21.5523 4 21V11.357C4.01549 11.112 4.11964 10.8809 4.293 10.707L11.293 3.70701C11.4806 3.51924 11.7351 3.41373 12.0005 3.41373C12.2659 3.41373 12.5204 3.51924 12.708 3.70701L19.708 10.707C19.8957 10.8943 20.0009 11.1488 20 11.414V21C20 21.5523 19.5523 22 19 22ZM12 5.82801L6 11.828V20H18V11.828L12 5.82801ZM10.5 18.559L7.794 15.859L9.2 14.441L10.5 15.733L14.8 11.441L16.212 12.857L10.5 18.558V18.559Z"
                fill="#1B1B1B"
            />
        </Icon>
    );
};

export const HistoryIcon: React.FC<IconTypes> = ({
    size = 20,
    fill = "none",
}) => {
    return (
        <Icon viewBox="0 0 24 24" fill="none" size={size}>
            <Path
                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C19.995 7.58378 16.4162 4.00496 12 4ZM17 13H11V7H13V11H17V13Z"
                fill="#1B1B1B"
            />
        </Icon>
    );
};

export const CheckAllIcon: React.FC<IconTypes> = ({
    size = 20,
    fill = "none",
}) => {
    return (
        <Icon viewBox="0 0 24 24" fill="none" size={size}>
            <Path
                d="M11.6461 18.01L6.69613 13.061L8.10913 11.646L11.6461 15.183L20.1311 6.69699L21.5451 8.11099L11.6451 18.011L11.6461 18.01ZM7.40312 18.01L2.45312 13.061L3.86713 11.646L8.81712 16.596L7.40413 18.01H7.40312ZM11.6461 13.768L10.2311 12.354L16.5951 5.98999L18.0101 7.40399L11.6461 13.767V13.768Z"
                fill="white"
            />
        </Icon>
    );
};

export const PhoneIcon: React.FC<IconTypes> = ({
    size = 20,
    fill = "none",
}) => {
    return (
        <Icon viewBox="0 0 14 19" fill="none" size={size}>
            <Path
                d="M4.55661 4.51142C3.75176 5.1953 3.45682 6.44253 4.15178 7.44311C4.80211 8.37944 5.62131 9.19846 6.55742 9.8485C7.55804 10.5433 8.80522 10.2483 9.48903 9.44342L9.49664 9.44695C10.3701 9.85155 11.2978 10.1289 12.25 10.2702V12.25L12.2492 12.25L12.2471 12.25C6.26614 12.2585 1.74361 7.68334 1.75001 1.75269V1.75H3.72953L3.72966 1.75088C3.871 2.70299 4.1482 3.6299 4.55285 4.50331L4.55661 4.51142ZM12.2492 13.75H13C13.4142 13.75 13.75 13.4142 13.75 13V9.62329C13.75 9.2516 13.4778 8.93598 13.1101 8.88142L12.4695 8.78634C11.6592 8.66609 10.8704 8.43019 10.1271 8.08589L9.56249 7.82433C9.23528 7.67275 8.84652 7.7755 8.63693 8.06894L8.38132 8.42682C8.15729 8.74047 7.72958 8.83627 7.41298 8.61642C6.62376 8.06839 5.93205 7.37682 5.38377 6.58742C5.16386 6.27081 5.25967 5.84303 5.57338 5.619L5.93108 5.36355C6.22457 5.15396 6.32733 4.76516 6.17572 4.43793L5.91388 3.87275C5.56956 3.12955 5.33367 2.34081 5.2134 1.53062L5.11828 0.889869C5.0637 0.52222 4.74809 0.25 4.37641 0.25H1.00001C0.585794 0.25 0.250008 0.585786 0.250008 1V1.75107C0.242718 8.5059 5.43267 13.7597 12.2492 13.75Z"
                fill="#626262"
            />
        </Icon>
    );
};

export const PointExchangericon: React.FC<IconTypes> = ({
    size = 20,
    fill = "none",
}) => {
    return (
        <Icon viewBox="0 0 16 20" fill="none" size={size}>
            <Path
                d="M16 13L12 18L8 13H11L11 0H13L13 13H16ZM8 7H5L5 20H3L3 7H0L4 2L8 7Z"
                fill="#095A64"
            />
        </Icon>
    );
};

export const ArrowDropDownIcon: React.FC<IconTypes> = ({
    size = 20,
    fill = "none",
}) => {
    return (
        <Icon viewBox="0 0 10 6" fill="none" size={size}>
            <Path d="M5 5.5L10 0.5L0 0.5L5 5.5Z" fill="#626262" />
        </Icon>
    );
};

export const CancelIcon: React.FC<IconTypes> = ({
    size = 20,
    fill = "none",
}) => {
    return (
        <Icon viewBox="0 0 14 14" fill="none" size={size}>
            <Path
                d="M12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41L12.59 0Z"
                fill="#626262"
            />
        </Icon>
    );
};
