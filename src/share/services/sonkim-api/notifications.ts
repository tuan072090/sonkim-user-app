import FetchDataService from "../fetch";

export const GetNotifications = async (params = {_limit: 23, _sort:"id:DESC"}) => {
    try {
        const {count, notifications} = await FetchDataService.GET("/user-api/notifications", params)

        return notifications
    } catch (err) {
        throw err
    }
}

export const ReadNotification = async (id:number|string) => {
    try {
        const data = await FetchDataService.POST("/user-api/notifications/"+id)

        return data
    } catch (err) {
        throw err
    }
}
