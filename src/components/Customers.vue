<script setup>
import CustomerCard from './Cards/CustomerCard.vue'
</script>
<template>
  <section class="py-12 bg-gray-100">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-4">Quiénes Confían en Nosotros</h2>
      <p class="text-lg mb-6">
        En Best Build, nuestro compromiso con la excelencia ha ganado la confianza de clientes y
        aliados en diversos sectores. Desde reconocidas marcas globales hasta familias que buscan
        construir su hogar ideal, todos comparten un objetivo común: calidad y confianza.
      </p>
      <ul class="text-left text-lg space-y-4">
        <li>
          🤝 <strong>Confianza Comprobada:</strong> Más de <span>[40]</span> años de experiencia
          respaldan nuestro liderazgo en la industria.
        </li>
        <li>
          🏢 <strong>Clientes Diversos:</strong> Trabajamos con empresas, instituciones y
          particulares para hacer realidad sus proyectos.
        </li>
        <li>
          🌟 <strong>Resultados que Hablan:</strong> Nuestra reputación está construida sobre
          proyectos exitosos y relaciones duraderas.
        </li>
      </ul>
      <p class="text-lg mt-6">
        Gracias a su confianza, seguimos creciendo y construyendo un futuro sólido, juntos.
      </p>
    </div>
    <span> <CustomerCard /></span>
  </section>
</template>
