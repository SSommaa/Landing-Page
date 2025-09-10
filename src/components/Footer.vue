<script setup>
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>

<template>
  <footer class="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
    </div>

    <!-- Main footer content -->
    <div class="container mx-auto px-4 pt-20 pb-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        <!-- Company Info -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Logo and brand -->
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center">
              <span class="text-black font-black text-xl">B</span>
            </div>
            <h3 class="text-3xl font-black bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
              BestBuild
            </h3>
          </div>
          
          <p class="text-gray-300 text-lg leading-relaxed max-w-md">
            Más de 40 años construyendo sueños y transformando espacios. 
            <span class="text-amber-400 font-semibold">Comprometidos con la calidad</span> 
            y la innovación en cada proyecto.
          </p>

          <!-- Company stats -->
          <div class="flex flex-wrap gap-8 mt-8">
            <div class="text-center">
              <div class="text-2xl font-black text-amber-400">40+</div>
              <div class="text-sm text-gray-400">Años</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-black text-blue-400">500+</div>
              <div class="text-sm text-gray-400">Proyectos</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-black text-green-400">100%</div>
              <div class="text-sm text-gray-400">Calidad</div>
            </div>
          </div>

          <!-- Location -->
          <div class="flex items-start space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div class="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mt-1">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-white mb-1">Nuestra Oficina</h4>
              <span class="text-gray-300">Av. Constructores 1234, Ciudad</span>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-6">
          <h4 class="text-xl font-bold text-white relative">
            Enlaces Rápidos
            <div class="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded"></div>
          </h4>
          <ul class="space-y-4">
            <li>
              <a
                href="#about"
                @click.prevent="scrollToSection('about')"
                class="group flex items-center space-x-2 text-gray-400 hover:text-amber-400 transition-all duration-300 cursor-pointer"
              >
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span>Sobre nosotros</span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                @click.prevent="scrollToSection('projects')"
                class="group flex items-center space-x-2 text-gray-400 hover:text-amber-400 transition-all duration-300 cursor-pointer"
              >
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span>Proyectos</span>
              </a>
            </li>
            <li>
              <a
                href="#services"
                @click.prevent="scrollToSection('services')"
                class="group flex items-center space-x-2 text-gray-400 hover:text-amber-400 transition-all duration-300 cursor-pointer"
              >
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span>Servicios</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="group flex items-center space-x-2 text-gray-400 hover:text-amber-400 transition-all duration-300"
              >
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span>Contacto</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div class="space-y-6">
          <h4 class="text-xl font-bold text-white relative">
            Nuestros Servicios
            <div class="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded"></div>
          </h4>
          <ul class="space-y-4">
            <li class="flex items-center space-x-3 text-gray-400">
              <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span>Construcción residencial</span>
            </li>
            <li class="flex items-center space-x-3 text-gray-400">
              <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Remodelaciones</span>
            </li>
            <li class="flex items-center space-x-3 text-gray-400">
              <div class="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Diseño arquitectónico</span>
            </li>
            <li class="flex items-center space-x-3 text-gray-400">
              <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Gestión de proyectos</span>
            </li>
            <li class="flex items-center space-x-3 text-gray-400">
              <div class="w-2 h-2 bg-red-400 rounded-full"></div>
              <span>Consultoría técnica</span>
            </li>
          </ul>

          <!-- Contact CTA -->
          <div class="mt-8 p-4 bg-gradient-to-r from-amber-500/20 to-orange-600/20 rounded-xl border border-amber-500/30 backdrop-blur-sm">
            <h5 class="font-semibold text-white mb-2">¿Necesitas ayuda?</h5>
            <p class="text-sm text-gray-300 mb-3">Nuestro equipo está aquí para ti</p>
            <button class="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-semibold rounded-lg text-sm hover:shadow-lg hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300">
              Contáctanos
            </button>
          </div>
        </div>
      </div>

      <!-- Contact & Social Section -->
      <div class="mb-12 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Contact Info -->
          <div class="space-y-6">
            <h4 class="text-xl font-bold text-white mb-6">Contáctanos</h4>
            
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                </svg>
              </div>
              <div>
                <h5 class="font-semibold text-white">Email</h5>
                <p class="text-amber-400 hover:text-amber-300 cursor-pointer transition-colors">info@BestBuild.com</p>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div>
                <h5 class="font-semibold text-white">Teléfono</h5>
                <p class="text-amber-400 hover:text-amber-300 cursor-pointer transition-colors">+36 123456789</p>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="space-y-6">
            <h4 class="text-xl font-bold text-white mb-6">Síguenos</h4>
            <div class="flex flex-wrap gap-4">
              <a href="#" class="group w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              
              <a href="#" class="group w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-pink-600 transition-all duration-300 transform hover:scale-110">
                <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              
              <a href="#" class="group w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-blue-800 transition-all duration-300 transform hover:scale-110">
                <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            <!-- Newsletter signup -->
            <div class="mt-8 p-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-500/30">
              <h5 class="font-semibold text-white mb-2">Newsletter</h5>
              <p class="text-sm text-gray-300 mb-3">Recibe noticias y actualizaciones</p>
              <div class="flex gap-2">
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  class="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button class="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg text-sm hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
                  Suscribir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom section -->
      <div class="border-t border-white/10 pt-8">
        <div class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div class="text-gray-400 text-sm">
            © 2024 Constructora BestBuild. Todos los derechos reservados.
          </div>
          
          <div class="flex flex-wrap gap-6 text-sm">
            <a href="#" class="text-gray-400 hover:text-amber-400 transition-colors duration-300">
              Términos de servicio
            </a>
            <a href="#" class="text-gray-400 hover:text-amber-400 transition-colors duration-300">
              Política de privacidad
            </a>
            <a href="#" class="text-gray-400 hover:text-amber-400 transition-colors duration-300">
              Certificaciones
            </a>
            <a href="#" class="text-gray-400 hover:text-amber-400 transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating elements -->
    <div class="absolute top-20 right-10 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
    <div class="absolute bottom-20 left-10 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
  </footer>
</template>