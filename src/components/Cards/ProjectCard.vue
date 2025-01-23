<script setup>
import router from '@/router/router'
defineProps({
  imagen: String,
  descripcion: String,
})

const navigate = (where) => {
  router.push(where)
}
</script>

<template>
  <div class="p-6">
    <div
      class="relative w-full md:w-full h-96 bg-gray-100 rounded-lg overflow-hidden shadow-lg group"
    >
      <img
        :src="imagen"
        alt="Proyecto"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4 opacity-0 transform translate-y-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
      >
        <p class="text-lg">{{ descripcion }}</p>
      </div>
    </div>
  </div>
</template>
