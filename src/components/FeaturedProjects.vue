<script setup>
import Projects from './ProjectCard.vue'
import Imagen1 from '../assets/Images/burj-al-arab-desde-arriba.webp'
import Imagen2 from '../assets/Images/BlackMansion.webp'
import Imagen3 from '../assets/Images/DubaiMall.webp'

const descripcion1 = 'Hoteles'
const descripcion2 = 'Viviendas'
const descripcion3 = 'Edificios comerciales'
</script>
<template>
  <h3 class="text-6xl font-bold text-center mt-6 mb-6">Que somos capaces de hacer?</h3>
  <div class="flex flex-wrap align-middle justify-center lg:flex-nowrap">
    <Projects
      :imagen="Imagen1"
      :descripcion="descripcion1"
      class="fadeIn w-full lg:w-1/3"
      style="animation-delay: 0s"
    />
    <Projects
      :imagen="Imagen2"
      :descripcion="descripcion2"
      class="fadeIn w-full lg:w-1/3"
      style="animation-delay: 0.2s"
    />
    <Projects
      :imagen="Imagen3"
      :descripcion="descripcion3"
      class="fadeIn w-full lg:w-1/3"
      style="animation-delay: 0.4s"
    />
  </div>
</template>
<style scoped>
.fadeIn {
  animation: fadeInEffect 1.2s ease-in-out forwards;
  opacity: 0; /* Oculta inicialmente */
}

@keyframes fadeInEffect {
  0% {
    opacity: 0;
    transform: translateY(20px); /* Aparece desde abajo */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Llega a la posición original */
  }
}
</style>
