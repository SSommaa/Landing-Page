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

    <!-- Overlay y contenido -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
      <div class="container mx-auto h-full flex flex-col justify-center text-white px-4">
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 leading-tight">Construyendo Tu Visión,</h1>
          <h1 class="text-4xl md:text-6xl font-bold mb-6 text-primary">Construyendo Excelencia</h1>
          <p class="text-lg md:text-xl mb-8 md:mb-12 max-w-lg">
            Desde el concepto hasta la finalización, hacemos realidad tus sueños de construcción.
          </p>
          <button
            @click="navigate('contacta')"
            class="bg-white border-2 border-gray-600 text-gray-600 font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:shadow-2xl"
          >
            Obtén un Presupuesto Gratis
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
