import IProject from "@/interfaces/IProject";
import { INotifications } from "@/interfaces/INotifications";
import { createStore, Store, useStore as vuexUseStore } from 'vuex';
import { InjectionKey } from 'vue';
import { CREATE_PROJECT, UPDATE_PROJECT, DELETE_PROJECT, NOTIFICATION } from "./type-of-mutations";

interface State { 
    projects: IProject[],
    notifications: INotifications[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        projects: [],
        notifications: []
    },
    mutations: {
        [CREATE_PROJECT](state, projectName: string){
            const project = {
                id: new Date().toISOString(),
                name: projectName
            } as IProject
            state.projects.push(project)
        },
        [UPDATE_PROJECT](state, project: IProject){
            const index = state.projects.findIndex(proj => proj.id == project.id)
            state.projects[index] = project
        },
        [DELETE_PROJECT](state, id: string){
            state.projects = state.projects.filter(proj => proj.id != id)
        },
        [NOTIFICATION](state, newNotification: INotifications){
            newNotification.id = new Date().getTime()
            state.notifications.push(newNotification)
            setTimeout(() => {
                state.notifications = state.notifications.filter(notification => notification.id != newNotification.id)
            }, 3000)
        }
    }
})

export function useStore(): Store<State>{
    return vuexUseStore(key)
}