export type AccountItemType = {
    item: ItemType,
    onPress?: () => void

}

export type ItemType = {
    startIcon: any,
    title: string,
    endIcon: any,
}