import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { key, store } from './store'

createApp(App).use(router).use(store, key).mount('#app')
