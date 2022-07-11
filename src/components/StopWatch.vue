<template>
  <section>
    <strong class="display">{{ tempoDecorrido }}</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'StopWatch',

    props: {
        tempoEmSegundos: {
            type: Number,
            default: 0
        }
    },

    computed: {
        tempoDecorrido() : string {
            //tranformar tempoEmSegundos para milisegundos e formatar o temporizador de uma forma dinâmica
            return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11, 8)
        }
    }
})
</script>
<style>
.display{
    color: var(--text-primary);
}
</style>