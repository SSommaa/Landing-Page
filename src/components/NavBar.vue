<script setup>
import { ref, onMounted } from 'vue'
import router from '@/router/router'

const isLoggedIn = ref(false)
const isMenuOpen = ref(false)

const checkAuth = () => {
  isLoggedIn.value = !!localStorage.getItem('authToken')
}

const navigate = (where) => {
  router.push(where)
  isMenuOpen.value = false
}

// Función para navegar a las secciones del home
const navigateToSection = (sectionId) => {
  // Si ya estamos en home, usar scroll suave
  if (router.currentRoute.value.name === 'Home') {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  } else {
    // Si no estamos en home, navegar primero al home y luego al hash
    router.push({ name: 'Home', hash: `#${sectionId}` })
  }
  isMenuOpen.value = false
}

const handleLogout = () => {
  localStorage.removeItem('authToken')
  localStorage.removeItem('userData')
  isLoggedIn.value = false
  router.push('/login')
  window.location.reload()
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  checkAuth()
})
</script>

<template>
  <nav class="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-lg text-white px-6 py-4 z-50 border-b border-white/10">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo mejorado -->
      <div @click="navigate('/')" class="group cursor-pointer flex items-center space-x-2">
        <div class="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300">
          <span class="text-black font-black text-lg">B</span>
        </div>
        <h1 class="text-2xl font-black bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
          BestBuild
        </h1>
      </div>

      <!-- Menu desktop -->
      <div class="hidden lg:flex items-center space-x-8">
        <!-- Navigation links -->
        <div class="flex items-center space-x-6">
          <button @click="navigateToSection('about')" class="relative text-gray-300 hover:text-white transition-colors duration-300 group">
            <span>Nosotros</span>
            <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></div>
          </button>
          <button @click="navigateToSection('services')" class="relative text-gray-300 hover:text-white transition-colors duration-300 group">
            <span>Servicios</span>
            <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></div>
          </button>
          <button @click="navigateToSection('projects')" class="relative text-gray-300 hover:text-white transition-colors duration-300 group">
            <span>Proyectos</span>
            <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></div>
          </button>
        </div>

        <!-- Auth buttons -->
        <div class="flex items-center space-x-4">
          <template v-if="!isLoggedIn">
            <button
              @click="navigate('login')"
              class="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              Iniciar Sesión
            </button>
            <button
              @click="navigate('register')"
              class="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Registro
            </button>
          </template>
          
          <template v-else>
            <button
              @click="navigate('Profile')"
              class="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 flex items-center space-x-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span>Perfil</span>
            </button>
          </template>

          <button
            @click="navigate('contacta')"
            class="px-6 py-2 border border-amber-400 text-amber-400 font-semibold rounded-lg hover:bg-amber-400 hover:text-black transition-all duration-300"
          >
            Contacto
          </button>

          <button
            v-if="isLoggedIn"
            @click="handleLogout"
            class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 flex items-center space-x-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
            <span class="hidden xl:inline">Cerrar Sesión</span>
          </button>
        </div>
      </div>

      <!-- Hamburger menu button -->
      <button
        @click="toggleMenu"
        class="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center space-y-1.5 group"
      >
        <div :class="['w-6 h-0.5 bg-white transition-all duration-300', isMenuOpen ? 'rotate-45 translate-y-2' : '']"></div>
        <div :class="['w-6 h-0.5 bg-white transition-all duration-300', isMenuOpen ? 'opacity-0' : '']"></div>
        <div :class="['w-6 h-0.5 bg-white transition-all duration-300', isMenuOpen ? '-rotate-45 -translate-y-2' : '']"></div>
      </button>
    </div>

    <!-- Mobile menu -->
    <div :class="['lg:hidden overflow-hidden transition-all duration-300', isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']">
      <div class="container mx-auto px-4 py-6 space-y-4 border-t border-white/10 mt-4">
        <!-- Navigation links mobile -->
        <div class="space-y-4">
          <button @click="navigateToSection('about')" class="block w-full text-left text-gray-300 hover:text-amber-400 transition-colors duration-300 py-2">
            Nosotros
          </button>
          <button @click="navigateToSection('services')" class="block w-full text-left text-gray-300 hover:text-amber-400 transition-colors duration-300 py-2">
            Servicios
          </button>
          <button @click="navigateToSection('projects')" class="block w-full text-left text-gray-300 hover:text-amber-400 transition-colors duration-300 py-2">
            Proyectos
          </button>
          <button
            @click="navigate('contacta')"
            class="block w-full text-left text-gray-300 hover:text-amber-400 transition-colors duration-300 py-2"
          >
            Contacto
          </button>
        </div>

        <!-- Auth buttons mobile -->
        <div class="pt-4 border-t border-white/10 space-y-3">
          <template v-if="!isLoggedIn">
            <button
              @click="navigate('login')"
              class="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              Iniciar Sesión
            </button>
            <button
              @click="navigate('register')"
              class="block w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-semibold rounded-lg text-center"
            >
              Registro
            </button>
          </template>
          
          <template v-else>
            <button
              @click="navigate('Profile')"
              class="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              Perfil
            </button>
            <button
              @click="handleLogout"
              class="block w-full text-left px-4 py-3 bg-red-600 text-white rounded-lg"
            >
              Cerrar Sesión
            </button>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>