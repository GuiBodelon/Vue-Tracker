import { NotificationType } from "@/interfaces/INotifications"
import { store } from "@/store"
import { NOTIFICATION } from "@/store/type-of-mutations"

type Notifier = {
    notify: (type: NotificationType, title: string, text: string) => void
}

export default () : Notifier => {
    const notify = (type: NotificationType, title: string, text: string): void => {
        store.commit(NOTIFICATION, {
            type,
            title,
            text
        })
    }

    return{
        notify
    }
}