import { NotificationType } from "@/interfaces/INotifications"
import { store } from "@/store"
import { NOTIFICATION } from "@/store/type-of-mutations"

export const notificationMixin = {
    methods: {
        notification(type: NotificationType, title: string, text: string): void{
            store.commit(NOTIFICATION, {
                type,
                title,
                text
            })
        }
    }
}