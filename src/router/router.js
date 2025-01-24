import { createRouter, createWebHistory } from 'vue-router'

// Importación de componentes
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Profile from '../components/Profile.vue'
import ContactForm from '../components/ContactForm.vue'
// Definir las rutas
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/contacta',
    name: 'ContactForm',
    component: ContactForm,
  },
]

// Crear el enrutador
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100, // Ajusta el espacio del header fijo
      }
    }
    return { top: 0 }
  },
})

export default router
