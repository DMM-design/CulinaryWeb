<template>
    <div class="recipe">
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
export default{
    setup()
    {
       const route = useRoute();
       console.log(route.params.id);
    }
}
</script>

<style scoped>
@media (min-width: 300px) {
  .recipe {
    min-height: 92.3vh;
  }
}
@media screen and (max-width: 600px) {
  .recipe {
    min-height: 89.4vh;
    background-color: olive;
  }
}
</style>