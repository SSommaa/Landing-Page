<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import { useRouter } from 'vue-router'
import { handleLogin } from '@/services/auth.service'

const router = useRouter()
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const isLoading = ref(false)
const showPassword = ref(false)

onMounted(() => {
  if (localStorage.getItem('authToken')) {
    router.push('profile')
  }
})

const Login = async () => {
  isLoading.value = true
  errorMessage.value = ''
  
  try {
    await handleLogin(email, password)
    const token = localStorage.getItem('authToken')
    if (token) {
      router.push('profile')
    } else {
      throw new Error('Error al guardar el token en localStorage.')
    }
  } catch (error) {
    errorMessage.value = error.message || 'Error al iniciar sesión'
  } finally {
    isLoading.value = false
  }
}

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <!-- Agregamos pt-24 para compensar el navbar fijo -->
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center p-4 pt-24 relative overflow-hidden">
    
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
    </div>

    <!-- Main login container -->
    <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl max-w-md w-full p-8 md:p-12 relative z-10">
      
      <!-- Header with logo -->
      <div class="text-center mb-8">
        <div class="flex justify-center mb-6">
          <div class="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span class="text-white font-black text-2xl">B</span>
          </div>
        </div>
        
        <h2 class="text-3xl md:text-4xl font-black text-white mb-2">
          Bienvenido de Vuelta
        </h2>
        <p class="text-gray-300">
          Accede a tu cuenta para gestionar tus proyectos
        </p>
      </div>

      <!-- Login form -->
      <form @submit.prevent="Login" class="space-y-6">
        
        <!-- Email field -->
        <div class="space-y-2">
          <label class="block text-white text-sm font-semibold mb-2">
            Correo Electrónico
          </label>
          <div class="relative">
            <input
              type="email"
              v-model="email"
              required
              class="w-full px-4 py-4 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
              placeholder="tu@email.com"
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
        </div>

        <!-- Password field -->
        <div class="space-y-2">
          <label class="block text-white text-sm font-semibold mb-2">
            Contraseña
          </label>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              required
              class="w-full px-4 py-4 pl-12 pr-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
              placeholder="Tu contraseña"
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <button
              type="button"
              @click="togglePasswordVisibility"
              class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Forgot password link -->
        <div class="text-right">
          <a href="#" class="text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors duration-200">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <!-- Error message -->
        <div v-if="errorMessage" class="p-4 bg-red-500/20 border border-red-500/30 text-red-300 rounded-xl text-sm">
          {{ errorMessage }}
        </div>

        <!-- Submit button -->
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 disabled:from-gray-500 disabled:to-gray-600 text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 disabled:scale-100 disabled:shadow-none"
        >
          <span v-if="!isLoading" class="flex items-center justify-center space-x-2">
            <span>Iniciar Sesión</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
            </svg>
          </span>
          <span v-else class="flex items-center justify-center space-x-2">
            <svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            <span>Accediendo...</span>
          </span>
        </button>

        <!-- Social login options -->
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-white/20"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-transparent text-gray-400">O continúa con</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <button
            type="button"
            class="flex items-center justify-center px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </button>
          <button
            type="button"
            class="flex items-center justify-center px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
        </div>
      </form>

      <!-- Sign up link -->
      <div class="text-center mt-8 pt-6 border-t border-white/20">
        <p class="text-gray-400">
          ¿No tienes cuenta?
          <router-link to="/register" class="text-amber-400 hover:text-amber-300 font-semibold transition-colors duration-200 ml-1">
            Regístrate aquí
          </router-link>
        </p>
      </div>

      <!-- Decorative corner elements -->
      <div class="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-amber-400/30"></div>
      <div class="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-amber-400/30"></div>
      <div class="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-amber-400/30"></div>
      <div class="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-amber-400/30"></div>
    </div>

    <!-- Floating elements -->
    <div class="absolute top-1/4 right-8 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
    <div class="absolute bottom-1/4 left-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-500"></div>
    <div class="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-1000"></div>
  </div>
</template>