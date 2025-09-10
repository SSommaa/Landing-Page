<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Datos del perfil (puedes hacer esto dinámico más adelante)
const userProfile = ref({
  name: 'Juan Pérez',
  email: 'juan.perez@email.com',
  company: 'Mi Empresa S.A.',
  phone: '+34 123 456 789',
  location: 'Madrid, España',
  memberSince: '2023',
  projects: 5,
  completedProjects: 3
})

const activeTab = ref('overview')

const setActiveTab = (tab) => {
  activeTab.value = tab
}

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <!-- Agregamos pt-24 para compensar el navbar fijo -->
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 pt-24 relative overflow-hidden">
    
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
    </div>

    <div class="container mx-auto px-4 py-12 relative z-10">
      
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-6">
          <span class="text-amber-400 text-sm font-semibold tracking-wide">👤 MI PERFIL</span>
        </div>
        
        <h1 class="text-4xl md:text-6xl font-black text-white mb-4">
          <span class="block">Mi Cuenta</span>
          <span class="block text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">
            BestBuild
          </span>
        </h1>
        
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          Gestiona tu información personal y revisa tus proyectos
        </p>
      </div>

      <!-- Profile Content -->
      <div class="max-w-6xl mx-auto">
        
        <!-- Profile Header Card -->
        <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl mb-8">
          <div class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            
            <!-- Avatar -->
            <div class="relative">
              <div class="w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                <span class="text-white font-black text-4xl">{{ userProfile.name.split(' ').map(n => n[0]).join('') }}</span>
              </div>
              <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>

            <!-- User Info -->
            <div class="flex-1 text-center md:text-left">
              <h2 class="text-3xl font-black text-white mb-2">{{ userProfile.name }}</h2>
              <p class="text-amber-400 font-semibold text-lg mb-2">{{ userProfile.company }}</p>
              <p class="text-gray-300 mb-4">{{ userProfile.email }}</p>
              
              <!-- Stats -->
              <div class="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
                <div class="text-center">
                  <div class="text-2xl font-black text-blue-400">{{ userProfile.projects }}</div>
                  <div class="text-gray-400">Proyectos Activos</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-black text-green-400">{{ userProfile.completedProjects }}</div>
                  <div class="text-gray-400">Completados</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-black text-amber-400">{{ userProfile.memberSince }}</div>
                  <div class="text-gray-400">Miembro Desde</div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col space-y-3">
              <button class="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300">
                Editar Perfil
              </button>
              <button class="px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                Configuración
              </button>
            </div>
          </div>
        </div>

        <!-- Tabs Navigation -->
        <div class="flex flex-wrap justify-center md:justify-start space-x-1 mb-8">
          <button
            @click="setActiveTab('overview')"
            :class="['px-6 py-3 font-semibold rounded-xl transition-all duration-300', 
                     activeTab === 'overview' 
                     ? 'bg-amber-500 text-black' 
                     : 'text-gray-300 hover:text-white hover:bg-white/10']"
          >
            Resumen
          </button>
          <button
            @click="setActiveTab('projects')"
            :class="['px-6 py-3 font-semibold rounded-xl transition-all duration-300', 
                     activeTab === 'projects' 
                     ? 'bg-amber-500 text-black' 
                     : 'text-gray-300 hover:text-white hover:bg-white/10']"
          >
            Mis Proyectos
          </button>
          <button
            @click="setActiveTab('contact')"
            :class="['px-6 py-3 font-semibold rounded-xl transition-all duration-300', 
                     activeTab === 'contact' 
                     ? 'bg-amber-500 text-black' 
                     : 'text-gray-300 hover:text-white hover:bg-white/10']"
          >
            Información de Contacto
          </button>
        </div>

        <!-- Tab Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <!-- Overview Tab -->
          <div v-if="activeTab === 'overview'" class="lg:col-span-2">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              
              <!-- Card 1 -->
              <div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div class="flex items-center space-x-4 mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-2 8l1-1-1 1z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-white">Proyectos en Curso</h3>
                    <p class="text-2xl font-black text-blue-400">{{ userProfile.projects }}</p>
                  </div>
                </div>
                <p class="text-gray-300 text-sm">Tienes varios proyectos activos en diferentes etapas</p>
              </div>

              <!-- Card 2 -->
              <div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div class="flex items-center space-x-4 mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-white">Completados</h3>
                    <p class="text-2xl font-black text-green-400">{{ userProfile.completedProjects }}</p>
                  </div>
                </div>
                <p class="text-gray-300 text-sm">Proyectos finalizados con éxito</p>
              </div>

              <!-- Card 3 -->
              <div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div class="flex items-center space-x-4 mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-white">Experiencia</h3>
                    <p class="text-2xl font-black text-amber-400">{{ userProfile.memberSince }}</p>
                  </div>
                </div>
                <p class="text-gray-300 text-sm">Años trabajando con BestBuild</p>
              </div>
            </div>

            <!-- Recent Activity -->
            <div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <h3 class="text-2xl font-bold text-white mb-6">Actividad Reciente</h3>
              <div class="space-y-4">
                <div class="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div>
                    <p class="text-white font-semibold">Proyecto Villa Moderna actualizado</p>
                    <p class="text-gray-400 text-sm">Hace 2 días</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                  <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div>
                    <p class="text-white font-semibold">Reunión programada para Oficinas Central</p>
                    <p class="text-gray-400 text-sm">Hace 1 semana</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                  <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <div>
                    <p class="text-white font-semibold">Presupuesto aprobado para Residencial Lagos</p>
                    <p class="text-gray-400 text-sm">Hace 2 semanas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Projects Tab -->
          <div v-if="activeTab === 'projects'" class="lg:col-span-2">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Project Card 1 -->
              <div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="font-bold text-white">Villa Moderna</h3>
                  <span class="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">En Progreso</span>
                </div>
                <p class="text-gray-300 text-sm mb-4">Construcción de villa de lujo con acabados premium y tecnología inteligente.</p>
                <div class="flex items-center justify-between">
                  <span class="text-amber-400 font-semibold">75% Completado</span>
                  <button class="text-blue-400 hover:text-blue-300 font-semibold">Ver Detalles</button>
                </div>
              </div>

              <!-- Project Card 2 -->
              <div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="font-bold text-white">Oficinas Central</h3>
                  <span class="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full">Planificación</span>
                </div>
                <p class="text-gray-300 text-sm mb-4">Diseño y construcción de edificio corporativo moderno de 8 plantas.</p>
                <div class="flex items-center justify-between">
                  <span class="text-amber-400 font-semibold">20% Completado</span>
                  <button class="text-blue-400 hover:text-blue-300 font-semibold">Ver Detalles</button>
                </div>
              </div>

              <!-- Project Card 3 -->
              <div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="font-bold text-white">Residencial Lagos</h3>
                  <span class="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs font-semibold rounded-full">Completado</span>
                </div>
                <p class="text-gray-300 text-sm mb-4">Complejo residencial de 24 viviendas con áreas comunes y jardines.</p>
                <div class="flex items-center justify-between">
                  <span class="text-green-400 font-semibold">100% Completado</span>
                  <button class="text-blue-400 hover:text-blue-300 font-semibold">Ver Detalles</button>
                </div>
              </div>

              <!-- Add Project Card -->
              <div class="bg-white/5 backdrop-blur-lg border-2 border-dashed border-white/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer">
                <div class="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <h3 class="font-bold text-white mb-2">Nuevo Proyecto</h3>
                <p class="text-gray-400 text-sm">Comienza un nuevo proyecto con BestBuild</p>
              </div>
            </div>
          </div>

          <!-- Contact Tab -->
          <div v-if="activeTab === 'contact'" class="lg:col-span-2">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Contact Information -->
              <div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                <h3 class="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                <div class="space-y-6">
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white">Email</h4>
                      <p class="text-gray-300">{{ userProfile.email }}</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white">Teléfono</h4>
                      <p class="text-gray-300">{{ userProfile.phone }}</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white">Ubicación</h4>
                      <p class="text-gray-300">{{ userProfile.location }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Support -->
              <div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                <h3 class="text-2xl font-bold text-white mb-6">Soporte</h3>
                <div class="space-y-4">
                  <button class="w-full flex items-center space-x-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300">
                    <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div class="text-left">
                      <h4 class="font-semibold text-white">Centro de Ayuda</h4>
                      <p class="text-gray-400 text-sm">Preguntas frecuentes y guías</p>
                    </div>
                  </button>

                  <button class="w-full flex items-center space-x-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300">
                    <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m2-4h2a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V6a2 2 0 012-2h6z"></path>
                      </svg>
                    </div>
                    <div class="text-left">
                      <h4 class="font-semibold text-white">Chat en Vivo</h4>
                      <p class="text-gray-400 text-sm">Habla con nuestro equipo</p>
                    </div>
                  </button>

                  <button class="w-full flex items-center space-x-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300">
                    <div class="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div class="text-left">
                      <h4 class="font-semibold text-white">Contactar Asesor</h4>
                      <p class="text-gray-400 text-sm">Habla con tu asesor personal</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Back Button -->
        <div class="text-center mt-12">
          <button
            @click="goBack"
            class="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white/30 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/10 hover:border-amber-400 transition-all duration-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            <span>Volver al Inicio</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Floating elements -->
    <div class="absolute top-1/4 right-8 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
    <div class="absolute bottom-1/4 left-8 w-1 h-1 bg-amber-400 rounded-full animate-pulse delay-500"></div>
    <div class="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-1000"></div>
  </div>
</template>