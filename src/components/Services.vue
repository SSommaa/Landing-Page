<script setup>
import { HammerIcon, PaintBucketIcon, RulerIcon } from 'lucide-vue-next'

const services = [
  {
    icon: HammerIcon,
    title: 'Contratación General',
    description: 'Gestión integral de proyectos de principio a fin.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    features: ['Planificación completa', 'Gestión de recursos', 'Control de calidad', 'Entrega puntual']
  },
  {
    icon: PaintBucketIcon,
    title: 'Renovaciones',
    description: 'Dale nueva vida a estructuras existentes con nuestras renovaciones expertas.',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    features: ['Diseño moderno', 'Materiales premium', 'Eficiencia energética', 'Valor agregado']
  },
  {
    icon: RulerIcon,
    title: 'Construcciones Personalizadas',
    description: 'Soluciones de construcción personalizadas para satisfacer tus necesidades únicas.',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    features: ['Diseño exclusivo', 'Materiales selectos', 'Tecnología avanzada', 'Seguimiento 24/7']
  },
]
</script>

<template>
  <section id="services" class="relative py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 to-transparent rounded-full"></div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-6">
          <span class="text-amber-400 text-sm font-semibold tracking-wide">🔧 NUESTROS SERVICIOS</span>
        </div>
        
        <h2 class="text-4xl md:text-6xl font-black text-white mb-6">
          <span class="block">Servicios que</span>
          <span class="block text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">
            Transforman
          </span>
        </h2>
        
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Ofrecemos soluciones integrales de construcción con la más alta calidad y tecnología de vanguardia
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
        >
          <!-- Icon container -->
          <div class="relative mb-6">
            <div :class="['w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110', `bg-gradient-to-br ${service.color}`]">
              <component :is="service.icon" class="w-8 h-8 text-white" />
            </div>
            
            <!-- Glow effect -->
            <div :class="['absolute top-0 left-0 w-16 h-16 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-all duration-300', `bg-gradient-to-br ${service.color}`]"></div>
          </div>

          <!-- Content -->
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
              {{ service.title }}
            </h3>
            
            <p class="text-gray-300 leading-relaxed">
              {{ service.description }}
            </p>

            <!-- Features list -->
            <ul class="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <li 
                v-for="feature in service.features"
                :key="feature"
                class="flex items-center space-x-2 text-sm text-gray-400"
              >
                <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>

            <!-- CTA Button -->
            <div class="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
              <button class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300">
                <span>Saber más</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Decorative corner -->
          <div class="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400/30 group-hover:border-amber-400 transition-all duration-300"></div>
          
          <!-- Number indicator -->
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-black font-black text-lg shadow-lg">
            {{ index + 1 }}
          </div>
        </div>
      </div>

      <!-- Bottom CTA section -->
      <div class="text-center mt-16 pt-16 border-t border-white/10">
        <h3 class="text-3xl font-bold text-white mb-4">
          ¿Tienes un proyecto en mente?
        </h3>
        <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
          Nuestro equipo de expertos está listo para convertir tu visión en realidad. 
          Solicita una consulta gratuita y descubre cómo podemos ayudarte.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Consulta Gratuita
          </button>
          <button class="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-amber-400 transition-all duration-300">
            Ver Portfolio
          </button>
        </div>
      </div>
    </div>

    <!-- Floating elements -->
    <div class="absolute top-20 right-20 w-4 h-4 bg-amber-400 rounded-full animate-ping"></div>
    <div class="absolute bottom-32 left-16 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-1000"></div>
    <div class="absolute top-1/2 right-8 w-2 h-2 bg-white rounded-full animate-pulse"></div>
  </section>
</template>

<style scoped>
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
}
</style>