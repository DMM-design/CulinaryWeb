<template>
  <div class="item">
      <p>
        <label for="search">
        </label>
        <input v-model="research" placeholder="Search..." autocomplete="off">
        {{store.research}}
        <button @click="getResearch"></button>
      </p>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { researchStore } from '@/stores/research';

  const store = researchStore();
  const research = ref('');
  const test = ref('');

  const getResearch = () => {
    store.research = research.value;
  }
</script>

<style scoped>
</style>
