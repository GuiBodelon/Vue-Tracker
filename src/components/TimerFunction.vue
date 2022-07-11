<template>
  <div class="d-flex justify-content-around align-items-center">
    <StopWatch :tempoEmSegundos="tempoEmSegundos" />
    <button class="button" @click="iniciar" :disabled="stopWatchRunning">
      <span class="icon"><i class="fas fa-play"></i></span>
      <span>Play</span>
    </button>
    <button class="button" @click="finalizar" :disabled="!stopWatchRunning">
      <span class="icon"><i class="fas fa-stop"></i></span>
      <span>Stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StopWatch from './StopWatch.vue'

export default defineComponent({
    name: 'TimerFunction',

    emits: ['aoTemporizadorFinalizado'],

    components: {
        StopWatch
    },

    data (){
        return {
            tempoEmSegundos: 0,
            StopWatch: 0,
            stopWatchRunning: false
        }
    },    

    methods:{
        //Iniciar contagem
        iniciar(){
          this.stopWatchRunning = true;
          //1 seg = 1000ms
          this.StopWatch = setInterval(()=>{
              this.tempoEmSegundos += 1
          }, 1000)
        },
        finalizar(){
          this.stopWatchRunning = false;
          clearInterval(this.StopWatch)
          this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
          this.tempoEmSegundos = 0
        }
    }
})
</script>