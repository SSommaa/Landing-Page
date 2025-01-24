import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import './assets/main.css'

const app = createApp(App)

// Usar el enrutador
app.use(router)

app.mount('#app')
