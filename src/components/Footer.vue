<template>
    <footer class="mt-5">
      <span class="container"> Domingo Mesa Maliniak © {{date.getFullYear()}} </span>
    </footer>
</template>

<script setup>
    import { ref } from 'vue';
    const date = ref(new Date());
</script>

<style scoped>
    footer { 
        width: auto;
        height: 10vh;
        display: flex;
        align-items: center;
        text-align: center;
        color: var(--txt_color);
        background-color: var(--header_footer_bg);
    }
    @media screen and (max-width: 600px) {
        footer {
            height: 5vh;
            align-items: baseline;
        }
    }
</style>