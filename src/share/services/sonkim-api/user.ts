import FetchDataService from "../fetch";
import {Platform} from "react-native";
import DeviceInfo from 'react-native-device-info';

export type PersonalInfoType = {
    name: string,
    gender: "male"|"female"|"other",
    birthday: string,
    avatar: string,
    address?:string
}

export const GetPersonalInfo = async () => {
    try {
        const personalInfo = await FetchDataService.GET("/user-api/personal-info")

        return personalInfo
    } catch (err) {
        console.log("get personalInfo error.....", err)
        throw err
    }
}

export const UpdatePersonalInfo = async (payload:PersonalInfoType) => {
    try {
        const personalInfo = await FetchDataService.PUT("/user-api/personal-info", {...payload})

        return personalInfo
    } catch (err) {
        console.log("update personalInfo error.....", err)
        throw err
    }
}

export const UpdateUserDeviceToken = async (token:string) => {
    try {
        let deviceId = DeviceInfo.getDeviceId();

        const device = await FetchDataService.POST("/user-api/user-devices",{
            "deviceName": deviceId,
            "deviceToken": token,
            "deviceOs": Platform.OS
        })

        return device
    } catch (err) {
        throw err
    }
}
