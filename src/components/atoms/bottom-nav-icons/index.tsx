import {Icon} from 'native-base';
import {Circle, Path, Rect} from 'react-native-svg';
import React from "react";
import {Colors} from "../../../share";

type IconProps = {
    active?: boolean
    size?: number,
    fill?: string
}

export const HomeIcon: React.FC<IconProps> = ({active = false, size = 20}) => {

    if (active) {
        return (
            <Icon viewBox="0 0 20 19" size={size}>
                <Path
                    d="M0 9.99997L9.293 0.706971C9.6835 0.316589 10.3165 0.316589 10.707 0.706971L20 9.99997H18V18C18 18.5523 17.5523 19 17 19H12V12H8V19H3C2.44772 19 2 18.5523 2 18V9.99997H0Z"
                    fill={Colors.primary["500"]}/>
            </Icon>
        )
    }

    return (
        <Icon viewBox="0 0 24 24" fill="none" size={size}>
            <Path
                d="M19 22H5C4.44772 22 4 21.5523 4 21V13H2L11.292 3.70698C11.4796 3.51921 11.7341 3.4137 11.9995 3.4137C12.2649 3.4137 12.5194 3.51921 12.707 3.70698L22 13H20V21C20 21.5523 19.5523 22 19 22ZM10 15H14V20H18V11.828L12 5.82798L6 11.828V20H10V15Z"
                fill="gray.400"/>
        </Icon>
    )
}

export const NotificationIcon: React.FC<IconProps> = ({active = false, size = 20}) => {
    if (active) {
        return (
            <Icon viewBox="0 0 16 20" fill="none" size={size}>
                <Path
                    d="M8 20C6.89543 20 6 19.1046 6 18H10C10 19.1046 9.10457 20 8 20ZM16 17H0V15L2 14V8.5C2 5.038 3.421 2.793 6 2.18V0H10V2.18C12.579 2.792 14 5.036 14 8.5V14L16 15V17ZM8 3.75C6.77967 3.6712 5.60278 4.21728 4.875 5.2C4.25255 6.18456 3.94714 7.33638 4 8.5V15H12V8.5C12.0528 7.33639 11.7474 6.18458 11.125 5.2C10.3972 4.21728 9.22033 3.6712 8 3.75Z"
                    fill={Colors.primary["500"]}/>
            </Icon>
        )
    }

    return (
        <Icon viewBox="0 0 16 20" fill="none" size={size}>
            <Path
                d="M8 20C6.89543 20 6 19.1046 6 18H10C10 19.1046 9.10457 20 8 20ZM16 17H0V15L2 14V8.5C2 5.038 3.421 2.793 6 2.18V0H10V2.18C12.579 2.792 14 5.036 14 8.5V14L16 15V17ZM8 3.75C6.77967 3.6712 5.60278 4.21728 4.875 5.2C4.25255 6.18456 3.94714 7.33638 4 8.5V15H12V8.5C12.0528 7.33639 11.7474 6.18458 11.125 5.2C10.3972 4.21728 9.22033 3.6712 8 3.75Z"
                fill="gray.400"/>
        </Icon>
    )
}

