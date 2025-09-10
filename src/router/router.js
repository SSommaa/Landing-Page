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
  scrollBehavior(to, from, savedPosition) {
    // Si hay una posición guardada (por ejemplo, al usar el botón atrás)
    if (savedPosition) {
      return savedPosition
    }
    
    // Si hay un hash en la URL
    if (to.hash) {
      // Pequeño delay para asegurar que el componente se haya montado
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.getElementById(to.hash.slice(1))
          if (element) {
            resolve({
              el: to.hash,
              behavior: 'smooth',
              top: 100, // Ajusta el espacio del header fijo
            })
          } else {
            resolve({ top: 0 })
          }
        }, 100)
      })
    }
    
    // Por defecto, ir al top
    return { top: 0 }
  },
})

export default router