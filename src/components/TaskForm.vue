<template>
    <div class="box formulary">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao">
            </div>
            <div class="colum is-3 d-flex justify-content-around align-items-center">
                <div class="select">
                    <select v-model="idProject">
                        <option value="">Selecione o projeto</option>
                        <option :value="project.id" v-for="project in projects" :key="project.id">{{ project.name }}</option>
                    </select>
                </div>
            </div>
            <div class="column is-3">
                <TimerFunction @aoTemporizadorFinalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import TimerFunction from './TimerFunction.vue'
import  { useStore } from 'vuex';
import { key } from '@/store'

export default defineComponent({
    name: 'TaskForm',

    emits: ['aoSalvarTarefa'],

    components: {
        TimerFunction
    },

    data(){
        return {
            descricao: '',
            idProject: ''
        }
    },

    methods: {
        finalizarTarefa(tempoDecorrido: number) : void{
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao,
                project: this.projects.find(proj => proj.id == this.idProject)
            })
            this.descricao = ''
        }
    },

    setup(){
        const store = useStore(key)
        return{
            projects: computed(() => store.state.projects)
        }
    }
})
</script>

<style>
.formulary{
    color: var(--text-primary);
    background-color: var(--bg-primary);
}

</style>