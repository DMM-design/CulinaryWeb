<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid container">
          <div class="navbar-nav">
            <RouterLink to="/" class="nav-link text-light">Home</RouterLink>
            <RouterLink to="/favourite" class="nav-link text-light">Favourite</RouterLink>
          </div>
      </div>
    </nav>
    <RouterView class="container"/>
    <footer>
      <span class="container"> Domingo Mesa Maliniak © {{date.getFullYear()}} </span>
    </footer>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const date = ref(new Date());
</script>

<style>
  @import '@/assets/base.css';

  nav{
    background-color: var(--header_footer_bg) !important;
    color: var(--txt_color);
  }

  footer { 
    margin-top: auto;
    width: 100vw;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--txt_color);
    background-color: var(--header_footer_bg);
  }
</style>
