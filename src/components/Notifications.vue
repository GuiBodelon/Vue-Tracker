<template>
  <div class="notificacoes">
    <article
      class="message" :class="context[notification.type]"
      v-for="notification in notifications"
      :key="notification.id"
    >
      <div class="message-header">{{ notification.title }}</div>
      <div class="message-body">{{ notification.text }}</div>
    </article>
  </div>
</template>

<script lang="ts">
import { NotificationType } from "@/interfaces/INotifications";
import { useStore } from "@/store";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Notificacoes",

  data(){
      return{
          context: {
              [NotificationType.success]: 'is-success',
              [NotificationType.danger]: 'is-danger',
              [NotificationType.warning]: 'is-warning'
          }
      }
  },

  setup() {
    const store = useStore();
    return {
      notifications: computed(() => store.state.notifications),
    };
  },
});
</script>

<style scoped>
.notificacoes {
  position: absolute;
  margin-left: 15%;
  top: -85px;
  width: 40vw;
  padding: 5%;
  z-index: 100;
}
</style>
