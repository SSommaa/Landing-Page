<script setup>
import { HammerIcon, PaintBucketIcon, RulerIcon } from 'lucide-vue-next'

const services = [
  {
    icon: HammerIcon,
    title: 'Contratación General',
    description: 'Gestión integral de proyectos de principio a fin.',
  },
  {
    icon: PaintBucketIcon,
    title: 'Renovaciones',
    description: 'Dale nueva vida a estructuras existentes con nuestras renovaciones expertas.',
  },
  {
    icon: RulerIcon,
    title: 'Construcciones Personalizadas',
    description:
      'Soluciones de construcción personalizadas para satisfacer tus necesidades únicas.',
  },
]
</script>

<template>
  <section id="services" class="py-20 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Nuestros servicios</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-white p-6 rounded-lg shadow-md text-center"
        >
          <component :is="service.icon" size="40" class="text-yellow-500 mb-4 mx-auto" />
          <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
          <p class="text-gray-600 text-lg">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
