<template>
    <footer>
      <span class="container"> Domingo Mesa Maliniak © {{date.getFullYear()}} </span>
    </footer>
</template>

<script setup>
    import { ref } from 'vue';
    const date = ref(new Date());
</script>

<style scoped>
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