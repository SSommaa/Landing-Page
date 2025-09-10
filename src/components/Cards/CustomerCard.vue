<script setup>
// Logos como un array con información adicional
const logos = [
  {
    title: '42',
    path: 'M19.581 16.851H24v-4.439ZM24 3.574h-4.419v4.42l-4.419 4.418v4.44h4.419v-4.44L24 7.993Zm-4.419 0h-4.419v4.42zm-6.324 8.838H4.419l8.838-8.838H8.838L0 12.412v3.595h8.838v4.419h4.419z',
    category: 'Tech'
  },
  {
    title: '.NET',
    path: 'M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z',
    category: 'Development'
  },
  {
    title: '7Zip',
    path: 'M0 18.858h24V8.181H10.717V5.142H0ZM2.021 7.271h6.657v1.994c-1.74 2.09-2.84 4.502-2.948 7.404H3.477c.09-2.501.353-4.954 2.283-6.994l.033-.033H2.021Zm8.45 1.253h13.215v10.143H10.47Zm6.01 1.213v6.871h1.482v-6.87Zm2.755.043v6.912h1.616v-2.42h1.029c.43-.001.754-.29.969-.716.427-.848.429-2.257-.024-3.092-.227-.419-.571-.697-1.033-.684zm-7.924.002v1.596h2.217l-2.304 3.736v1.54h4.287V15.1h-2.698l2.786-3.909v-1.41Zm9.452 1.512h.595c.164-.006.287.081.371.217.17.273.172.736.004.99a.364.364 0 0 1-.373.176l-.55.047z',
    category: 'Software'
  },
  {
    title: 'Adidas',
    path: 'M24 19.535l-8.697-15.07-4.659 2.687 7.145 12.383Zm-8.287 0L9.969 9.59 5.31 12.277l4.192 7.258ZM4.658 14.723l2.776 4.812H1.223L0 17.41Z',
    category: 'Fashion'
  },
  {
    title: 'Amazon',
    path: 'M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02z',
    category: 'E-commerce'
  },
  {
    title: 'Carrefour',
    path: 'M12.14 4.045c-2.569 0-3.572 3.64-3.572 7.979 0 4.34 1.003 7.931 3.572 7.931 1.541 0 2.855-.903 2.86-1.645a.625.625 0 0 0-.199-.453c-.73-.706-1.016-1.412-1.018-2.034-.005-1.189 1.026-2.074 1.977-2.074 1.306 0 2.077 1.027 2.077 2.357 0 1.26-.537 2.31-1.121 3.15a.193.193 0 0 0-.034.107c0 .065.04.12.098.12.035 0 .076-.02.122-.065l6.561-6.344c.328-.28.537-.608.537-1.073 0-.468-.21-.794-.537-1.073l-6.561-6.346c-.045-.045-.087-.064-.122-.064-.059 0-.097.055-.098.12 0 .035.01.073.034.107.584.84 1.12 1.89 1.12 3.15 0 1.329-.77 2.356-2.076 2.356-.95 0-1.982-.884-1.977-2.073.002-.622.288-1.328 1.018-2.033A.624.624 0 0 0 15 5.69c-.004-.743-1.319-1.646-2.86-1.646m-5.043.537L.537 10.93C.209 11.207 0 11.534 0 12c0 .465.21.793.537 1.073l6.56 6.345c.042.043.083.06.117.06.062 0 .105-.057.103-.123a.188.188 0 0 0-.057-.123C5.72 17.32 4.6 15.126 4.6 12.024c0-3.104 1.12-5.341 2.66-7.255a.185.185 0 0 0 .057-.123c.002-.068-.04-.123-.103-.123-.034 0-.075.017-.117.06',
    category: 'Retail'
  },
  {
    title: "McDonald's",
    path: 'M17.243 3.006c2.066 0 3.742 8.714 3.742 19.478H24c0-11.588-3.042-20.968-6.766-20.968-2.127 0-4.007 2.81-5.248 7.227-1.241-4.416-3.121-7.227-5.231-7.227C3.031 1.516 0 10.888 0 22.476h3.014c0-10.763 1.658-19.47 3.724-19.47 2.066 0 3.741 8.05 3.741 17.98h2.997c0-9.93 1.684-17.98 3.75-17.98Z',
    category: 'Food'
  },
  {
    title: 'Zara',
    path: 'M8.562 7l.002.006 2.794 7.621v-7.23h-1.15v-.07h3.96c1.903 0 3.231.976 3.231 2.375 0 1.02-.91 1.868-2.263 2.109l-.249.031.25.026c.821.094 1.473.346 1.935.75l.003.003L19.141 7h.07l.002.006 3.556 9.698H24v.07h-3.918v-.07h1.154l-1.17-3.189h-2.373v.002l.013.037c.094.281.142.576.139.873v1.196c0 .615.271 1.238.79 1.238.304 0 .547-.107.837-.372l.041.038c-.314.332-.695.473-1.266.473-.43 0-.8-.104-1.096-.308l-.056-.04c-.39-.296-.644-.778-.753-1.435l-.018-.106-.018-.16-.002-.028-.654 1.78h.928v.07h-1.942v-.07h.938l.718-1.954v-.005a6.35 6.35 0 01-.013-.346v-.854c0-1.049-.78-1.65-2.14-1.65h-1.337v4.81h1.158v.07H9.433v-.07h1.154l-1.17-3.189H6.172l-1.158 3.154.048-.008c1.521-.262 2.22-1.423 2.23-2.645h.07v2.758H0l5.465-9.377H3.268c-1.822 0-2.646 1.407-2.659 2.81H.54v-2.88h6.634l-.04.07-5.425 9.307h2.854c.071 0 .141-.003.212-.009l.072-.006.09-.01L8.491 7h.07zm9.883 2.095l-1.313 3.576.007.007.067.066c.193.197.347.43.452.684l.007.017h2.375l-1.595-4.35zm-10.648 0l-1.599 4.35h3.194l-1.595-4.35zm6.026-1.698h-1.02v4.427h1.336c1.353 0 1.767-.493 1.767-2.107 0-1.517-.72-2.32-2.083-2.32z',
    category: 'Fashion'
  },
  {
    title: 'Google',
    path: 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z',
    category: 'Tech'
  },
  {
    title: '2k',
    path: 'M0 .002v23.997h24V.002H0Zm10.962 5.592c2.36 0 4.443.416 3.799 2.423-.434 1.365-2.017 1.918-3.114 2.109l-2.757.489c-.655.114-1.039.277-1.3.549h6.012l-.818 2.529 3.446-2.529h3.755l-4.091 2.772 2.07 4.402h-3.766l-1.082-2.754-1.197.826-.619 1.928H8.471l1.718-5.374h-6.25C4.874 10.2 6.891 9.36 8.731 8.989l2.264-.457c.387-.07.64-.259.736-.557.136-.416-.32-.581-.994-.581-.784 0-1.604.074-1.984 1.005H5.646c1.009-2.474 3.483-2.805 5.316-2.805Z',
    category: 'Gaming'
  },
]

