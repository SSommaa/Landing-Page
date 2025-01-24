<script setup>
import router from '@/router/router'

const navigate = (where) => {
  router.push(where)
}
</script>

<template>
  <nav class="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-70 text-white px-6 py-4 z-10">
    <div class="container mx-auto flex items-center justify-between">
      <h1 @click="navigate('/')" class="text-2xl font-bold cursor-pointer">BestBuild</h1>

      <div class="flex items-center space-x-6">
        <button @click="navigate('login')" class="hover:bg-gray-700 px-4 py-2 rounded">
          Login
        </button>
        <button @click="navigate('register')" class="hover:bg-gray-700 px-4 py-2 rounded">
          Register
        </button>
        <button @click="navigate('contacta')" class="hover:bg-gray-700 px-4 py-2 rounded">
          Contacta
        </button>
        <button @click="navigate('Profile')" class="hover:bg-gray-700 px-4 py-2 rounded">
          Perfil
        </button>
      </div>
    </div>
  </nav>
</template>
