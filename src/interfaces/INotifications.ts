export enum NotificationType{
    success,
    danger,
    warning
}

export interface INotifications {
    id: number
    type: NotificationType
    title: string
    text: string
}