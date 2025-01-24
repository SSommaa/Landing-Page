<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  if (!localStorage.getItem('authToken')) {
    router.replace('/login')
  } else {
    window.location.href = 'https://tphmarketing.com'
  }
})
</script>
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="p-8 max-w-md text-center space-y-4">
      <h2 class="text-xl font-semibold text-gray-800">
        Redirigiendo a
        <span class="text-blue-600">TPH Marketing</span>
      </h2>
      <p class="text-gray-500">Por favor espera un momento...</p>
    </div>
  </div>
</template>
