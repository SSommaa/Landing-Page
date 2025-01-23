<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Constructora from '../assets/Images/Constructora.webp'
const scrollY = ref(0)
const observedElements = ref([])

// Función para manejar el desplazamiento
const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Función para manejar la visibilidad del elemento en el viewport
const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in')
    } else {
      entry.target.classList.remove('animate-fade-in')
    }
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5, // El 50% del elemento debe ser visible para activarse
  })

  // Observar todos los elementos con la clase 'observe'
  const elements = document.querySelectorAll('.observe')
  elements.forEach((el) => observer.observe(el))
})
</script>

<template>
  <div class="p-8 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto my-12">
    <h2
      class="observe text-3xl font-bold text-gray-800 text-center mb-6 opacity-0 transition-opacity duration-1000"
    >
      ¿Quiénes somos?
    </h2>
    <p
      class="observe text-lg text-gray-600 leading-relaxed text-justify opacity-0 transition-opacity duration-1000"
    >
      En BestBuild, somos líderes en construcción y diseño con décadas de experiencia transformando
      ideas en realidades. Desde pequeños proyectos residenciales hasta grandes desarrollos
      comerciales e infraestructuras complejas, nos enorgullecemos de ofrecer soluciones integrales
      que combinan innovación, sostenibilidad y excelencia. Nuestro equipo está compuesto por
      expertos en cada etapa del proceso constructivo: ingenieros, arquitectos y profesionales
      altamente capacitados que comparten una visión común: construir el futuro con la más alta
      calidad y precisión. En BestBuild, no solo construimos estructuras, construimos confianza. Nos
      esforzamos por superar las expectativas de nuestros clientes, garantizando resultados que
      perduren y mejoren la vida de las comunidades a las que servimos. BestBuild: Construyendo el
      futuro, juntos.
    </p>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1.5s ease-out forwards;
}
</style>
