<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <!-- Columna 1: Información de la empresa -->
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-primary">Constructora Excelencia</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Más de 20 años construyendo sueños y transformando espacios. Comprometidos con la
            calidad y la innovación en cada proyecto.
          </p>
          <div class="flex items-center mt-4 space-x-2">
            <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
              />
            </svg>
            <span class="text-gray-400 text-sm">Av. Constructores 1234, Ciudad</span>
          </div>
        </div>

        <!-- Columna 2: Enlaces rápidos -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold">Enlaces Rápidos</h4>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-gray-400 hover:text-primary transition-colors"
                >Sobre nosotros</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-primary transition-colors">Proyectos</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-primary transition-colors">Servicios</a>
            </li>
            <li><a href="#" class="text-gray-400 hover:text-primary transition-colors">Blog</a></li>
            <li>
              <a href="#" class="text-gray-400 hover:text-primary transition-colors">Contacto</a>
            </li>
          </ul>
        </div>

        <!-- Columna 3: Servicios destacados -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold">Nuestros Servicios</h4>
          <ul class="space-y-2">
            <li class="text-gray-400">Construcción residencial</li>
            <li class="text-gray-400">Remodelaciones</li>
            <li class="text-gray-400">Diseño arquitectónico</li>
            <li class="text-gray-400">Gestión de proyectos</li>
            <li class="text-gray-400">Consultoría técnica</li>
          </ul>
        </div>

        <!-- Columna 4: Contacto y redes -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold">Contáctanos</h4>
          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"
                />
              </svg>
              <span class="text-gray-400">info@BestBuild.com</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                />
              </svg>
              <span class="text-gray-400">+36 123456789</span>
            </div>
          </div>

          <div class="pt-4">
            <h4 class="text-lg font-semibold mb-3">Síguenos</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                  />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Línea divisoria -->
      <div class="border-t border-gray-800 my-8"></div>

      <!-- Sección inferior -->
      <div class="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <div class="mb-4 md:mb-0">
          © 2024 Constructora Excelencia. Todos los derechos reservados.
        </div>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-primary transition-colors">Términos de servicio</a>
          <a href="#" class="hover:text-primary transition-colors">Política de privacidad</a>
          <a href="#" class="hover:text-primary transition-colors">Certificaciones</a>
        </div>
      </div>
    </div>
  </footer>
</template>
