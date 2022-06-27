<template>
  <div class="about">
    <ResearchBar />
    <h1>This is an Home page</h1>
  </div>
</template>

<script setup>
  import ResearchBar from '@/components/Research.vue';
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
  }
}
</style>


