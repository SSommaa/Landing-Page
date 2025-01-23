<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const errors = reactive({
  email: '',
  password: '',
})

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const validateForm = () => {
  errors.email = ''
  errors.password = ''
  let isValid = true

  if (!email.value) {
    errors.email = 'Email es requerido'
    isValid = false
  } else if (!validateEmail(email.value)) {
    errors.email = 'Email no válido'
    isValid = false
  }

  if (password.value.length < 6) {
    errors.password = 'Mínimo 6 caracteres'
    isValid = false
  }

  return isValid
}

const handleRegister = async () => {
  if (!validateForm()) return

  try {
    const response = await axios.post('https://reqres.in/api/register', {
      email: email.value,
      password: password.value,
    })

    // Almacenar el token JWT
    localStorage.setItem('authToken', response.data.token)

    // Redirigir a área protegida
    router.push({ name: 'Home' })
  } catch (error) {
    alert(error.response?.data?.error || 'Error en el registro')
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Registro</h2>

      <form @submit.prevent="handleRegister" class="space-y-6">
        <div>
          <label class="block text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            v-model="email"
            required
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</div>
        </div>

        <div>
          <label class="block text-gray-700 mb-2">Contraseña:</label>
          <input
            type="password"
            v-model="password"
            required
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</div>
        </div>

        <button
          type="submit"
          class="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-3 px-6 rounded-lg transition-all border border-black"
        >
          Registrarse
        </button>
      </form>

      <p class="text-center mt-6 text-gray-600">
        ¿Ya tienes cuenta?
        <router-link to="/login" class="text-primary hover:text-primary/80 font-semibold">
          Inicia sesión
        </router-link>
      </p>
    </div>
  </div>
</template>
