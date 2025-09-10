<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigate = (where) => {
  router.push(where)
}
</script>

<template>
  <section class="relative py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full"></div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      <!-- Floating geometric shapes -->
      <div class="absolute top-20 left-20 w-16 h-16 border-2 border-amber-400/20 rotate-45 animate-spin-slow"></div>
      <div class="absolute bottom-20 right-20 w-20 h-20 bg-blue-400/10 rounded-full animate-pulse"></div>
      <div class="absolute top-1/3 right-16 w-12 h-12 bg-gradient-to-br from-amber-400/20 to-orange-500/20 transform rotate-12"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Main CTA container -->
      <div class="max-w-5xl mx-auto">
        <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
          
          <!-- Background decorative elements inside the card -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-orange-600/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-blue-600/10 rounded-full blur-3xl"></div>
          
          <div class="relative z-10 text-center">
            
            <!-- Badge -->
            <div class="inline-flex items-center px-6 py-3 bg-amber-100/20 backdrop-blur-sm rounded-full border border-amber-400/30 mb-8">
              <span class="text-amber-300 text-sm font-semibold tracking-wide">🚀 ¡COMIENZA HOY!</span>
            </div>

            <!-- Main heading -->
            <h2 class="text-4xl md:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight">
              <span class="block animate-fade-in-up">¡Empieza tu</span>
              <span class="block text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text animate-fade-in-up delay-200">
                Proyecto Ahora!
              </span>
            </h2>

            <!-- Subtitle -->
            <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400">
              ¿Listo para hacer realidad tu visión? Solicita información sin compromiso y descubre cómo 
              <span class="text-amber-400 font-semibold">nuestro equipo de expertos</span> 
              puede transformar tus ideas en realidad.
            </p>

            <!-- Features grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-up delay-600">
              <div class="flex items-center justify-center space-x-3 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div class="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div class="text-left">
                  <h3 class="font-bold text-white">Respuesta Inmediata</h3>
                  <p class="text-gray-400 text-sm">En menos de 24 horas</p>
                </div>
              </div>

              <div class="flex items-center justify-center space-x-3 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div class="text-left">
                  <h3 class="font-bold text-white">Sin Compromiso</h3>
                  <p class="text-gray-400 text-sm">Consulta gratuita</p>
                </div>
              </div>

              <div class="flex items-center justify-center space-x-3 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div class="text-left">
                  <h3 class="font-bold text-white">Expertos Dedicados</h3>
                  <p class="text-gray-400 text-sm">40+ años experiencia</p>
                </div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-800">
              <button
                @click="navigate('contacta')"
                class="group relative overflow-hidden px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-black rounded-2xl text-lg shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <span class="relative z-10 flex items-center space-x-3">
                  <span>Solicitar Información</span>
                  <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button class="group flex items-center space-x-3 px-10 py-5 border-2 border-white/30 backdrop-blur-md text-white font-bold rounded-2xl text-lg hover:bg-white/10 hover:border-amber-400 transition-all duration-300 transform hover:scale-105">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>Llamar Ahora</span>
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </button>
            </div>

            <!-- Contact info -->
            <div class="mt-12 pt-8 border-t border-white/20">
              <div class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-gray-300">
                <div class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>+36 123 456 789</span>
                </div>
                <div class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>info@BestBuild.com</span>
                </div>
                <div class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Disponible 24/7</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Decorative corner elements -->
          <div class="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-amber-400/30"></div>
          <div class="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-amber-400/30"></div>
          <div class="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-amber-400/30"></div>
          <div class="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-amber-400/30"></div>
        </div>

        <!-- Trust indicators -->
        <div class="mt-12 text-center">
          <p class="text-gray-400 mb-6">Más de 500 clientes han confiado en nosotros</p>
          <div class="flex justify-center items-center space-x-8 opacity-60">
            <div class="flex space-x-1">
              <span class="text-amber-400 text-xl">⭐</span>
              <span class="text-amber-400 text-xl">⭐</span>
              <span class="text-amber-400 text-xl">⭐</span>
              <span class="text-amber-400 text-xl">⭐</span>
              <span class="text-amber-400 text-xl">⭐</span>
            </div>
            <div class="text-gray-400 text-sm">
              4.9/5 en satisfacción del cliente
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating elements -->
    <div class="absolute top-1/4 right-8 w-3 h-3 bg-amber-400 rounded-full animate-ping"></div>
    <div class="absolute bottom-1/4 left-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
    <div class="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-1000"></div>
  </section>
</template>

<style scoped>
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-400 {
  animation-delay: 0.4s;
}

.delay-600 {
  animation-delay: 0.6s;
}

.delay-800 {
  animation-delay: 0.8s;
}
</style>