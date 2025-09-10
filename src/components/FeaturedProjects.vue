<script setup>
import Projects from './Cards/ProjectCard.vue'
import Imagen1 from '../assets/Images/burj-al-arab-desde-arriba.webp'
import Imagen2 from '../assets/Images/BlackMansion.webp'
import Imagen3 from '../assets/Images/DubaiMall.webp'

const descripcion1 = 'Hoteles'
const descripcion2 = 'Viviendas'
const descripcion3 = 'Edificios comerciales'
</script>

<template>
  <section id="projects" class="relative py-20 bg-gradient-to-br from-white via-amber-50/30 to-white overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-10 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-100/20 to-transparent rounded-full"></div>
      
      <!-- Geometric patterns -->
      <div class="absolute top-20 right-20 w-16 h-16 border-2 border-amber-200/30 rotate-45"></div>
      <div class="absolute bottom-32 left-16 w-12 h-12 bg-blue-200/20 rotate-12"></div>
      <div class="absolute top-1/3 left-8 w-8 h-8 bg-amber-300/30 rounded-full"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Header section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-6 py-3 bg-amber-100 rounded-full mb-6">
          <span class="text-amber-800 text-sm font-semibold tracking-wide">🏆 NUESTRO PORTAFOLIO</span>
        </div>
        
        <h3 class="text-4xl md:text-6xl font-black text-gray-800 mb-6 leading-tight">
          <span class="block">¿Qué somos</span>
          <span class="block text-transparent bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text">
            capaces de hacer?
          </span>
        </h3>
        
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Descubre la diversidad y calidad de nuestros proyectos. 
          Desde hoteles de lujo hasta viviendas personalizadas y complejos comerciales innovadores.
        </p>
      </div>

      <!-- Projects showcase -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <!-- Project 1 - Hotels -->
        <div class="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
          <div class="relative h-96 bg-gray-100">
            <img 
              :src="Imagen1" 
              alt="Hoteles de lujo" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            
            <!-- Content overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span class="inline-block px-4 py-2 bg-amber-500 text-black text-sm font-bold rounded-full mb-4">
                  01
                </span>
                <h4 class="text-3xl font-black mb-3">Hoteles</h4>
                <p class="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  Creamos experiencias únicas con hoteles que combinan lujo, confort y diseño arquitectónico excepcional.
                </p>
                <div class="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                  <span class="text-sm font-semibold">Ver proyectos</span>
                  <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Decorative corner -->
            <div class="absolute top-4 right-4 w-12 h-12 border-2 border-white/50 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>
        </div>

        <!-- Project 2 - Residential -->
        <div class="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 lg:mt-12">
          <div class="relative h-96 bg-gray-100">
            <img 
              :src="Imagen2" 
              alt="Viviendas residenciales" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            
            <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span class="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-bold rounded-full mb-4">
                  02
                </span>
                <h4 class="text-3xl font-black mb-3">Viviendas</h4>
                <p class="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  Hogares personalizados que reflejan el estilo de vida y los sueños de cada familia.
                </p>
                <div class="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                  <span class="text-sm font-semibold">Ver proyectos</span>
                  <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="absolute top-4 right-4 w-12 h-12 border-2 border-white/50 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>
        </div>

        <!-- Project 3 - Commercial -->
        <div class="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
          <div class="relative h-96 bg-gray-100">
            <img 
              :src="Imagen3" 
              alt="Edificios comerciales" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            
            <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span class="inline-block px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-full mb-4">
                  03
                </span>
                <h4 class="text-3xl font-black mb-3">Edificios Comerciales</h4>
                <p class="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  Espacios comerciales innovadores que impulsan el éxito empresarial y la productividad.
                </p>
                <div class="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                  <span class="text-sm font-semibold">Ver proyectos</span>
                  <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="absolute top-4 right-4 w-12 h-12 border-2 border-white/50 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>
        </div>
      </div>

      <!-- Stats section -->
      <div class="bg-white/70 backdrop-blur-lg rounded-3xl border border-amber-100 p-8 md:p-12 shadow-2xl">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-black text-amber-600 mb-2">150+</div>
            <div class="text-gray-600 font-semibold">Hoteles Construidos</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-black text-blue-600 mb-2">300+</div>
            <div class="text-gray-600 font-semibold">Viviendas Entregadas</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-black text-green-600 mb-2">80+</div>
            <div class="text-gray-600 font-semibold">Centros Comerciales</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-black text-purple-600 mb-2">99%</div>
            <div class="text-gray-600 font-semibold">Satisfacción</div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16">
        <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden">
          <!-- Background decoration -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div class="relative z-10">
            <h3 class="text-3xl md:text-4xl font-black mb-4">
              ¿Listo para tu próximo proyecto?
            </h3>
            <p class="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Únete a más de 500 clientes satisfechos que confiaron en nosotros para hacer realidad sus sueños arquitectónicos.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Iniciar Mi Proyecto
              </button>
              <button class="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-amber-400 transition-all duration-300">
                Ver Más Proyectos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating animation elements -->
    <div class="absolute top-1/4 right-8 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
    <div class="absolute bottom-1/4 left-8 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-500"></div>
    <div class="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-1000"></div>
  </section>
</template>

<style scoped>
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
}

@keyframes fadeInEffect {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeIn {
  animation: fadeInEffect 1.2s ease-in-out forwards;
  opacity: 0;
}
</style>