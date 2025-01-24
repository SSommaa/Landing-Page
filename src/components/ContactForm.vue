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

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const handleSubmit = () => {
  Object.keys(errors).forEach((key) => (errors[key] = ''))

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

  if (isValid) {
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 3000)
  }
}
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4 max-w-2xl">
      <div class="bg-white rounded-xl shadow-lg p-8 md:p-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Contáctanos</h2>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="block text-gray-700 mb-2 font-medium">Nombre completo</label>
            <input
              type="text"
              v-model="form.name"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              :class="{ 'border-red-500': errors.name }"
            />
            <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
          </div>

          <div>
            <label class="block text-gray-700 mb-2 font-medium">Correo electrónico</label>
            <input
              type="email"
              v-model="form.email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              :class="{ 'border-red-500': errors.email }"
            />
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
          </div>

          <div>
            <label class="block text-gray-700 mb-2 font-medium">Asunto</label>
            <input
              type="text"
              v-model="form.subject"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              :class="{ 'border-red-500': errors.subject }"
            />
            <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
          </div>

          <div>
            <label class="block text-gray-700 mb-2 font-medium">Mensaje</label>
            <textarea
              v-model="form.message"
              rows="5"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              :class="{ 'border-red-500': errors.message }"
            ></textarea>
            <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
          </div>

          <button
            type="submit"
            class="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-3 px-6 rounded-lg transition-all border border-black"
          >
            Enviar Mensaje
          </button>
        </form>

        <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 text-green-700 rounded-lg">
          ✔️ Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.
        </div>
      </div>
    </div>
  </section>
</template>