export const NearByIcon: React.FC<IconProps> = ({active = false, size = 20}) => {
    if (active) {
        return (
            <Icon viewBox="0 0 24 24" fill="none" size={size}>
                <Path
                    d="M19.25 20.5L19.25 20.5002C19.25 20.5034 19.2503 20.5315 19.21 20.593C19.1655 20.6609 19.0793 20.7564 18.9256 20.8699C18.6145 21.0998 18.1162 21.3384 17.4331 21.5519C16.0759 21.976 14.1549 22.25 12 22.25C9.84514 22.25 7.92409 21.976 6.56685 21.5519C5.88377 21.3384 5.38554 21.0998 5.07436 20.8699C4.92074 20.7564 4.83445 20.6609 4.78998 20.593C4.74974 20.5315 4.74997 20.5034 4.75 20.5002L4.75 20.5L4.75 20.4998C4.74997 20.4966 4.74974 20.4685 4.78998 20.407C4.83445 20.3391 4.92074 20.2436 5.07436 20.1301C5.38554 19.9002 5.88377 19.6616 6.56685 19.4481C7.92409 19.024 9.84514 18.75 12 18.75C14.1549 18.75 16.0759 19.024 17.4331 19.4481C18.1162 19.6616 18.6145 19.9002 18.9256 20.1301C19.0793 20.2436 19.1655 20.3391 19.21 20.407C19.2503 20.4685 19.25 20.4966 19.25 20.4998L19.25 20.5Z"
                    stroke="#086981" fill="white" strokeWidth="1.5"/>
                <Path
                    d="M12 20.0037C10.7369 18.9263 9.56619 17.7452 8.5 16.4727C6.9 14.5617 5 11.7157 5 9.00371C4.99858 6.17126 6.70425 3.6171 9.32107 2.53311C11.9379 1.44912 14.9501 2.04895 16.952 4.05271C18.2685 5.36332 19.0059 7.1461 19 9.00371C19 11.7157 17.1 14.5617 15.5 16.4727C14.4338 17.7452 13.2631 18.9263 12 20.0037ZM12 6.00371C10.9282 6.00371 9.93782 6.57551 9.40193 7.50371C8.86603 8.43192 8.86603 9.57551 9.40193 10.5037C9.93782 11.4319 10.9282 12.0037 12 12.0037C13.6569 12.0037 15 10.6606 15 9.00371C15 7.34686 13.6569 6.00371 12 6.00371Z"
                    fill="white" stroke="white" strokeWidth="2"/>
                <Path
                    d="M12 20.0037C10.7369 18.9263 9.56619 17.7452 8.5 16.4727C6.9 14.5617 5 11.7157 5 9.00371C4.99858 6.17126 6.70425 3.6171 9.32107 2.53311C11.9379 1.44912 14.9501 2.04895 16.952 4.05271C18.2685 5.36332 19.0059 7.1461 19 9.00371C19 11.7157 17.1 14.5617 15.5 16.4727C14.4338 17.7452 13.2631 18.9263 12 20.0037Z"
                    fill="#086981"/>
            </Icon>
        )
    }

    return (
        <Icon viewBox="0 0 24 24" fill="none" size={size}>
            <Path
                d="M19.25 20.5L19.25 20.5002C19.25 20.5034 19.2503 20.5315 19.21 20.593C19.1655 20.6609 19.0793 20.7564 18.9256 20.8699C18.6145 21.0998 18.1162 21.3384 17.4331 21.5519C16.0759 21.976 14.1549 22.25 12 22.25C9.84514 22.25 7.92409 21.976 6.56685 21.5519C5.88377 21.3384 5.38554 21.0998 5.07436 20.8699C4.92074 20.7564 4.83445 20.6609 4.78998 20.593C4.74974 20.5315 4.74997 20.5034 4.75 20.5002L4.75 20.5L4.75 20.4998C4.74997 20.4966 4.74974 20.4685 4.78998 20.407C4.83445 20.3391 4.92074 20.2436 5.07436 20.1301C5.38554 19.9002 5.88377 19.6616 6.56685 19.4481C7.92409 19.024 9.84514 18.75 12 18.75C14.1549 18.75 16.0759 19.024 17.4331 19.4481C18.1162 19.6616 18.6145 19.9002 18.9256 20.1301C19.0793 20.2436 19.1655 20.3391 19.21 20.407C19.2503 20.4685 19.25 20.4966 19.25 20.4998L19.25 20.5Z"
                stroke="gray.400" fill="white" strokeWidth="1.5"/>
            <Path
                d="M12 20.0037C10.7369 18.9263 9.56619 17.7452 8.5 16.4727C6.9 14.5617 5 11.7157 5 9.00371C4.99858 6.17126 6.70425 3.6171 9.32107 2.53311C11.9379 1.44912 14.9501 2.04895 16.952 4.05271C18.2685 5.36332 19.0059 7.1461 19 9.00371C19 11.7157 17.1 14.5617 15.5 16.4727C14.4338 17.7452 13.2631 18.9263 12 20.0037ZM12 6.00371C10.9282 6.00371 9.93782 6.57551 9.40193 7.50371C8.86603 8.43192 8.86603 9.57551 9.40193 10.5037C9.93782 11.4319 10.9282 12.0037 12 12.0037C13.6569 12.0037 15 10.6606 15 9.00371C15 7.34686 13.6569 6.00371 12 6.00371Z"
                fill="white" stroke="white" strokeWidth="2"/>
            <Path
                d="M12 20C10.7369 18.9226 9.56619 17.7415 8.5 16.469C6.9 14.558 5 11.712 5 8.99999C4.99858 6.16754 6.70425 3.61338 9.32107 2.52939C11.9379 1.44539 14.9501 2.04523 16.952 4.04899C18.2685 5.3596 19.0059 7.14238 19 8.99999C19 11.712 17.1 14.558 15.5 16.469C14.4338 17.7415 13.2631 18.9226 12 20ZM12 3.99999C9.23995 4.0033 7.00331 6.23994 7 8.99999C7 10.166 7.527 12.185 10.035 15.186C10.6531 15.924 11.309 16.6297 12 17.3C12.691 16.6304 13.3472 15.9259 13.966 15.189C16.473 12.184 17 10.165 17 8.99999C16.9967 6.23994 14.7601 4.0033 12 3.99999Z"
                fill="gray.400"/>
        </Icon>
    )
}

