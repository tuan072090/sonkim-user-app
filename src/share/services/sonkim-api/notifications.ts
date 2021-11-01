import FetchDataService from "../fetch";

export const GetNotifications = async (params = {_limit: 23, _sort:"id:DESC"}) => {
    try {
        const {count, notifications} = await FetchDataService.GET("/user-api/notifications", params)

        return notifications
    } catch (err) {
        throw err
    }
}
