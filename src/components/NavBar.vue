<template>
  <nav class="navbar bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
         <RouterLink to="/" class="nav-link text-light d-flex align-items-center gap-3">
            <Egg /> <h1>Culinary Web</h1>
         </RouterLink>
      </a>
    </div>
  </nav>
</template>

<script setup>
  import Egg from './icons/Egg.vue'
</script>

<style scoped>
    nav{
        background-color: var(--header_footer_bg) !important;
        color: var(--txt_color);
    }
</style>