<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import { useRouter } from 'vue-router'
import { handleLogin } from '@/services/auth.service'

const router = useRouter()
const email = ref('')
const password = ref('')
const errorMessage = ref('')

onMounted(() => {
  if (localStorage.getItem('authToken')) {
    router.push('profile')
  }
})

const Login = async () => {
  await handleLogin(email, password)
  const token = localStorage.getItem('authToken')
  if (token) {
    router.push('profile')
  } else {
    throw new Error('Error al guardar el token en localStorage.')
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Iniciar Sesión</h2>

      <form @submit.prevent="Login" class="space-y-6">
        <div>
          <label class="block text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            v-model="email"
            required
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-2">Contraseña:</label>
          <input
            type="password"
            v-model="password"
            required
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div v-if="errorMessage" class="text-red-500 text-sm text-center">{{ errorMessage }}</div>

        <button
          type="submit"
          class="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-3 px-6 rounded-lg transition-all border border-black"
        >
          Acceder
        </button>
      </form>

      <p class="text-center mt-6 text-gray-600">
        ¿No tienes cuenta?
        <router-link to="/register" class="text-primary hover:text-primary/80 font-semibold">
          Regístrate
        </router-link>
      </p>
    </div>
  </div>
</template>
