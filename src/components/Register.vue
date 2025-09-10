<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import 'alertifyjs/build/css/alertify.min.css'
import 'alertifyjs/build/css/themes/default.min.css'
import { handleRegister } from '@/services/auth.service'

onMounted(() => {
  if (localStorage.getItem('authToken')) {
    router.push('profile')
  }
})

const router = useRouter()
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const acceptTerms = ref(false)
const isLoading = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)

// Objeto reactivo para almacenar mensajes de error
const errors = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  terms: ''
})

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = '')
  let isValid = true

  if (!email.value) {
    errors.email = 'Email es requerido'
    isValid = false
  } else if (!validateEmail(email.value)) {
    errors.email = 'Email no válido'
    isValid = false
  }

  if (password.value.length < 6) {
    errors.password = 'Mínimo 6 caracteres'
    isValid = false
  }

  if (password.value !== confirmPassword.value) {
    errors.confirmPassword = 'Las contraseñas no coinciden'
    isValid = false
  }

  if (!acceptTerms.value) {
    errors.terms = 'Debes aceptar los términos y condiciones'
    isValid = false
  }

  return isValid
}

const register = async () => {
  if (validateForm()) {
    isLoading.value = true
    try {
      await handleRegister(email, password)
      const token = localStorage.getItem('authToken')
      if (token) {
        router.push('profile')
      } else {
        throw new Error('Error al guardar el token en localStorage.')
      }
    } catch (error) {
      // Handle registration error
      console.error('Registration error:', error)
    } finally {
      isLoading.value = false
    }
  }
}

const togglePasswordVisibility = (field) => {
  if (field === 'password') {
    showPassword.value = !showPassword.value
  } else {
    showConfirmPassword.value = !showConfirmPassword.value
  }
}
</script>

<template>
  <!-- Agregamos pt-24 para compensar el navbar fijo -->
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center p-4 pt-24 relative overflow-hidden">
    
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
    </div>

    <!-- Main register container -->
    <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl max-w-md w-full p-8 md:p-12 relative z-10">
      
      <!-- Header with logo -->
      <div class="text-center mb-8">
        <div class="flex justify-center mb-6">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span class="text-white font-black text-2xl">B</span>
          </div>
        </div>
        
        <h2 class="text-3xl md:text-4xl font-black text-white mb-2">
          Únete a BestBuild
        </h2>
        <p class="text-gray-300">
          Crea tu cuenta y comienza tu próximo proyecto
        </p>
      </div>

      <!-- Registration form -->
      <form @submit.prevent="register" class="space-y-6">
        
        <!-- Email field -->
        <div class="space-y-2">
          <label class="block text-white text-sm font-semibold mb-2">
            Correo Electrónico *
          </label>
          <div class="relative">
            <input
              type="email"
              v-model="email"
              required
              class="w-full px-4 py-4 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              :class="{ 'border-red-500 focus:ring-red-400': errors.email }"
              placeholder="tu@email.com"
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
          <div v-if="errors.email" class="text-red-400 text-sm mt-1 animate-shake">{{ errors.email }}</div>
        </div>

        <!-- Password field -->
        <div class="space-y-2">
          <label class="block text-white text-sm font-semibold mb-2">
            Contraseña *
          </label>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              required
              class="w-full px-4 py-4 pl-12 pr-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              :class="{ 'border-red-500 focus:ring-red-400': errors.password }"
              placeholder="Mínimo 6 caracteres"
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <button
              type="button"
              @click="togglePasswordVisibility('password')"
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
          <div v-if="errors.password" class="text-red-400 text-sm mt-1 animate-shake">{{ errors.password }}</div>
        </div>

        <!-- Confirm Password field -->
        <div class="space-y-2">
          <label class="block text-white text-sm font-semibold mb-2">
            Confirmar Contraseña *
          </label>
          <div class="relative">
            <input
              :type="showConfirmPassword ? 'text' : 'password'"
              v-model="confirmPassword"
              required
              class="w-full px-4 py-4 pl-12 pr-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              :class="{ 'border-red-500 focus:ring-red-400': errors.confirmPassword }"
              placeholder="Confirma tu contraseña"
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <button
              type="button"
              @click="togglePasswordVisibility('confirm')"
              class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg v-if="!showConfirmPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
              </svg>
            </button>
          </div>
          <div v-if="errors.confirmPassword" class="text-red-400 text-sm mt-1 animate-shake">{{ errors.confirmPassword }}</div>
        </div>

        <!-- Terms and conditions -->
        <div class="space-y-2">
          <label class="flex items-start space-x-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="acceptTerms"
              class="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span class="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
              Acepto los 
              <a href="#" class="text-blue-400 hover:text-blue-300 underline">términos y condiciones</a> 
              y la 
              <a href="#" class="text-blue-400 hover:text-blue-300 underline">política de privacidad</a>
            </span>
          </label>
          <div v-if="errors.terms" class="text-red-400 text-sm animate-shake">{{ errors.terms }}</div>
        </div>

        <!-- Submit button -->
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 disabled:scale-100 disabled:shadow-none"
        >
          <span v-if="!isLoading" class="flex items-center justify-center space-x-2">
            <span>Crear Cuenta</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
            </svg>
          </span>
          <span v-else class="flex items-center justify-center space-x-2">
            <svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            <span>Creando cuenta...</span>
          </span>
        </button>

        <!-- Social register options -->
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-white/20"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-transparent text-gray-400">O regístrate con</span>
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

      <!-- Sign in link -->
      <div class="text-center mt-8 pt-6 border-t border-white/20">
        <p class="text-gray-400">
          ¿Ya tienes cuenta?
          <router-link to="/login" class="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200 ml-1">
            Inicia sesión
          </router-link>
        </p>
      </div>

      <!-- Benefits section -->
      <div class="mt-8 pt-6 border-t border-white/20">
        <p class="text-center text-gray-400 text-sm mb-4">¿Por qué elegir BestBuild?</p>
        <div class="space-y-2 text-sm text-gray-300">
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>40+ años de experiencia en construcción</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Seguimiento 24/7 de tus proyectos</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Consultas gratuitas sin compromiso</span>
          </div>
        </div>
      </div>

      <!-- Decorative corner elements -->
      <div class="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-blue-400/30"></div>
      <div class="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-blue-400/30"></div>
      <div class="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-blue-400/30"></div>
      <div class="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-blue-400/30"></div>
    </div>

    <!-- Floating elements -->
    <div class="absolute top-1/4 right-8 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
    <div class="absolute bottom-1/4 left-8 w-1 h-1 bg-amber-400 rounded-full animate-pulse delay-500"></div>
    <div class="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-1000"></div>
  </div>
</template>

<style scoped>
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.animate-shake {
  animation: shake 0.5s ease-in-out;
}
</style>