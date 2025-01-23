<script setup>
import NavBar from './components/Navbar.vue'
</script>
<template>
  <NavBar />

  <router-link to="/"></router-link>
  <!-- <router-link to="/login"></router-link> -->
  <!-- <router-link to="/register"></router-link> -->

  <router-view />
</template>
