export type NotificationCardType={
    item:NotiType
}

export type NotiType={
    logo: any,
    title:string,
    due:string,
    description:string,
    unread?:boolean
}