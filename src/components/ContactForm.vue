<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const showSuccess = ref(false)
const isSubmitting = ref(false)

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const handleSubmit = () => {
  Object.keys(errors).forEach((key) => (errors[key] = ''))
  isSubmitting.value = true

  let isValid = true

  if (!form.name.trim()) {
    errors.name = 'Por favor ingresa tu nombre'
    isValid = false
  }

  if (!validateEmail(form.email)) {
    errors.email = 'Por favor ingresa un correo válido'
    isValid = false
  }

  if (!form.subject.trim()) {
    errors.subject = 'Por favor ingresa un asunto'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Por favor escribe tu mensaje'
    isValid = false
  }

  setTimeout(() => {
    isSubmitting.value = false
    
    if (isValid) {
      showSuccess.value = true
      // Reset form
      Object.keys(form).forEach((key) => (form[key] = ''))
      
      setTimeout(() => {
        showSuccess.value = false
      }, 5000)
    }
  }, 1500)
}
</script>

<template>
  <!-- Agregamos pt-24 para compensar el navbar fijo -->
  <section class="relative py-20 pt-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full"></div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
    </div>

    <div class="container mx-auto px-4 max-w-6xl relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        
        <!-- Left side - Content -->
        <div class="text-white space-y-8">
          <div>
            <div class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-6">
              <span class="text-amber-400 text-sm font-semibold tracking-wide">📞 CONTÁCTANOS</span>
            </div>
            
            <h2 class="text-4xl md:text-6xl font-black mb-6">
              <span class="block text-white">Hablemos de tu</span>
              <span class="block text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">
                Proyecto
              </span>
            </h2>
            
            <p class="text-xl text-gray-300 mb-8 leading-relaxed">
              Estamos aquí para convertir tus ideas en realidad. 
              Nuestro equipo de expertos está listo para ayudarte en cada paso del camino.
            </p>
          </div>

          <!-- Contact info cards -->
          <div class="space-y-6">
            <div class="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-white">Teléfono</h3>
                <p class="text-gray-300">+36 123 456 789</p>
              </div>
            </div>

            <div class="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-white">Email</h3>
                <p class="text-gray-300">info@BestBuild.com</p>
              </div>
            </div>

            <div class="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-white">Ubicación</h3>
                <p class="text-gray-300">Av. Constructores 1234, Ciudad</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right side - Form -->
        <div class="relative">
          <!-- Form container with glassmorphism -->
          <div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            
            <!-- Success message -->
            <div 
              v-if="showSuccess" 
              class="mb-8 p-6 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 text-green-100 rounded-2xl backdrop-blur-sm flex items-center space-x-3 animate-fade-in"
            >
              <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="font-semibold">¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.</span>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name field -->
              <div class="space-y-2">
                <label class="block text-white text-sm font-semibold mb-2">
                  Nombre completo *
                </label>
                <div class="relative">
                  <input
                    type="text"
                    v-model="form.name"
                    required
                    class="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                    :class="{ 'border-red-500 focus:ring-red-400': errors.name }"
                    placeholder="Tu nombre completo"
                  />
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                </div>
                <p v-if="errors.name" class="text-red-400 text-sm mt-1 animate-shake">{{ errors.name }}</p>
              </div>

              <!-- Email field -->
              <div class="space-y-2">
                <label class="block text-white text-sm font-semibold mb-2">
                  Correo electrónico *
                </label>
                <div class="relative">
                  <input
                    type="email"
                    v-model="form.email"
                    required
                    class="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                    :class="{ 'border-red-500 focus:ring-red-400': errors.email }"
                    placeholder="tu@email.com"
                  />
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
                <p v-if="errors.email" class="text-red-400 text-sm mt-1 animate-shake">{{ errors.email }}</p>
              </div>

              <!-- Subject field -->
              <div class="space-y-2">
                <label class="block text-white text-sm font-semibold mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                  :class="{ 'border-red-500 focus:ring-red-400': errors.subject }"
                  placeholder="¿En qué podemos ayudarte?"
                />
                <p v-if="errors.subject" class="text-red-400 text-sm mt-1 animate-shake">{{ errors.subject }}</p>
              </div>

              <!-- Message field -->
              <div class="space-y-2">
                <label class="block text-white text-sm font-semibold mb-2">
                  Mensaje *
                </label>
                <textarea
                  v-model="form.message"
                  rows="5"
                  required
                  class="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 resize-none"
                  :class="{ 'border-red-500 focus:ring-red-400': errors.message }"
                  placeholder="Cuéntanos más detalles sobre tu proyecto..."
                ></textarea>
                <p v-if="errors.message" class="text-red-400 text-sm mt-1 animate-shake">{{ errors.message }}</p>
              </div>

              <!-- Submit button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 disabled:from-gray-500 disabled:to-gray-600 text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 disabled:scale-100 disabled:shadow-none"
              >
                <span v-if="!isSubmitting" class="flex items-center justify-center space-x-2">
                  <span>Enviar Mensaje</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                </span>
                <span v-else class="flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                  <span>Enviando...</span>
                </span>
              </button>
            </form>

            <!-- Additional info -->
            <div class="mt-8 pt-8 border-t border-white/20 text-center">
              <p class="text-gray-300 text-sm">
                Respuesta garantizada en menos de 24 horas
              </p>
            </div>
          </div>

          <!-- Decorative elements -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-full blur-xl animate-pulse"></div>
          <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>

    <!-- Floating elements -->
    <div class="absolute top-20 right-20 w-3 h-3 bg-amber-400 rounded-full animate-ping"></div>
    <div class="absolute bottom-32 left-16 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-500"></div>
    <div class="absolute top-1/2 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
  </section>
</template>

<style scoped>
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

.animate-shake {
  animation: shake 0.5s ease-in-out;
}
</style>