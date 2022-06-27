<template>
  <div>
    <NavBar />
    <RouterView class="container"/>
    <Footer />
  </div>
</template>

<script setup>
  import NavBar from '@/components/NavBar.vue';
  import Footer from '@/components/Footer.vue';
</script>

<style>
  @import '@/assets/base.css';
</style>
