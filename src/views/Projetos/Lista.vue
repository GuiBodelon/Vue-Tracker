<template>
    <section>
        <router-link to="/projetos/novo" class="button ml-6">
            <span class="icon is-small"><i class="fas fa-plus"></i></span>
            <span>Novo projeto</span>
        </router-link>
        <table class="table is-bordered is-striped is-narrow is-hoverable ml-6 mt-3" style="width:80%;">
            <thead>
                <tr>
                    <th style="width:8vw">ID</th>
                    <th style="width:30vw">Nome</th>
                    <th class="text-center" style="width:5vw">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects" :key="project.id">
                    <td>{{ project.id }}</td>
                    <td>{{ project.name }}</td>
                    <td class="text-center"> 
                        <router-link :to="`/projetos/${project.id}`" class="button">
                            <span class="icon is-small"><i class="fas fa-pencil-alt"></i></span>
                        </router-link>
                        <button class="button ml-2 is-danger" @click="excluir(project.id)">
                        <span class="icon is-small"><i class="fas fa-trash"></i></span>                           
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { DELETE_PROJECT } from "@/store/type-of-mutations";
import { computed, defineComponent } from "vue";

export default defineComponent({
    name: 'Lista',

    methods: {
        excluir(id: string){
            this.store.commit(DELETE_PROJECT, id)
        }
    },

    setup(){
        const store = useStore()
        return {
            projects: computed(() => store.state.projects),
            store
        }
    }
})
</script>

<style scoped>
label{
    color: var(--text-primary);
}
a {
  text-decoration: none;
}
</style>