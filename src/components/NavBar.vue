<script setup>
import { ref, onMounted } from 'vue'
import router from '@/router/router'

const isLoggedIn = ref(false)

const checkAuth = () => {
  isLoggedIn.value = !!localStorage.getItem('authToken')
}

const navigate = (where) => {
  router.push(where)
}

const handleLogout = () => {
  localStorage.removeItem('authToken')
  localStorage.removeItem('userData')
  isLoggedIn.value = false
  router.push('/login')
  window.location.reload()
}

onMounted(() => {
  checkAuth()
})
</script>

<template>
  <nav class="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-70 text-white px-6 py-4 z-10">
    <div class="container mx-auto flex items-center justify-between movil">
      <h1 @click="navigate('/')" class="text-2xl font-bold cursor-pointer">BestBuild</h1>

      <div class="flex items-center space-x-6">
        <button
          v-if="!isLoggedIn"
          @click="navigate('login')"
          class="hover:bg-gray-700 px-4 py-2 rounded"
        >
          Login
        </button>
        <button
          v-if="!isLoggedIn"
          @click="navigate('register')"
          class="hover:bg-gray-700 px-4 py-2 rounded"
        >
          Register
        </button>
        <button @click="navigate('contacta')" class="hover:bg-gray-700 px-4 py-2 rounded">
          Contacta
        </button>
        <button @click="navigate('Profile')" class="hover:bg-gray-700 px-4 py-2 rounded">
          Perfil
        </button>
        <button
          v-if="isLoggedIn"
          @click="handleLogout"
          class="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media (max-width: 550px) {
  nav {
    padding-left: 0;
    padding-right: 0;
  }
  h1 {
    margin-left: 10px;
  }
  .movil {
    flex-wrap: wrap;
    margin-left: -10px;
  }
}
</style>
