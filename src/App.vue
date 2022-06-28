<template>
  <div class="all">
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
  .all{
    background-color: var(--bg);
  }
</style>
