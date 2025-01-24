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
  <div class="p-8 text-center text-gray-600">Redirigiendo a TPH Marketing...</div>
</template>