// Colores para las categorías
const categoryColors = {
  'Tech': 'from-blue-500 to-blue-600',
  'Development': 'from-green-500 to-green-600',
  'Software': 'from-purple-500 to-purple-600',
  'Fashion': 'from-pink-500 to-pink-600',
  'E-commerce': 'from-orange-500 to-orange-600',
  'Retail': 'from-red-500 to-red-600',
  'Food': 'from-yellow-500 to-yellow-600',
  'Gaming': 'from-indigo-500 to-indigo-600'
}
</script>

<template>
  <div class="relative py-8 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-3xl">
    
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-4 left-4 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
      <div class="absolute bottom-4 right-4 w-40 h-40 bg-amber-200/20 rounded-full blur-2xl"></div>
      
      <!-- Geometric patterns -->
      <div class="absolute top-8 right-8 w-12 h-12 border border-blue-200/30 rotate-45 animate-pulse"></div>
      <div class="absolute bottom-8 left-8 w-8 h-8 bg-amber-200/30 rotate-12 rounded"></div>
    </div>

    <!-- Header -->
    <div class="text-center mb-8 relative z-10">
      <h3 class="text-2xl font-bold text-gray-800 mb-2">Marcas que Confían en Nosotros</h3>
      <p class="text-gray-600">Empresas líderes que han elegido BestBuild para sus proyectos</p>
    </div>

    <!-- Enhanced animated carousel -->
    <div class="relative overflow-hidden">
      <!-- Main carousel -->
      <div class="flex items-center animate-scroll-continuous">
        <!-- First set of logos -->
        <div
          v-for="(logo, index) in logos"
          :key="`first-${index}`"
          class="group flex-shrink-0 w-48 h-32 mx-4 relative"
        >
          <div class="w-full h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            
            <!-- Background gradient for category -->
            <div :class="['absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br', categoryColors[logo.category]]"></div>
            
            <!-- Logo SVG -->
            <div class="relative z-10 mb-3">
              <svg
                :title="logo.title"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-16 h-16 fill-current text-gray-700 group-hover:text-gray-900 transition-all duration-300 group-hover:scale-110"
              >
                <path :d="logo.path" />
              </svg>
            </div>
            
            <!-- Company name -->
            <h4 class="text-sm font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 text-center">
              {{ logo.title }}
            </h4>
            
            <!-- Category badge -->
            <div :class="['absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r', categoryColors[logo.category]]">
              {{ logo.category }}
            </div>
            
            <!-- Hover effect overlay -->
            <div class="absolute inset-0 border-2 border-transparent group-hover:border-blue-300/50 rounded-2xl transition-all duration-300"></div>
            
            <!-- Success indicator -->
            <div class="absolute bottom-2 left-2 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
              <div class="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
        </div>

        <!-- Duplicate set for seamless loop -->
        <div
          v-for="(logo, index) in logos"
          :key="`second-${index}`"
          class="group flex-shrink-0 w-48 h-32 mx-4 relative"
        >
          <div class="w-full h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            
            <div :class="['absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br', categoryColors[logo.category]]"></div>
            
            <div class="relative z-10 mb-3">
              <svg
                :title="logo.title"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-16 h-16 fill-current text-gray-700 group-hover:text-gray-900 transition-all duration-300 group-hover:scale-110"
              >
                <path :d="logo.path" />
              </svg>
            </div>
            
            <h4 class="text-sm font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 text-center">
              {{ logo.title }}
            </h4>
            
            <div :class="['absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r', categoryColors[logo.category]]">
              {{ logo.category }}
            </div>
            
            <div class="absolute inset-0 border-2 border-transparent group-hover:border-blue-300/50 rounded-2xl transition-all duration-300"></div>
            
            <div class="absolute bottom-2 left-2 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
              <div class="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gradient overlays for smooth edges -->
      <div class="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white/80 via-white/20 to-transparent pointer-events-none z-10"></div>
      <div class="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white/80 via-white/20 to-transparent pointer-events-none z-10"></div>
    </div>

    <!-- Stats section -->
    <div class="mt-8 text-center relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        <div class="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-blue-100">
          <div class="text-2xl font-black text-blue-600">{{ logos.length }}+</div>
          <div class="text-sm text-gray-600">Marcas Asociadas</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-green-100">
          <div class="text-2xl font-black text-green-600">98%</div>
          <div class="text-sm text-gray-600">Satisfacción</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-amber-100">
          <div class="text-2xl font-black text-amber-600">24/7</div>
          <div class="text-sm text-gray-600">Soporte</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-purple-100">
          <div class="text-2xl font-black text-purple-600">40+</div>
          <div class="text-sm text-gray-600">Años Exp.</div>
        </div>
      </div>
    </div>

    <!-- Trust indicators -->
    <div class="mt-6 flex justify-center items-center space-x-6 text-sm text-gray-600 relative z-10">
      <div class="flex items-center space-x-2">
        <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span>Proyectos Activos</span>
      </div>
      <div class="flex items-center space-x-2">
        <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Certificado ISO</span>
      </div>
      <div class="flex items-center space-x-2">
        <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
        </svg>
        <span>Calidad Premium</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scroll-continuous {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.animate-scroll-continuous {
  animation: scroll-continuous 30s linear infinite;
  width: calc(200% + 32px); /* Account for margins */
}

/* Pause animation on hover */
.animate-scroll-continuous:hover {
  animation-play-state: paused;
}

@media (max-width: 640px) {
  .animate-scroll-continuous {
    animation-duration: 25s;
  }
}
</style>