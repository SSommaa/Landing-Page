import { createRouter, createWebHistory } from 'vue-router'

// Importación de componentes o vistas
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

// Definir las rutas
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, // Corregida la ruta
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
]

// Crear el enrutador
const router = createRouter({
  history: createWebHistory(), // Usar el historial HTML5 para navegación sin recargar la página
  routes, // Las rutas definidas anteriormente
})

export default router
