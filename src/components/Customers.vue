<script setup>
import CustomerCard from './Cards/CustomerCard.vue'
</script>

<template>
  <section class="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-white/60 to-transparent rounded-full"></div>
      
      <!-- Geometric patterns -->
      <div class="absolute top-16 right-20 w-20 h-20 border border-blue-200/40 rotate-45"></div>
      <div class="absolute bottom-20 left-16 w-16 h-16 bg-amber-200/30 rotate-12 rounded-lg"></div>
      <div class="absolute top-1/3 left-8 w-8 h-8 bg-blue-300/40 rounded-full"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Header section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full mb-6">
          <span class="text-blue-800 text-sm font-semibold tracking-wide">🤝 NUESTROS CLIENTES</span>
        </div>
        
        <h2 class="text-4xl md:text-6xl font-black text-gray-800 mb-6 leading-tight">
          <span class="block">Quiénes Confían</span>
          <span class="block text-transparent bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text">
            en Nosotros
          </span>
        </h2>
        
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
          En BestBuild, nuestro compromiso con la excelencia ha ganado la confianza de clientes y
          aliados en diversos sectores. Desde reconocidas marcas globales hasta familias que buscan
          construir su hogar ideal.
        </p>
      </div>

      <!-- Trust indicators -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="group bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 transform hover:-translate-y-2">
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">🤝</span>
            </div>
            <div>
              <h3 class="text-2xl font-black text-gray-800 group-hover:text-amber-600 transition-colors duration-300">Confianza Comprobada</h3>
            </div>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Más de <span class="font-bold text-amber-600">40 años</span> de experiencia
            respaldan nuestro liderazgo en la industria de la construcción.
          </p>
          <div class="mt-6 flex items-center space-x-2">
            <div class="flex space-x-1">
              <div class="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <div class="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-100"></div>
              <div class="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-200"></div>
            </div>
            <span class="text-amber-600 font-semibold text-sm">Experiencia Verificada</span>
          </div>
        </div>

        <div class="group bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 transform hover:-translate-y-2">
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">🏢</span>
            </div>
            <div>
              <h3 class="text-2xl font-black text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Clientes Diversos</h3>
            </div>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Trabajamos con empresas, instituciones y
            particulares para hacer realidad sus proyectos más ambiciosos.
          </p>
          <div class="mt-6 flex items-center space-x-2">
            <div class="flex space-x-1">
              <div class="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
              <div class="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
              <div class="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
            </div>
            <span class="text-blue-600 font-semibold text-sm">Portafolio Diverso</span>
          </div>
        </div>

        <div class="group bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 transform hover:-translate-y-2">
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl">🌟</span>
            </div>
            <div>
              <h3 class="text-2xl font-black text-gray-800 group-hover:text-green-600 transition-colors duration-300">Resultados Excepcionales</h3>
            </div>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Nuestra reputación está construida sobre
            proyectos exitosos y relaciones duraderas con nuestros clientes.
          </p>
          <div class="mt-6 flex items-center space-x-2">
            <div class="flex space-x-1">
              <div class="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <div class="w-2 h-2 bg-green-400 rounded-full animate-ping delay-300"></div>
              <div class="w-2 h-2 bg-green-400 rounded-full animate-ping delay-500"></div>
            </div>
            <span class="text-green-600 font-semibold text-sm">Éxito Garantizado</span>
          </div>
        </div>
      </div>

      <!-- Stats section -->
      <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 mb-16 text-white relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div class="relative z-10">
          <h3 class="text-3xl md:text-4xl font-black text-center mb-12">
            Números que Hablan por Sí Solos
          </h3>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center group">
              <div class="text-4xl md:text-5xl font-black text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div class="text-gray-300 font-semibold">Proyectos Completados</div>
            </div>
            <div class="text-center group">
              <div class="text-4xl md:text-5xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div class="text-gray-300 font-semibold">Satisfacción Cliente</div>
            </div>
            <div class="text-center group">
              <div class="text-4xl md:text-5xl font-black text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">40+</div>
              <div class="text-gray-300 font-semibold">Años Experiencia</div>
            </div>
            <div class="text-center group">
              <div class="text-4xl md:text-5xl font-black text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div class="text-gray-300 font-semibold">Soporte</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Client logos section -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-center text-gray-800 mb-8">
          Marcas que Confían en Nosotros
        </h3>
        <CustomerCard />
      </div>

      <!-- Testimonial section -->
      <div class="bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-100">
        <div class="text-center">
          <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
            </svg>
          </div>
          <blockquote class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 italic">
            "BestBuild no solo construyó nuestro hogar, construyó nuestros sueños"
          </blockquote>
          <div class="flex items-center justify-center space-x-4">
            <div class="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full"></div>
            <div>
              <div class="font-semibold text-gray-800">María González</div>
              <div class="text-gray-600">Cliente Residencial</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom message -->
      <div class="text-center mt-16">
        <p class="text-xl text-gray-700 font-semibold">
          Gracias a su confianza, seguimos creciendo y construyendo un futuro sólido, 
          <span class="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text font-black">
            juntos.
          </span>
        </p>
      </div>
    </div>

    <!-- Floating animation elements -->
    <div class="absolute top-1/4 right-8 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
    <div class="absolute bottom-1/4 left-8 w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-700"></div>
    <div class="absolute top-1/2 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping delay-1000"></div>
  </section>
</template>

<style scoped>
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
}
</style>