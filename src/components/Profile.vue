<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const user = ref({ email: '' })

onMounted(() => {
  if (!localStorage.getItem('authToken')) {
    router.replace({ name: 'Login' })
  }
})

onMounted(async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users/4') // Endpoint de ejemplo
    user.value = response.data.data
  } catch (error) {
    console.error('Error obteniendo datos del usuario:', error)
  }
})

const handleLogout = () => {
  localStorage.removeItem('authToken')
  router.push({ name: 'Login' })
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Perfil de Usuario</h1>

      <div class="space-y-4">
        <div>
          <h2 class="text-xl font-semibold text-gray-700">Información personal</h2>
          <p class="text-gray-600">Email: {{ user.email }}</p>
        </div>

        <button
          @click="handleLogout"
          class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  </div>
</template>
