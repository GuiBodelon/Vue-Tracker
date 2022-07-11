<template>
    <Box>
        <div class="columns">
            <div class="column is-4">{{ task.descricao || 'Tarefa sem descrição' }}</div>
            <div class="column is-3">{{ task.project?.name || 'N/D' }}</div>
            <div class="column d-flex">
                <span>Tempo decorrido:&nbsp;&nbsp;</span><StopWatch :tempoEmSegundos="task.duracaoEmSegundos"/>
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import StopWatch from './StopWatch.vue'
import ITask from '../interfaces/ITask'
import Box from './Box.vue'

export default defineComponent({
    name: 'Task',

    components: {
        StopWatch,
        Box
    },

    props: {
        task: {
            type: Object as  PropType<ITask>,
            required: true
        }
    }
})
</script>