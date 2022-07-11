<template>
    <header>
        <h1 class="d-flex">
            <img class="mx-auto" src="../assets/logo.png">
        </h1>        
        <aside class="menu box mt-3">
          <div class="d-flex">
            <button class="button mx-auto" type="button" @click="alterarTema">
              <span class="icon"><i class="fa-solid fa-circle-half-stroke"></i></span>
              <span>{{ textoBotao }}</span>
            </button>
          </div>
          <p class="menu-label mt-5">
            Aplicações
          </p>
          <ul class="menu-list">
            <li>
              <router-link to="/" class="link">
                <i class="fas fa-tasks mr-2"></i> Tarefas
              </router-link>
            </li>
            <li>
              <router-link to="/projetos" class="link">
                <i class="fas fa-project-diagram mr-2"></i> Projetos
              </router-link>
            </li>
          </ul>
        </aside>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'SideBar',

    emits: ['aoTemaAlterado'],

    data(){
      return {
        darkModeActive: false
      }
    },

    computed: {
      textoBotao(){
        if (this.darkModeActive == true){
          return 'Desativar modo escuro'
        }else{
          return 'Ativar modo escuro'
        }        
      }
    },

    methods: {
      alterarTema(){
        this.darkModeActive = !this.darkModeActive
        this.$emit('aoTemaAlterado', this.darkModeActive)
      }
    }
})
</script>

<style scoped>
header {
  padding: 1rem;
  background: whitesmoke;
  width: 100%;
  height: 100vh;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}

li a {
  text-decoration: none;
}
li:hover a {
  color: #884B9F;
}
.router-link-active{
  color: #884B9F;
  background-color: whitesmoke;
}
ul, .menu-label{
  font-size: 0.9vw;
}
i{
  font-size: 1vw;
}
</style>