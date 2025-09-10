<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isRedirecting = ref(true)
const countdown = ref(5)

onMounted(() => {
  if (!localStorage.getItem('authToken')) {
    router.replace('/login')
  } else {
    // Start countdown
    const interval = setInterval(() => {
      countdown.value--
      if (countdown.value <= 0) {
        clearInterval(interval)
        window.location.href = 'https://tphmarketing.com'
      }
    }, 1000)
  }
})

const redirectNow = () => {
  window.location.href = 'https://tphmarketing.com'
}

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <!-- Agregamos pt-24 para compensar el navbar fijo -->
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center p-4 pt-24 relative overflow-hidden">
    
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <!-- Animated grid pattern -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      <!-- Floating geometric shapes -->
      <div class="absolute top-20 left-20 w-16 h-16 border-2 border-blue-400/20 rotate-45 animate-spin-slow"></div>
      <div class="absolute bottom-20 right-20 w-20 h-20 bg-amber-400/10 rounded-full animate-bounce-slow"></div>
      <div class="absolute top-1/3 right-16 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-amber-500/20 transform rotate-12 animate-pulse"></div>
    </div>

    <!-- Main redirect container -->
    <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl max-w-lg w-full p-12 relative z-10 text-center">
      
      <!-- Company logos -->
      <div class="flex justify-center items-center space-x-8 mb-8">
        <!-- BestBuild logo -->
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span class="text-white font-black text-xl">B</span>
          </div>
          <span class="text-white font-bold text-lg">BestBuild</span>
        </div>
        
        <!-- Connection arrow -->
        <div class="flex items-center space-x-2">
          <div class="w-4 h-0.5 bg-gradient-to-r from-blue-400 to-amber-400 animate-pulse"></div>
          <svg class="w-6 h-6 text-blue-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
          <div class="w-4 h-0.5 bg-gradient-to-r from-blue-400 to-amber-400 animate-pulse"></div>
        </div>
        
        <!-- TPH Marketing logo placeholder -->
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span class="text-white font-black text-xl">T</span>
          </div>
          <span class="text-white font-bold text-lg">TPH Marketing</span>
        </div>
      </div>

      <!-- Main heading -->
      <h2 class="text-3xl md:text-4xl font-black text-white mb-4">
        ¡Bienvenido a tu
        <span class="block text-transparent bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text">
          Dashboard!
        </span>
      </h2>

      <!-- Description -->
      <p class="text-gray-300 text-lg mb-8 leading-relaxed">
        Te estamos redirigiendo a 
        <span class="text-blue-400 font-semibold">TPH Marketing</span> 
        para que puedas acceder a todas las herramientas y funcionalidades de tu cuenta.
      </p>

      <!-- Countdown circle -->
      <div class="relative w-32 h-32 mx-auto mb-8">
        <!-- Animated ring -->
        <svg class="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="rgba(255,255,255,0.1)"
            stroke-width="8"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="url(#gradient)"
            stroke-width="8"
            fill="none"
            stroke-linecap="round"
            :stroke-dasharray="314"
            :stroke-dashoffset="314 - (314 * (5 - countdown)) / 5"
            class="transition-all duration-1000 ease-in-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#F59E0B;stop-opacity:1" />
            </linearGradient>
          </defs>
        </svg>
        
        <!-- Countdown number -->
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="text-4xl font-black text-white">{{ countdown }}</span>
        </div>
      </div>

      <!-- Status message -->
      <div class="bg-blue-500/20 border border-blue-500/30 rounded-2xl p-6 mb-8">
        <div class="flex items-center justify-center space-x-3 mb-3">
          <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span class="text-white font-semibold">Redirección automática en progreso</span>
        </div>
        <p class="text-gray-300 text-sm">
          Por favor espera un momento mientras te conectamos con TPH Marketing
        </p>
      </div>

      <!-- Action buttons -->
      <div class="flex flex-col space-y-4">
        <button
          @click="redirectNow"
          class="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
        >
          <span class="flex items-center justify-center space-x-2">
            <span>Ir Ahora</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </span>
        </button>
        
        <button
          @click="goBack"
          class="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white/30 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/10 hover:border-amber-400 transition-all duration-300"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span>Volver al Inicio</span>
        </button>
      </div>

      <!-- Security note -->
      <div class="mt-8 pt-6 border-t border-white/20">
        <div class="flex items-center justify-center space-x-2 text-gray-400 text-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
          <span>Conexión segura y cifrada</span>
        </div>
      </div>

      <!-- Loading animation -->
      <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <div class="flex space-x-1">
          <div class="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div class="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
          <div class="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
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
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(-15px);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 3s infinite;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}
</style>