export const CartIcon: React.FC<IconProps> = ({active = false, size = 20}) => {
    if (active) {
        return (
            <Icon viewBox="0 0 24 24" fill="none" size={size}>
                <Path
                    d="M4.35493 11.1017L4.2396 10.2333H3.36364H3V8.5H21V10.2333H20.6364H19.7604L19.6451 11.1017L18.5121 19.6317C18.4461 20.1287 18.0222 20.5 17.5208 20.5H6.47919C5.9778 20.5 5.55392 20.1287 5.4879 19.6317L4.35493 11.1017Z"
                    stroke={Colors.primary["500"]} fill={Colors.primary["500"]} strokeWidth="2"/>
                <Path d="M8 8.5C8 6.5 8 3.5 12 3.5C16 3.5 16 6.5 16 8.5"
                      stroke={Colors.primary["500"]} fill="white" strokeWidth="2"
                      strokeLinecap="round"/>
            </Icon>
        )
    }

    return (
        <Icon viewBox="0 0 24 24" fill="white" size={size}>
            <Path
                d="M4.35493 11.1017L4.2396 10.2333H3.36364H3V8.5H21V10.2333H20.6364H19.7604L19.6451 11.1017L18.5121 19.6317C18.4461 20.1287 18.0222 20.5 17.5208 20.5H6.47919C5.9778 20.5 5.55392 20.1287 5.4879 19.6317L4.35493 11.1017Z"
                stroke="gray.400" strokeWidth="2" fill="white"/>
            <Path d="M8 8.5C8 6.5 8 3.5 12 3.5C16 3.5 16 6.5 16 8.5" stroke="gray.400" fill={"white"} strokeWidth="2"
                  stroke-linecap="round"/>
        </Icon>
    )
}

export const AccountIcon: React.FC<IconProps> = ({active = false, size = 20}) => {
    if (active) {
        return (
            <Icon viewBox="0 0 24 24" fill="none" size={size}>
                <Path
                    d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14ZM12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8Z"
                    fill="#086981"/>
                <Path
                    d="M4 22C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4ZM4 4V20H7C7 17.2386 9.23858 15 12 15C14.7614 15 17 17.2386 17 20H20V4H4ZM15 20C15 18.3431 13.6569 17 12 17C10.3431 17 9 18.3431 9 20H15Z"
                    fill="#086981"/>
                <Rect x="3" y="3" width="18" height="18" fill="#086981"/>
                <Circle cx="12" cy="10" r="4" fill="white"/>
                <Path d="M12 15C9.23858 15 7 17.2386 7 20H17C17 17.2386 14.7614 15 12 15Z" fill="white"/>
            </Icon>
        )
    }

    return (
        <Icon viewBox="0 0 24 24" fill="white" size={size}>
            <Path
                d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14ZM12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8Z"
                fill="gray.400"/>
            <Path
                d="M4 22C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4ZM4 4V20H7C7 17.2386 9.23858 15 12 15C14.7614 15 17 17.2386 17 20H20V4H4ZM15 20C15 18.3431 13.6569 17 12 17C10.3431 17 9 18.3431 9 20H15Z"
                fill="gray.400"/>
        </Icon>
    )
}
