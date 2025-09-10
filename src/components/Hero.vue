<script setup>
import img from '../assets/Images/NewYorkHero.webp'
import router from '@/router/router'
import { ref, onMounted, onUnmounted } from 'vue'

const navigate = (where) => {
  router.push(where)
}

const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Imagen con efecto parallax -->
    <div
      :style="{ transform: `translateY(${scrollY * 0.5}px)` }"
      class="absolute inset-0 w-full h-full"
    >
      <img :src="img" alt="New York Hero" class="w-full h-full object-cover" />
    </div>

    <!-- Overlay con gradiente mejorado -->
    <div class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent">
      <!-- Elementos decorativos flotantes -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-32 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div class="container mx-auto h-full flex flex-col justify-center text-white px-4 relative z-10">
        <div class="max-w-4xl">
          <!-- Badge superior -->
          <div class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-fade-in-up">
            <span class="text-amber-400 text-sm font-semibold tracking-wide">✨ LÍDERES EN CONSTRUCCIÓN</span>
          </div>

          <!-- Título principal con animación mejorada -->
          <h1 class="text-5xl md:text-7xl xl:text-8xl font-black mb-6 leading-tight animate-fade-in-up delay-200">
            <span class="block text-white">Construyendo</span>
            <span class="block text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">Tu Visión</span>
          </h1>

          <!-- Subtítulo con efectos -->
          <div class="relative mb-8 animate-fade-in-up delay-400">
            <h2 class="text-2xl md:text-4xl font-bold text-amber-400 mb-4">Creando Excelencia</h2>
            <p class="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
              Transformamos ideas en realidades arquitectónicas extraordinarias. 
              <span class="text-amber-400 font-semibold">Más de 40 años</span> construyendo el futuro.
            </p>
          </div>

          <!-- Estadísticas -->
          <div class="flex flex-wrap gap-8 mb-12 animate-fade-in-up delay-600">
            <div class="text-center">
              <div class="text-3xl font-bold text-amber-400">40+</div>
              <div class="text-sm text-gray-300">Años de Experiencia</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-amber-400">500+</div>
              <div class="text-sm text-gray-300">Proyectos Completados</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-amber-400">100%</div>
              <div class="text-sm text-gray-300">Satisfacción</div>
            </div>
          </div>

          <!-- Botones de acción mejorados -->
          <div class="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-800">
            <button
              @click="navigate('contacta')"
              class="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold rounded-2xl text-lg shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span class="relative z-10">Obtén tu Presupuesto Gratis</span>
              <div class="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button class="group flex items-center gap-3 px-8 py-4 border-2 border-white/30 backdrop-blur-md text-white font-semibold rounded-2xl text-lg hover:bg-white/10 hover:border-amber-400 transition-all duration-300">
              <span>Ver Proyectos</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p class="text-white/70 text-sm mt-2 text-center">Desliza</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
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

.delay-1000 {
  animation-delay: 1s;
}
</style>