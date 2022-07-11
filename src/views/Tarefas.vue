<template>
    <TaskForm @aoSalvarTarefa="salvarTarefa"/>
    <div class="lista">
      <Box v-if="listaEstaVazia">
        Você não está muito produtivo hoje =(
      </Box>
      <Task v-for="(task, index) in tasks" :key="index" :task="task"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskForm  from '../components/TaskForm.vue'
import Task  from '../components/Task.vue'
import ITask from '../interfaces/ITask'
import Box from '../components/Box.vue'

export default defineComponent({
  name: 'App',
  
  components: {
    TaskForm,
    Task,
    Box
  },

  data(){
    return{
      tasks: [] as ITask[]
    }
  },

  computed: {
    listaEstaVazia() : boolean{
      return this.tasks.length === 0
    }
  },

  methods: {
    salvarTarefa (task: ITask){
      this.tasks.push(task)
    }
  }

});
</script>
