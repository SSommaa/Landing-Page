<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigate = (where) => {
  router.push(where)
}
</script>

<template>
  <section class="bg-gray-50 py-16 px-4">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">
        ¡Empieza tu proyecto ahora!
      </h2>

      <p class="text-lg text-gray-600 mb-8 max-w-xl mx-auto animate-fade-in-up delay-100">
        ¿Listo para hacer realidad tu visión? Solicita información sin compromiso y descubre cómo
        podemos ayudarte.
      </p>

      <button
        @click="navigate('contacta')"
        class="bg-transparent border-2 border-black text-black font-bold py-4 px-10 rounded-full hover:bg-white/10 hover:border-primary hover:text-primary transition-all duration-300 text-lg shadow-xl hover:shadow-2xl"
      >
        Solicitar información
      </button>
    </div>
  </section>
</template>

<style>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.delay-100 {
  animation-delay: 0.2s;
}

.delay-200 {
  animation-delay: 0.4s;
}
</style>
