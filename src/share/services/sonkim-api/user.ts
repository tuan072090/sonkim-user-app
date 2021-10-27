import FetchDataService from "../fetch";

export type PersonalInfoType = {
    name: string,
    gender: "male"|"female"|"other",
    birthday: string,
    avatar: string
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
        console.log("get personalInfo error.....", err)
        throw err
    }
}
