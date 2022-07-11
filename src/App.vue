<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': darkModeActive }">
    <div class="column is-one-fifth">
      <SideBar @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-four-fifths content">
      <Notifications></Notifications>
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar  from './components/SideBar.vue';
import Notifications from './components/Notifications.vue';

export default defineComponent({
  name: 'App',

  components: {
    SideBar,
    Notifications
  },

  data(){
    return{
      darkModeActive: false
    }
  },

  methods: {
    trocarTema(darkModeActive: boolean){
      this.darkModeActive = darkModeActive
    }
  }

});
</script>

<style>
.lista{
  padding: 1.25rem;

}
main{
  --bg-primary: #fff;
  --text-primary: #000;
}
main.dark-mode{
  --bg-primary: #2b2b2b;
  --text-primary: #fff;
}
.content{
  background-color: var(--bg-primary);
}
</style>
