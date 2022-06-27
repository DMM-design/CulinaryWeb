<template>
  <div class="item">
      <p>
        <label for="search">
          <button @click="getResearch">Test</button>
        </label>
        <input v-model="research" placeholder="Search..." autocomplete="off">
      </p>
  </div>
</template>

<script>
  import { ref, provide } from 'vue';
  export default{
    name: '',
    setup(props, context){
      const research = ref('');
      const getResearch = () => {
        context.emit('research', research.value)
      }
      return{
        research,
        getResearch
      }
    }
  }
</script>

<style scoped>
</style>
