<template>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid container">
          <div class="navbar-nav">
            <RouterLink to="/" class="nav-link text-light">Home</RouterLink>
            <RouterLink to="/favourite" class="nav-link text-light">Favourite</RouterLink>
          </div>
      </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    nav{
        background-color: var(--header_footer_bg) !important;
        color: var(--txt_color);
    }
</style>