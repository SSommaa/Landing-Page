<script setup>
import router from '@/router/router'
defineProps({
  imagen: String,
  descripcion: String,
})

const navigate = (where) => {
  router.push(where)
}
</script>

<template>
  <div class="p-6 group">
    <div class="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105">
      <!-- Image container -->
      <div class="relative w-full h-full overflow-hidden">
        <img
          :src="imagen"
          alt="Proyecto"
          class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        
        <!-- Gradient overlays -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
        <div class="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <!-- Content overlay -->
        <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div class="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
            <!-- Category badge -->
            <div class="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
              <span class="text-amber-300 text-sm font-semibold">✨ Proyecto Destacado</span>
            </div>
            
            <!-- Project title -->
            <h3 class="text-2xl md:text-3xl font-black mb-3 group-hover:text-amber-300 transition-colors duration-300">
              {{ descripcion }}
            </h3>
            
            <!-- Project description -->
            <p class="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 leading-relaxed">
              Proyectos únicos que combinan diseño innovador, 
              <span class="text-amber-300 font-semibold">calidad excepcional</span> 
              y tecnología de vanguardia.
            </p>
            
            <!-- Project stats -->
            <div class="flex items-center space-x-6 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300">
              <div class="text-center">
                <div class="text-lg font-bold text-amber-300">5⭐</div>
                <div class="text-xs text-gray-300">Calidad</div>
              </div>
              <div class="text-center">
                <div class="text-lg font-bold text-blue-300">100%</div>
                <div class="text-xs text-gray-300">Satisfacción</div>
              </div>
              <div class="text-center">
                <div class="text-lg font-bold text-green-300">A+</div>
                <div class="text-xs text-gray-300">Eficiencia</div>
              </div>
            </div>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-400">
              <button class="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300">
                <span>Ver Proyecto</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </button>
              
              <button class="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-white/30 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/10 hover:border-amber-400 transition-all duration-300">
                <span>Más Info</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Decorative elements -->
        <div class="absolute top-4 right-4 w-12 h-12 border-2 border-white/30 rounded-xl rotate-12 opacity-0 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-300"></div>
        
        <!-- Hover effect particles -->
        <div class="absolute top-6 left-6 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
        <div class="absolute bottom-20 right-8 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 animate-pulse"></div>
        
        <!-- Progress indicator -->
        <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
      
      <!-- Floating info card -->
      <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
        <div class="flex items-center space-x-3">
          <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span class="text-gray-800 font-semibold text-sm">Proyecto Activo</span>
        </div>
      </div>
    </div>
  </div>
</template>