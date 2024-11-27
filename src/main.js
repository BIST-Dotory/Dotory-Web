import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "@/assets/css/fonts.css"

createApp(App)
  .use(router)
  .mount('#app')