<template>
  <div class="item">
    <div class="input-group flex-nowrap">
      <span class="input-group-text" id="addon-wrapping" @click="getResearch">@</span>
      <input 
        class="form-control" 
        v-model="research" 
        placeholder="Search for recipe..." 
        v-on:keyup="keyupEnter"
        autocomplete="off"
      >
    </div>
  </div>
</template>

<script>
  import { ref, provide } from 'vue';
  export default{
    setup(props, context){
      const research = ref('');
      const getResearch = () => {
        context.emit('research', research.value)
      }
      const keyupEnter = (e) => {
        if(e.keyCode === 13) context.emit('research', research.value)
      }
      return{
        research,
        getResearch,
        keyupEnter
      }
    }
  }
</script>

<style scoped>
</style>
