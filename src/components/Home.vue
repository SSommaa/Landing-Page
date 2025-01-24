<script setup>
import AboutUs from './AboutUs.vue'
import hero from './Hero.vue'
import Services from './Services.vue'
import Footer from './Footer.vue'
import FeaturedProjects from './FeaturedProjects.vue'
import CallToAction from './CallToAction.vue'
import Customers from './Customers.vue'
</script>

<template>
  <div class="">
    <hero />
    <AboutUs id="about" />
    <Services id="services" />
    <FeaturedProjects id="projects" />
    <Customers />
    <CallToAction />
    <Footer />
  </div>
</template>
<style scoped></style>
