<template>
    <section>
        <form @submit.prevent="salvar" class="pt-3 pl-6 pr-6">
            <div class="field">
                <label for="projectName" class="label">Nome do Projeto</label>
                <input type="text" class="input" v-model="projectName" id="projectName" placeholder="Insira o nome do novo projeto"/>
            </div>
            <div class="field">
                <router-link to="/projetos" class="button mr-3" style="text-decoration:none;">Voltar</router-link>
                <button class="button" type="submit">Salvar</button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { NotificationType } from "@/interfaces/INotifications";
import { useStore } from "@/store";
import { UPDATE_PROJECT, CREATE_PROJECT } from "@/store/type-of-mutations";
import { defineComponent } from "vue";
import useNotifier from '@/hooks/notifier';

export default defineComponent({
    name: 'Formulario',

    props: {
        id: {
            type: String
        }
    },

    mounted(){
        if(this.id){
            const project = this.store.state.projects.find(proj => proj.id == this.id)
            this.projectName = project?.name || ''
        }
    },

    data(){
        return{
            projectName: ''
        }
    },

    methods: {
        salvar(){
            if(this.id){
                this.store.commit(UPDATE_PROJECT, {
                    id: this.id,
                    name: this.projectName
                })
            }else{
                this.store.commit(CREATE_PROJECT, this.projectName)
            }
            this.projectName = "";
            this.notify(NotificationType.success, 'Sucesso!', 'O projeto foi cadastrado com sucesso!');
            this.$router.push('/projetos');
        }        
    },
    setup(){
        const store = useStore()
        const { notify } = useNotifier()
        return {
            store,
            notify
        }
    }
})
</script>

<style scoped>
label{
    color: var(--text-primary);
}
</style>