import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js' // Importar el router
import './assets/main.css' // Importa el archivo CSS de Tailwind aquí

const app = createApp(App)

// Usar el enrutador
app.use(router)

app.mount('#app')
