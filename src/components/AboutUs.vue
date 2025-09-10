<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const scrollY = ref(0)

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
    threshold: 0.3,
  })

  // Observar todos los elementos con la clase 'observe'
  const elements = document.querySelectorAll('.observe')
  elements.forEach((el) => observer.observe(el))
})
</script>

<template>
  <section id="about" class="relative py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50 overflow-hidden">
    <!-- Elementos decorativos de fondo -->
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-100/40 to-transparent rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Header section -->
      <div class="text-center mb-16">
        <div class="observe inline-flex items-center px-6 py-3 bg-amber-100 rounded-full mb-6 opacity-0 transition-opacity duration-1000">
          <span class="text-amber-800 text-sm font-semibold tracking-wide">🏗️ NUESTRA HISTORIA</span>
        </div>
        
        <h2 class="observe text-4xl md:text-6xl font-black text-gray-800 mb-6 opacity-0 transition-opacity duration-1000">
          <span class="block">¿Quiénes</span>
          <span class="block text-transparent bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text">
            Somos?
          </span>
        </h2>
      </div>

      <!-- Content grid -->
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Text content -->
        <div class="space-y-8">
          <div class="observe opacity-0 transition-opacity duration-1000">
            <p class="text-xl text-gray-600 leading-relaxed mb-8">
              En <span class="font-bold text-amber-600">BestBuild</span>, somos líderes en construcción y diseño con décadas de experiencia transformando ideas en realidades. Desde pequeños proyectos residenciales hasta grandes desarrollos comerciales e infraestructuras complejas.
            </p>
          </div>

          <!-- Features grid -->
          <div class="observe opacity-0 transition-opacity duration-1000 grid md:grid-cols-2 gap-6">
            <div class="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-amber-100 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300 group">
              <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="font-bold text-gray-800 mb-2">Calidad Garantizada</h3>
              <p class="text-gray-600 text-sm">Más de 40 años construyendo con los más altos estándares</p>
            </div>

            <div class="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-amber-100 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300 group">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="font-bold text-gray-800 mb-2">Innovación</h3>
              <p class="text-gray-600 text-sm">Tecnología de vanguardia en cada proyecto</p>
            </div>

            <div class="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-amber-100 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300 group">
              <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 class="font-bold text-gray-800 mb-2">Equipo Experto</h3>
              <p class="text-gray-600 text-sm">Ingenieros y arquitectos altamente capacitados</p>
            </div>

            <div class="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-amber-100 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300 group">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 class="font-bold text-gray-800 mb-2">Compromiso</h3>
              <p class="text-gray-600 text-sm">Construimos confianza y relaciones duraderas</p>
            </div>
          </div>

          <!-- Bottom text -->
          <div class="observe opacity-0 transition-opacity duration-1000">
            <p class="text-lg text-gray-700 leading-relaxed">
              Nos enorgullecemos de ofrecer soluciones integrales que combinan 
              <span class="font-semibold text-amber-600">innovación, sostenibilidad y excelencia</span>. 
              En BestBuild, no solo construimos estructuras, 
              <span class="font-semibold text-gray-800">construimos confianza</span>.
            </p>
          </div>

          <!-- Call to action -->
          <div class="observe opacity-0 transition-opacity duration-1000 pt-4">
            <div class="inline-flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <span>Descubre nuestros proyectos</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </div>
        </div>

        <!-- Visual content -->
        <div class="observe opacity-0 transition-opacity duration-1000">
          <div class="relative">
            <!-- Stats cards floating -->
            <div class="grid grid-cols-2 gap-6">
              <!-- Stat card 1 -->
              <div class="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-amber-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div class="text-center">
                  <div class="text-4xl font-black text-amber-600 mb-2">40+</div>
                  <div class="text-gray-600 font-semibold">Años de Experiencia</div>
                </div>
              </div>

              <!-- Stat card 2 -->
              <div class="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-amber-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 mt-8">
                <div class="text-center">
                  <div class="text-4xl font-black text-blue-600 mb-2">500+</div>
                  <div class="text-gray-600 font-semibold">Proyectos Completados</div>
                </div>
              </div>

              <!-- Stat card 3 -->
              <div class="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-amber-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div class="text-center">
                  <div class="text-4xl font-black text-green-600 mb-2">100%</div>
                  <div class="text-gray-600 font-semibold">Satisfacción</div>
                </div>
              </div>

              <!-- Stat card 4 -->
              <div class="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-amber-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 mt-8">
                <div class="text-center">
                  <div class="text-4xl font-black text-purple-600 mb-2">24/7</div>
                  <div class="text-gray-600 font-semibold">Soporte</div>
                </div>
              </div>
            </div>

            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
}
</style>